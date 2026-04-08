<template>
  <GenericServicePage
    iconClass="fa-solid fa-clipboard-check"
    cardIcon="fa-solid fa-chart-pie"
    titleKey="marketing_audit_title"
    introKey="marketing_audit_intro"
    serviceTitleKey="marketing_audit"
    descKey="marketing_audit_desc"
    :features="['Анализ', 'Рекомендации', 'Стратегия']"
  />
</template>

<script>
import GenericServicePage from './GenericServicePage.vue';

export default {
  name: "MarketingAudit",
  components: {
    GenericServicePage
  }
}
</script>