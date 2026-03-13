import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/xizmatlar/web-design",
      name: "xizmatlar-web-design",
      component : ()=> import('../OtherSections/Services/ServicesDesign.vue')
    },
    {
      path: "/xizmatlar/web-dasturlash",
      name: "xizmatlar-web-dasturlash",
      component : ()=> import('../OtherSections/Services/ServicesDasturlash.vue')
    },
    {
      path: "/xizmatlar/seo-optimizatsiya",
      name: "xizmatlar-seo-optimizatsiya",
      component : ()=> import('../OtherSections/Services/ServicesSeoOpt.vue')
    },
    {
      path: "/xizmatlar/google-ads",
      name: "xizmatlar-google-ads",
      component : ()=> import('../OtherSections/Services/ServicesGoogleAds.vue')
    },
    {
      path: "/xizmatlar/email-marketing",
      name: "xizmatlar-email-marketing",
      component : ()=> import('../OtherSections/Services/ServicesEmailMarketing.vue')
    },
    {
      path: "/xizmatlar/internet-do-kon",
      name: "xizmatlar-internet-do-kon",
      component : ()=> import('../OtherSections/Services/ServicesOnlineStore.vue')
    },
    {
      path: "/xizmatlar/internet-marketing",
      name: "xizmatlar-internet-marketing",
      component : ()=> import('../OtherSections/Services/ServicesInternetMarketing.vue')
    },
    {
      path: "/jamoa",
      name: "jamoa",
      component : ()=> import('../OtherSections/Team.vue')
    },
    {
      path: "/narxlar_xizmatlar",
      name: "narx",
      component : ()=> import('../OtherSections/Price.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
      }
    }

    return { top: 0 }
  },
});

export default router;
