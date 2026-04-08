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
          <div class="price-card">
            <div class="price-card-image">
              <img :src="item.image || defaultImage" :alt="$t(item.titleKey)" />
            </div>
            <div class="price-card-body">
              <h2>{{ $t(item.titleKey) }}</h2>
              <h3><span class="uppercase">{{ item.price }}</span></h3>
              <div class="price-card-actions">
                <router-link
                  :to="item.route || getDefaultRoute(item.titleKey)"
                  class="button more-info-btn"
                >
                  {{ $t('more_info') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import defaultImage from '../assets/output-onlinepngtools-removebg-preview.png'

const router = useRouter()

const tabs = [
  { key: 'sites', labelKey: 'tab_websites' },
  { key: 'ads', labelKey: 'tab_ads_materials' },
]

const activeTab = ref('sites')

// Route mapping for products - maps titleKey to route path
const routeMapping = {
  // Sites
  'wordpress_landing': '/xizmatlar/wordpress-landing',
  'wordpress_site': '/xizmatlar/wordpress-sayt',
  'corporate_site': '/xizmatlar/korporativ-sayt',
  'simple_site': '/xizmatlar/oddij-sayt',
  'complex_site': '/xizmatlar/murakkab-sayt',
  'very_complex_site': '/xizmatlar/juda-murakkab-sayt',
  // Ads
  'yandex_google_ads': '/xizmatlar/yandex-google-reklama',
  'social_ads': '/xizmatlar/ijtimoiy-tarmoqlar-reklamasi',
  'all_platform_ads': '/xizmatlar/barcha-platformalar-reklamasi',
  'seo_ads': '/xizmatlar/seo-optimizatsiya',
  'marketing_audit': '/xizmatlar/marketing-audit',
  'marketing_plan': '/xizmatlar/marketing-reja',
  'email_marketing': '/xizmatlar/email-marketing',
  'push_ads': '/xizmatlar/push-xabarnoma',
  'guerrilla_marketing': '/xizmatlar/gerrila-marketing',
  // Design
  'creative_set': '/xizmatlar/kreativ-to-plam',
  'logo_design': '/xizmatlar/logo-dizayn',
}

// Get default route for a product based on titleKey
function getDefaultRoute(titleKey) {
  return routeMapping[titleKey] || '/xizmatlar'
}

const sections = [
  {
    group: 'sites',
    titleKey: 'service_prices',
    items: [
      { titleKey: 'wordpress_landing', price: "3 000 000 so'm", descKey: 'wordpress_landing_desc', image: defaultImage },
      { titleKey: 'wordpress_site', price: "6 000 000 so'm", descKey: 'wordpress_site_desc', image: defaultImage },
      { titleKey: 'corporate_site', price: "7 500 000 so'm", descKey: 'corporate_site_desc', image: defaultImage },
      { titleKey: 'simple_site', price: "8 000 000 so'm", descKey: 'simple_site_desc', image: defaultImage },
      { titleKey: 'complex_site', price: "10 000 000 so'm", descKey: 'complex_site_desc', image: defaultImage },
      { titleKey: 'very_complex_site', price: "12 000 000 so'm", descKey: 'very_complex_site_desc', image: defaultImage },
    ],
  },
  {
    group: 'ads',
    titleKey: 'ads_support',
    items: [
      { titleKey: 'yandex_google_ads', price: "4 000 000 so'm", descKey: 'yandex_google_ads_desc', image: defaultImage },
      { titleKey: 'social_ads', price: "4 000 000 so'm", descKey: 'social_ads_desc', image: defaultImage },
      { titleKey: 'all_platform_ads', price: "5 000 000 so'm", descKey: 'all_platform_ads_desc', image: defaultImage },
      { titleKey: 'seo_ads', price: "6 000 000 so'm", descKey: 'seo_ads_desc', image: defaultImage },
      { titleKey: 'marketing_audit', price: "10 000 000 so'm", descKey: 'marketing_audit_desc', image: defaultImage },
      { titleKey: 'marketing_plan', price: "15 000 000 so'm", descKey: 'marketing_plan_desc', image: defaultImage },
      { titleKey: 'email_marketing', price: "8 000 000 so'm", descKey: 'email_marketing_desc', image: defaultImage },
      { titleKey: 'push_ads', price: "6 500 000 so'm", descKey: 'push_ads_desc', image: defaultImage },
      { titleKey: 'guerrilla_marketing', price: "30 000 000 so'm", descKey: 'guerrilla_marketing_desc', image: defaultImage },
    ],
  },
  {
    group: 'ads',
    titleKey: 'design_ads_materials',
    items: [
      { titleKey: 'creative_set', price: "3 000 000 so'm", descKey: 'creative_set_desc', image: defaultImage },
      { titleKey: 'logo_design', price: "1 500 000 so'm", descKey: 'logo_design_desc', image: defaultImage },
    ],
  },
]

const displayedSections = computed(() => {
  return sections.filter((section) => section.group === activeTab.value)
})
</script>

<style scoped>
/* Price Card Styles - Normal card without flip */
.price-card {
  border: 1px solid rgba(255, 29, 29, 0.9);
  border-radius: 1rem;
  background: rgba(34, 34, 73, 0.95);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.price-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
}

.price-card-image {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 29, 29, 0.3);
}

.price-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.price-card:hover .price-card-image img {
  transform: scale(1.05);
}

.price-card-body {
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
}

.price-card-body h2 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.price-card-body h3 {
  color: #ff1d1d;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.price-card-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1rem;
  width: 100%;
}

.price-card-actions .button {
  padding: 0.5rem 0.9rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

/* More Info Button */
.more-info-btn {
  background-color: rgba(255, 29, 29, 0.95);
  border-color: rgba(255, 29, 29, 0.95);
  color: white !important;
}

.more-info-btn:hover {
  background-color: rgba(255, 29, 29, 1);
  border-color: rgba(255, 29, 29, 1);
  color: #222249 !important;
}

</style>
