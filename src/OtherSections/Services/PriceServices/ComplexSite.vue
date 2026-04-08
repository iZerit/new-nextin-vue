<template>
  <GenericServicePage
    iconClass="fa-solid fa-network-wired"
    cardIcon="fa-solid fa-layer-group"
    titleKey="complex_site_title"
    introKey="complex_site_intro"
    serviceTitleKey="complex_site"
    descKey="complex_site_desc"
    :features="['Многоязычный', 'Сложный', 'Модульный']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "ComplexSite",
  components: {
    GenericServicePage
  }
}
</script>