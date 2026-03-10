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
          <div
            class="price-card"
            @click="toggleFlip(item.titleKey)"
            @mouseleave="unflipIfFlipped(item.titleKey)"
            role="button"
            tabindex="0"
            @keydown.enter.prevent="toggleFlip(item.titleKey)"
            @keydown.space.prevent="toggleFlip(item.titleKey)"
          >
            <div class="card-inner" :class="{ flipped: isFlipped(item.titleKey) }">
              <div class="card-face card-front">
                <img class="card-logo" :src="logoInfo" alt="Info" />
                <h2>{{ $t(item.titleKey) }}</h2>
                <h3><span class="uppercase">{{ item.price }}</span></h3>
                <div class="price-card-actions">
                  <a
                    href="#"
                    class="button"
                    @click.stop.prevent="addOrder(item)"
                  >
                    {{ $t('order') }}
                  </a>
                </div>
              </div>
              <div class="card-face card-back">
                <div class="card-back-content">
                  <p>{{ $t(item.descKey) }}</p>
                  <button
                    type="button"
                    class="button button--small"
                    @click.stop.prevent="openInfo(item)"
                  >
                    {{ $t('more_info') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="activeInfo"
    class="info-overlay"
    @click.self="closeInfo"
    tabindex="0"
  >
    <div class="info-card">
      <div
        class="card-inner"
        :class="{ flipped: isInfoFlipped }"
        @click.stop="isInfoFlipped = !isInfoFlipped"
      >
        <div class="card-face card-front">
          <div class="info-face-body">
            <img class="card-logo" :src="logoInfo" alt="Info" />
            <h2>{{ $t(activeInfo.titleKey) }}</h2>
            <h3><span class="uppercase">{{ activeInfo.price }}</span></h3>
            <p class="info-hint">{{ $t('click_to_flip') }}</p>
          </div>
          <button type="button" class="info-close-btn" @click.stop.prevent="closeInfo">
            {{ $t('close') }}
          </button>
        </div>
        <div class="card-face card-back">
          <div class="info-face-body">
            <div class="card-back-content">
              <p>{{ $t(activeInfo.descKey) }}</p>
            </div>
          </div>
          <button type="button" class="info-close-btn" @click.stop.prevent="closeInfo">
            {{ $t('close') }}
          </button>
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
      {{ $t('order_') }}
    </button>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import logoInfo from '../assets/output-onlinepngtools-removebg-preview.png'

const router = useRouter()

const activeInfo = ref(null)
const isInfoFlipped = ref(false)

const handleKeydown = (event) => {
  if (event.key === 'Escape' && activeInfo.value) {
    closeInfo()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})

function openInfo(item) {
  activeInfo.value = item
  // Open directly showing the detailed info side (back side)
  isInfoFlipped.value = true
  document.body.classList.add('no-scroll')
}

function closeInfo() {
  activeInfo.value = null
  isInfoFlipped.value = false
  document.body.classList.remove('no-scroll')
}

const tabs = [
  { key: 'sites', labelKey: 'tab_websites' },
  { key: 'ads', labelKey: 'tab_ads_materials' },
]

const activeTab = ref('sites')

const flipped = ref(new Set())

watch(activeTab, () => {
  // Reset flipped cards when switching tabs
  flipped.value = new Set()
})

function isFlipped(key) {
  return flipped.value.has(key)
}

function toggleFlip(key) {
  const next = new Set(flipped.value)
  if (next.has(key)) {
    next.delete(key)
  } else {
    next.add(key)
  }
  flipped.value = next
}

function unflipIfFlipped(key) {
  if (isFlipped(key)) {
    toggleFlip(key)
  }
}

const sections = [
  {
    group: 'sites',
    titleKey: 'service_prices',
    items: [
      { titleKey: 'wordpress_landing', price: "3 000 000 so'm", descKey: 'wordpress_landing_desc' },
      { titleKey: 'wordpress_site', price: "6 000 000 so'm", descKey: 'wordpress_site_desc' },
      { titleKey: 'corporate_site', price: "7 500 000 so'm", descKey: 'corporate_site_desc' },
      { titleKey: 'simple_site', price: "8 000 000 so'm", descKey: 'simple_site_desc' },
      { titleKey: 'complex_site', price: "10 000 000 so'm", descKey: 'complex_site_desc' },
      { titleKey: 'very_complex_site', price: "12 000 000 so'm", descKey: 'very_complex_site_desc' },
    ],
  },
  {
    group: 'ads',
    titleKey: 'ads_support',
    items: [
      { titleKey: 'yandex_google_ads', price: "4 000 000 so'm", descKey: 'yandex_google_ads_desc' },
      { titleKey: 'social_ads', price: "4 000 000 so'm", descKey: 'social_ads_desc' },
      { titleKey: 'all_platform_ads', price: "5 000 000 so'm", descKey: 'all_platform_ads_desc' },
      { titleKey: 'seo_ads', price: "6 000 000 so'm", descKey: 'seo_ads_desc' },
      { titleKey: 'marketing_audit', price: "10 000 000 so'm", descKey: 'marketing_audit_desc' },
      { titleKey: 'marketing_plan', price: "15 000 000 so'm", descKey: 'marketing_plan_desc' },
      { titleKey: 'email_marketing', price: "8 000 000 so'm", descKey: 'email_marketing_desc' },
      { titleKey: 'push_ads', price: "6 500 000 so'm", descKey: 'push_ads_desc' },
      { titleKey: 'guerrilla_marketing', price: "30 000 000 so'm", descKey: 'guerrilla_marketing_desc' },
    ],
  },
  {
    group: 'ads',
    titleKey: 'design_ads_materials',
    items: [
      { titleKey: 'creative_set', price: "3 000 000 so'm", descKey: 'creative_set_desc' },
      { titleKey: 'logo_design', price: "1 500 000 so'm", descKey: 'logo_design_desc' },
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

function saveSelectedServices() {
  const keys = orders.value.map((order) => order.titleKey)
  localStorage.setItem('selectedServices', JSON.stringify(keys))
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

  saveSelectedServices()
}

function clearOrders() {
  orders.value = []
  saveSelectedServices()
}

function removeOrder(id) {
  orders.value = orders.value.filter((order) => order.id !== id)
  saveSelectedServices()
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
