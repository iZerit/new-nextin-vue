<template>
  <GenericServicePage
    iconClass="fa-solid fa-file-signature"
    cardIcon="fa-solid fa-compass"
    titleKey="marketing_plan_title"
    introKey="marketing_plan_intro"
    serviceTitleKey="marketing_plan"
    descKey="marketing_plan_desc"
    :features="['Стратегия', 'Планирование', 'Реализация']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "MarketingPlan",
  components: {
    GenericServicePage
  }
}
</script>