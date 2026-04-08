<template>
  <GenericServicePage
    iconClass="fa-solid fa-bullhorn"
    cardIcon="fa-solid fa-magnifying-glass-dollar"
    titleKey="yandex_google_ads_title"
    introKey="yandex_google_ads_intro"
    serviceTitleKey="yandex_google_ads"
    descKey="yandex_google_ads_desc"
    :features="['Yandex.Direct', 'Google Ads', 'Таргетинг']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "YandexGoogleAds",
  components: {
    GenericServicePage
  }
}
</script>