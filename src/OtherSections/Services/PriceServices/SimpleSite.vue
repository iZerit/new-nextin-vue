<template>
  <GenericServicePage
    iconClass="fa-solid fa-file"
    cardIcon="fa-solid fa-file-circle-check"
    titleKey="simple_site_title"
    introKey="simple_site_intro"
    serviceTitleKey="simple_site"
    descKey="simple_site_desc"
    :features="['Простой', 'Быстрый', 'Недорогой']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "SimpleSite",
  components: {
    GenericServicePage
  }
}
</script>