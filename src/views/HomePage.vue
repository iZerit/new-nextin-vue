<template>
<HeroSection/>
  <ServicesSection/>
  <FormSection/>
</template>

<script>



import HeroSection from "../components/HeroSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import FormSection from "../components/FormSection.vue";

export default {
  name: "HomePage",
  components: {FormSection, ServicesSection, HeroSection}
}
</script>

<style scoped>

</style>