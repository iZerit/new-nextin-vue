<template>
  <div class="service-nav-container">
    <div class="service-nav-wrapper">
      <router-link 
        v-if="prevRoute" 
        :to="prevRoute.path" 
        class="nav-btn prev-btn"
      >
        <i class="fa-solid fa-arrow-left"></i> {{ prevRoute.name }}
      </router-link>
      <div v-else></div>
      <router-link 
        v-if="nextRoute" 
        :to="nextRoute.path" 
        class="nav-btn next-btn"
      >
        {{ nextRoute.name }} <i class="fa-solid fa-arrow-right"></i>
      </router-link>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceNavigation",
  computed: {
    serviceRoutes() {
      return [
        { path: "/xizmatlar/web-design", name: "Web Design" },
        { path: "/xizmatlar/web-dasturlash", name: "Web Dasturlash" },
        { path: "/xizmatlar/google-ads", name: "Google Ads" },
        { path: "/xizmatlar/email-marketing", name: "Email Marketing" },
        { path: "/xizmatlar/seo-optimizatsiya", name: "SEO Optimizatsiya" },
        { path: "/xizmatlar/internet-do-kon", name: "Internet Do'kon" },
        { path: "/xizmatlar/internet-marketing", name: "Internet Marketing" }
      ];
    },
    currentPath() {
      return this.$route.path;
    },
    currentIndex() {
      return this.serviceRoutes.findIndex(route => route.path === this.currentPath);
    },
    prevRoute() {
      if (this.currentIndex > 0) {
        return this.serviceRoutes[this.currentIndex - 1];
      }
      return null;
    },
    nextRoute() {
      if (this.currentIndex < this.serviceRoutes.length - 1) {
        return this.serviceRoutes[this.currentIndex + 1];
      }
      return null;
    }
  }
}
</script>

<style scoped>

</style>
