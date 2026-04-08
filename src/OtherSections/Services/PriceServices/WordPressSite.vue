<template>
  <GenericServicePage
    iconClass="fa-solid fa-wordpress"
    cardIcon="fa-solid fa-globe"
    titleKey="wordpress_site_title"
    introKey="wordpress_site_intro"
    serviceTitleKey="wordpress_site"
    descKey="wordpress_site_desc"
    :features="['WordPress', 'Адаптивный', 'Масштабируемый']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "WordPressSite",
  components: {
    GenericServicePage
  }
}
</script>