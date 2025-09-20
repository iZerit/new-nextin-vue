<template>
<Background/>


  <div class="main">
    <Header/>
<!--    main qatori boshladi-->
 <router-view/>
    <!--    main qatori tugadi-->

<Footer/>
  </div>
  <!-- contianer tugadi -->

</template>

<style scoped>

</style>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Background from "./components/Background.vue";





</script>