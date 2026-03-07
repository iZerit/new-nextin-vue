<template>
  <div class="services_title text-center mb-5 mt-5">
    <h2>{{ $t('service_prices') }}</h2>
  </div>

  <div class="tab-bar text-center mb-4">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      :class="['tab-button', { active: activeTab === tab.key }]"
      @click="activeTab = tab.key"
      type="button"
    >
      {{ $t(tab.labelKey) }}
    </button>
  </div>

  <div class="container group">
    <div v-for="section in displayedSections" :key="section.titleKey" class="mb-5">
      <div class="services_title text-center mb-5">
        <!-- <h2>{{ $t(section.titleKey) }}</h2> -->
      </div>

      <div class="row d-flex justify-content-between">
        <div
          v-for="item in section.items"
          :key="item.titleKey"
          class="grid-1-5 col-lg-3 col-md-4 col-sm-6"
        >
          <h2>{{ $t(item.titleKey) }}</h2>
          <h3><span class="uppercase">{{ item.price }}</span></h3>
          <a href="#" class="button" @click.prevent="addOrder(item)">
            {{ $t('order') }}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div v-if="orders.length" class="order-box">
    <div class="order-box-header">
      <div>
        <strong>{{ $t('orders') }}</strong>
        <span class="order-count" style="color: white;">({{ orders.length }})</span>
      </div>
      <button class="order-clear" @click="clearOrders" aria-label="Clear orders">
        ✕
      </button>
    </div>

    <ul class="order-list">
      <li v-for="order in orders" :key="order.id">
        <button
          class="order-remove"
          @click="removeOrder(order.id)"
          type="button"
          aria-label="Remove"
        >
          −
        </button>
        <span class="order-name">{{ $t(order.titleKey) }}</span>
        <span class="order-price">{{ order.price }}</span>
      </li>
    </ul>

    <div class="order-total">
      {{ $t('total') }}:
      <span class="order-total-value">{{ formattedTotal }}</span>
    </div>

    <button class="order-contact" @click="goToContact" type="button">
      {{ $t('contact') }}
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tabs = [
  { key: 'sites', labelKey: 'tab_websites' },
  { key: 'ads', labelKey: 'tab_ads_materials' },
]

const activeTab = ref('sites')

const sections = [
  {
    group: 'sites',
    titleKey: 'service_prices',
    items: [
      { titleKey: 'wordpress_landing', price: "3 000 000 so'm" },
      { titleKey: 'wordpress_site', price: "6 000 000 so'm" },
      { titleKey: 'corporate_site', price: "7 500 000 so'm" },
      { titleKey: 'simple_site', price: "8 000 000 so'm" },
      { titleKey: 'complex_site', price: "10 000 000 so'm" },
      { titleKey: 'very_complex_site', price: "12 000 000 so'm" },
    ],
  },
  {
    group: 'ads',
    titleKey: 'ads_support',
    items: [
      { titleKey: 'yandex_google_ads', price: "4 000 000 so'm" },
      { titleKey: 'social_ads', price: "4 000 000 so'm" },
      { titleKey: 'all_platform_ads', price: "5 000 000 so'm" },
      { titleKey: 'seo_ads', price: "6 000 000 so'm" },
      { titleKey: 'marketing_audit', price: "10 000 000 so'm" },
      { titleKey: 'marketing_plan', price: "15 000 000 so'm" },
      { titleKey: 'email_marketing', price: "8 000 000 so'm" },
      { titleKey: 'push_ads', price: "6 500 000 so'm" },
      { titleKey: 'guerrilla_marketing', price: "30 000 000 so'm" },
    ],
  },
  {
    group: 'ads',
    titleKey: 'design_ads_materials',
    items: [
      { titleKey: 'creative_set', price: "3 000 000 so'm" },
      { titleKey: 'logo_design', price: "1 500 000 so'm" },
    ],
  },
]

const displayedSections = computed(() => {
  return sections.filter((section) => section.group === activeTab.value)
})

const orders = ref([])
let nextOrderId = 1

function parsePrice(price) {
  const digits = String(price).replace(/[^\d]/g, '')
  return digits ? Number(digits) : 0
}

function addOrder(item) {
  // Prevent adding the same item twice
  if (orders.value.some((order) => order.titleKey === item.titleKey)) {
    return
  }

  orders.value.unshift({
    id: nextOrderId++,
    titleKey: item.titleKey,
    price: item.price,
    amount: parsePrice(item.price),
  })
}

function clearOrders() {
  orders.value = []
}

function removeOrder(id) {
  orders.value = orders.value.filter((order) => order.id !== id)
}

const total = computed(() => {
  return orders.value.reduce((sum, order) => sum + order.amount, 0)
})

const formattedTotal = computed(() => {
  return new Intl.NumberFormat('ru-RU').format(total.value) + " so'm"
})

function goToContact() {
  router.push({ path: '/', hash: '#formsection' })
}
</script>

<style scoped>

.order-box {
  position: fixed;
  bottom: 20px;
  left: 20px;
  max-width: 360px;
  max-height: 50vh;
  width: 100%;
  background: rgba(34, 34, 73, 0.95);
  border: 1px solid rgba(255, 29, 29, 0.9);
  border-radius: 14px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  padding: 0.85rem 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 999;
}

.order-box-header {
  border-bottom: 1px solid rgba(255, 29, 29, 0.35);
}

.order-box-header strong {
  color: #fff;
}

.order-clear {
  color: rgba(255, 29, 29, 0.9);
}

.order-total {
  color: #fff;
}

.order-box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.order-box-header strong {
  font-size: 1rem;
}

.order-clear {
  border: none;
  background: transparent;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
}

.order-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem 0;
  overflow-y: auto;
  flex: 1;
}

.order-list li {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  padding: 0.35rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  color: #fff;
}

.order-remove {
  border: none;
  background: rgba(255, 29, 29, 0.12);
  color: #ff1d1d;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.order-remove:hover {
  background: rgba(255, 29, 29, 0.25);
}

.order-name {
  font-weight: 500;
  flex: 1;
}

.order-price {
  white-space: nowrap;
}

.order-total {
  font-weight: 600;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.order-contact {
  margin-top: 0.75rem;
  width: 100%;
  border: 1px solid rgba(255, 29, 29, 0.8);
  background: rgba(255, 29, 29, 0.12);
  color: #222249;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  color: red;
}

.order-contact:hover {
  background: rgba(255, 29, 29, 0.25);
}

.tab-bar {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}


.tab-button {
  border: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1.1rem;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.15s ease, border 0.15s ease;
}

.tab-button:hover {
  background: rgba(255, 29, 29, 0.08);
  color: white;
}

.tab-button.active {
  background: rgba(255, 29, 29, 0.18);
  border-color: rgba(255, 29, 29, 0.9);
  color: red;
}

</style>
