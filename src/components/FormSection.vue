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

