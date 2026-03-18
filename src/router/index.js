import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        title: "Nextin | Veb-studiya"
      }
    },
    {
      path: "/xizmatlar/web-design",
      name: "xizmatlar-web-design",
      component : ()=> import('../OtherSections/Services/ServicesDesign.vue'),
      meta: {
        title: "Nextin | Veb-dizayn"
      }
    },
    {
      path: "/xizmatlar/web-dasturlash",
      name: "xizmatlar-web-dasturlash",
      component : ()=> import('../OtherSections/Services/ServicesDasturlash.vue'),
      meta: {
        title: "Nextin | Veb-dasturlash"
      }
    },
    {
      path: "/xizmatlar/seo-optimizatsiya",
      name: "xizmatlar-seo-optimizatsiya",
      component : ()=> import('../OtherSections/Services/ServicesSeoOpt.vue'),
      meta: {
        title: "Nextin | SEO optimizatsiya"
      }
    },
    {
      path: "/xizmatlar/google-ads",
      name: "xizmatlar-google-ads",
      component : ()=> import('../OtherSections/Services/ServicesGoogleAds.vue'),
      meta: {
        title: "Nextin | Google reklamalari"
      }
    },
    {
      path: "/xizmatlar/email-marketing",
      name: "xizmatlar-email-marketing",
      component : ()=> import('../OtherSections/Services/ServicesEmailMarketing.vue'),
      meta: {
        title: "Nextin | Email marketing"
      }
    },
    {
      path: "/xizmatlar/internet-do-kon",
      name: "xizmatlar-internet-do-kon",
      component : ()=> import('../OtherSections/Services/ServicesOnlineStore.vue'),
      meta: {
        title: "Nextin | Internet do'kon"
      }
    },
    {
      path: "/xizmatlar/internet-marketing",
      name: "xizmatlar-internet-marketing",
      component : ()=> import('../OtherSections/Services/ServicesInternetMarketing.vue'),
      meta: {
        title: "Nextin | Internet marketing"
      }
    },
    {
      path: "/jamoa",
      name: "jamoa",
      component : ()=> import('../OtherSections/Team.vue'),
      meta: {
        title: "Nextin | Jamoa"
      }
    },
    {
      path: "/narxlar_xizmatlar",
      name: "narx",
      component : ()=> import('../OtherSections/Price.vue'),
      meta: {
        title: "Nextin | Narxlar"
      }
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

// Global navigation guard to update page title
router.beforeEach((to, from, next) => {
  // Set document title from route meta
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    // Fallback title if no meta title is set
    document.title = "Nextin | Veb-studiya";
  }
  next();
});

export default router;