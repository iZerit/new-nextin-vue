<template>
<HeroSection/>
  <ServicesSection/>
  <PriceList/>
  <FormSection/>
</template>

<script>



import HeroSection from "../components/HeroSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import FormSection from "../components/FormSection.vue";
import PriceList from "../components/PriceList.vue";

export default {
  name: "HomePage",
  components: {PriceList, FormSection, ServicesSection, HeroSection}
}
</script>

<style scoped>

</style>