<template>
  <!-- form section  -->
  <section class="form_section container mb-5" id="formsection">
    <div class="row justify-content-start">
      <div class="form_inner col-xl-6 col-lg-7 col-md-10 col-sm-12">
        <form netlify class="form" name="contact" method="POST">
          <h1 class="text-center">{{ $t('contact') }}</h1>

          <div class="form_input">
            <input name="name" type="text" :placeholder="$t('name_placeholder')" class="form-control" required>
          </div>

          <div class="form_input">
            <input name="email" type="email" :placeholder="$t('email_placeholder')" class="form-control" required>
          </div>

          <div class="form_input">
            <input name="phone" id="phone-mask" ref="phoneMask" type="text" :placeholder="$t('phone_placeholder')" class="form-control">
          </div>

          <div class="form_input">
            <label class="form-label">{{ $t('select_services') }}</label>

            <div class="custom-dropdown" tabindex="0" ref="servicesDropdown" @mouseleave="servicesOpen = false">
              <div class="custom-dropdown__value" @click="toggleServices">
                <span v-if="!selectedServices.length" class="placeholder">{{ $t('select_services') }}</span>
                <template v-else>
                  <span class="selected-values">{{ formattedSelected }}</span>
                </template>
                <span class="dropdown-arrow">▾</span>
              </div>
              <div v-if="servicesOpen" class="custom-dropdown__menu" @click.stop>
                <label
                  v-for="service in availableServices"
                  :key="service.titleKey"
                  class="custom-dropdown__option"
                >
                  <input
                    type="checkbox"
                    name="services"
                    :value="service.titleKey"
                    v-model="selectedServices"
                  />
                  <span>{{ $t(service.titleKey) }} — {{ service.price }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="mt-3" data-netlify-recaptcha="true"></div>

          <div class="form_buttons d-flex justify-content-center">
            <button type="submit" class="form_button btn service_sec_but mt-3 mb-3">{{ $t('send') }}</button>
          </div>
        </form>
      </div>

      <div class="selection_panel col-xl-4 col-lg-4 col-md-10 col-sm-12">
        <div class="selection_box">
          <h3 class="selection_title">{{ $t('selected_services') }}</h3>
          <div class="selection_values">
            <p v-if="!selectedServices.length" class="selection_empty">
              {{ $t('no_services_selected') }}
            </p>
            <ul v-else class="selection_list">
              <li v-for="item in selectedItems" :key="item.key" class="selection_item">
                <span class="selection_text">{{ item.label }}</span>
                <button type="button" class="remove-service" @click="removeService(item.key)" aria-label="Remove">
                  ×
                </button>
              </li>
            </ul>
          </div>

          <div class="selection_total" v-if="selectedServices.length">
            <span class="total-label">{{ $t('total') }}:</span>
            <span class="total-value">{{ formattedTotal }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- form section  -->
</template>

<script>
export default {
  name: "FormSection",
  data() {
    return {
      selectedServices: [],
      servicesOpen: false,
      availableServices: [
        { titleKey: 'wordpress_landing', price: "3 000 000 so'm" },
        { titleKey: 'wordpress_site', price: "6 000 000 so'm" },
        { titleKey: 'corporate_site', price: "7 500 000 so'm" },
        { titleKey: 'simple_site', price: "8 000 000 so'm" },
        { titleKey: 'complex_site', price: "10 000 000 so'm" },
        { titleKey: 'very_complex_site', price: "12 000 000 so'm" },
        { titleKey: 'yandex_google_ads', price: "4 000 000 so'm" },
        { titleKey: 'social_ads', price: "4 000 000 so'm" },
        { titleKey: 'all_platform_ads', price: "5 000 000 so'm" },
        { titleKey: 'seo_ads', price: "6 000 000 so'm" },
        { titleKey: 'marketing_audit', price: "10 000 000 so'm" },
        { titleKey: 'marketing_plan', price: "15 000 000 so'm" },
        { titleKey: 'email_marketing', price: "8 000 000 so'm" },
        { titleKey: 'push_ads', price: "6 500 000 so'm" },
        { titleKey: 'guerrilla_marketing', price: "30 000 000 so'm" },
        { titleKey: 'creative_set', price: "3 000 000 so'm" },
        { titleKey: 'logo_design', price: "1 500 000 so'm" },
      ],
    }
  },
  mounted() {
    document.addEventListener('click', this.onClickOutside)

    const stored = localStorage.getItem('selectedServices')
    if (stored) {
      try {
        const values = JSON.parse(stored)
        if (Array.isArray(values)) {
          this.selectedServices = values
        }
      } catch (e) {
        // ignore invalid format
      }
    }

    if (typeof IMask !== 'undefined' && this.$refs.phoneMask) {
      IMask(this.$refs.phoneMask, {
        mask: "+{998}(00)000-00-00",
      })
    }
  },
  unmounted() {
    document.removeEventListener('click', this.onClickOutside)
  },
  computed: {
    formattedSelected() {
      if (!this.selectedServices.length) return ''
      return this.selectedServices
        .map((key) => {
          const service = this.availableServices.find((s) => s.titleKey === key)
          if (!service) return key
          return `${this.$t(service.titleKey)} — ${service.price}`
        })
        .join(', ')
    },
    selectedItems() {
      return this.selectedServices
        .map((key) => {
          const service = this.availableServices.find((s) => s.titleKey === key)
          if (!service) return { key, label: key }
          return {
            key,
            label: `${this.$t(service.titleKey)} — ${service.price}`,
          }
        })
    },
    totalAmount() {
      return this.selectedServices.reduce((sum, key) => {
        const service = this.availableServices.find((s) => s.titleKey === key)
        if (!service) return sum
        const digits = String(service.price).replace(/\D+/g, '')
        return sum + (digits ? Number(digits) : 0)
      }, 0)
    },
    formattedTotal() {
      if (!this.totalAmount) return ''
      return new Intl.NumberFormat('ru-RU').format(this.totalAmount) + " so'm"
    },
  },
  methods: {
    toggleServices() {
      this.servicesOpen = !this.servicesOpen
    },
    removeService(key) {
      this.selectedServices = this.selectedServices.filter((s) => s !== key)
      localStorage.setItem('selectedServices', JSON.stringify(this.selectedServices))
    },
    onClickOutside(event) {
      const dropdown = this.$refs.servicesDropdown
      if (!dropdown) return
      if (!dropdown.contains(event.target)) {
        this.servicesOpen = false
      }
    },
  },
}
</script>

<style scoped>
.form_section {
  background: linear-gradient(135deg, rgba(34, 34, 73, 0.95), rgba(34, 34, 73, 0.6));
  border-radius: 2rem;
  padding: 3rem 1.5rem;
  color: #fff;
}

.selection_panel {
  margin-top: 1.5rem;
}

.selection_box {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 29, 29, 0.5);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.selection_title {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
}

.selection_values p {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

.selection_list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.selection_item {
  margin-bottom: 0.6rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remove-service {
  background: transparent;
  border: none;
  color: rgba(255, 29, 29, 0.95);
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  padding: 0 0.25rem;
}

.remove-service:hover {
  color: rgba(255, 29, 29, 1);
}

.selection_empty {
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

.selection_total {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.total-value {
  font-weight: 700;
  color: rgba(255, 29, 29, 0.95);
}

.form_inner {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 29, 29, 0.5);
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
}

.form h1 {
  color: #fff;
  margin-bottom: 1.5rem;
}

.form_input {
  margin-bottom: 1.25rem;
}

.form-control {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 29, 29, 0.65);
  border-radius: 0.75rem;
  color: #fff;
  padding: 0.85rem 1rem;
}

.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 29, 29, 0.4);
  border-color: rgba(255, 29, 29, 0.85);
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.custom-dropdown {
  position: relative;
  border: 1px solid rgba(255, 29, 29, 0.65);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  padding: 0.6rem 0.75rem;
  outline: none;
}

.custom-dropdown:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 29, 29, 0.4);
}

.custom-dropdown__value {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.5rem;
}

.selected-values {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(255, 255, 255, 0.95);
}

.custom-dropdown .placeholder {
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
}

.tag {
  background: rgba(255, 29, 29, 0.85);
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  font-size: 0.85rem;
}

.dropdown-arrow {
  margin-left: auto;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
}

.custom-dropdown__menu {
  position: absolute;
  inset: auto 0 0 0;
  background: rgba(34, 34, 73, 0.95);
  border: 1px solid rgba(255, 29, 29, 0.75);
  border-radius: 0.75rem;
  margin-top: 0.5rem;
  z-index: 10;
  max-height: 260px;
  overflow-y: auto;
  padding: 0.65rem;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.35);
}

