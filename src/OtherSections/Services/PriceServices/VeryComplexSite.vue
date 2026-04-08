<template>
  <GenericServicePage
    iconClass="fa-solid fa-server"
    cardIcon="fa-solid fa-database"
    titleKey="very_complex_site_title"
    introKey="very_complex_site_intro"
    serviceTitleKey="very_complex_site"
    descKey="very_complex_site_desc"
    :features="['Индивидуальный', 'Интеграции', 'Крупный']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "VeryComplexSite",
  components: {
    GenericServicePage
  }
}
</script>