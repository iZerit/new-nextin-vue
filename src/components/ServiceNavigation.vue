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
        { path: "/xizmatlar/seo-optimizatsiya", name: "SEO" },
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
.service-nav-container {
  margin-bottom: 20px;
}

.service-nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-btn {
  background: rgba(34, 34, 73, 0.9);
  color: white;
  padding: 12px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid #ff1d1d;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.nav-btn:hover {
  background: #ff1d1d;
  color: white;
}

@media (max-width: 768px) {
  .nav-btn {
    padding: 8px 12px;
    font-size: 12px;
  }
}
</style>
