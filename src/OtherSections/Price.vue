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


</style>
