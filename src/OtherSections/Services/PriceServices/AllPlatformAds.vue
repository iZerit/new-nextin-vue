<template>
  <GenericServicePage
    iconClass="fa-solid fa-globe"
    cardIcon="fa-solid fa-chart-line"
    titleKey="all_platform_ads_title"
    introKey="all_platform_ads_intro"
    serviceTitleKey="all_platform_ads"
    descKey="all_platform_ads_desc"
    :features="['Все платформы', 'Комплексный', 'Эффективный']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "AllPlatformAds",
  components: {
    GenericServicePage
  }
}
</script>