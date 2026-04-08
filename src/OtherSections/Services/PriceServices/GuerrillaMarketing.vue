<template>
  <GenericServicePage
    iconClass="fa-solid fa-bolt"
    cardIcon="fa-solid fa-lightbulb"
    titleKey="guerrilla_marketing_title"
    introKey="guerrilla_marketing_intro"
    serviceTitleKey="guerrilla_marketing"
    descKey="guerrilla_marketing_desc"
    :features="['Креатив', 'Нестандартный', 'Вирусный']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "GuerrillaMarketing",
  components: {
    GenericServicePage
  }
}
</script>