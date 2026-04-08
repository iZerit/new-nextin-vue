<template>
  <GenericServicePage
    iconClass="fa-solid fa-bell"
    cardIcon="fa-solid fa-message"
    titleKey="push_ads_title"
    introKey="push_ads_intro"
    serviceTitleKey="push_ads"
    descKey="push_ads_desc"
    :features="['Push', 'Уведомления', 'Вовлечение']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "PushAds",
  components: {
    GenericServicePage
  }
}
</script>