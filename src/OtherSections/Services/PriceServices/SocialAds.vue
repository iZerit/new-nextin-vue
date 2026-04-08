<template>
  <GenericServicePage
    iconClass="fa-solid fa-share-nodes"
    cardIcon="fa-solid fa-thumbs-up"
    titleKey="social_ads_title"
    introKey="social_ads_intro"
    serviceTitleKey="social_ads"
    descKey="social_ads_desc"
    :features="['Instagram', 'Facebook', 'Telegram']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "SocialAds",
  components: {
    GenericServicePage
  }
}
</script>