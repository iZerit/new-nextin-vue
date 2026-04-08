<template>
  <GenericServicePage
    iconClass="fa-solid fa-building"
    cardIcon="fa-solid fa-briefcase"
    titleKey="corporate_site_title"
    introKey="corporate_site_intro"
    serviceTitleKey="corporate_site"
    descKey="corporate_site_desc"
    :features="['Корпоративный', 'Профессиональный', 'Современный']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "CorporateSite",
  components: {
    GenericServicePage
  }
}
</script>