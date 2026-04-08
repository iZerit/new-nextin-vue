<template>
  <GenericServicePage
    iconClass="fa-solid fa-palette"
    cardIcon="fa-solid fa-images"
    titleKey="creative_set_title"
    introKey="creative_set_intro"
    serviceTitleKey="creative_set"
    descKey="creative_set_desc"
    :features="['Баннеры', 'Посты', 'Макеты']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "CreativeSet",
  components: {
    GenericServicePage
  }
}
</script>