.custom-dropdown__option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.25rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #fff;
  transition: background 0.2s ease;
}

.custom-dropdown__option:hover {
  background: rgba(255, 255, 255, 0.1);
}

.custom-dropdown__option input {
  width: 18px;
  height: 18px;
  accent-color: rgba(255, 29, 29, 0.9);
}

.custom-dropdown__menu {
  position: absolute;
  inset: auto 0 0 0;
  background: rgba(34, 34, 73, 0.95);
  border: 1px solid rgba(255, 29, 29, 0.75);
  border-radius: 0.75rem;
  margin-top: 0.5rem;
  z-index: 10;
  max-height: 260px;
  overflow-y: auto;
  padding: 0.65rem;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.35);
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 29, 29, 0.75) rgba(255, 255, 255, 0.08);
}

.custom-dropdown__menu::-webkit-scrollbar {
  width: 8px;
}

.custom-dropdown__menu::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
}

.custom-dropdown__menu::-webkit-scrollbar-thumb {
  background: rgba(255, 29, 29, 0.7);
  border-radius: 4px;
}

.custom-dropdown__menu::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 29, 29, 0.9);
}

.service-option {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 29, 29, 0.5);
  border-radius: 0.75rem;
  padding: 0.75rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.service-option input {
  width: 17px;
  height: 17px;
}

.service-option:hover {
  background: rgba(255, 29, 29, 0.15);
  transform: translateY(-2px);
}

.form_buttons .service_sec_but {
  background: rgba(255, 29, 29, 0.9);
  border-color: rgba(255, 29, 29, 0.9);
  color: #fff;
}

.form_buttons .service_sec_but:hover {
  background: rgba(255, 29, 29, 1);
  border-color: rgba(255, 29, 29, 1);
}

.form_buttons {
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .form_section {
    padding: 2rem 1rem;
  }
}
</style>
