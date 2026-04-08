<template>
  <GenericServicePage
    iconClass="fa-solid fa-pen-nib"
    cardIcon="fa-solid fa-star-of-life"
    titleKey="logo_design_title"
    introKey="logo_design_intro"
    serviceTitleKey="logo_design"
    descKey="logo_design_desc"
    :features="['Логотип', 'Брендинг', 'Уникальность']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "LogoDesign",
  components: {
    GenericServicePage
  }
}
</script>