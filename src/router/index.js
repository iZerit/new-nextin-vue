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
    // Price Services Pages
    {
      path: "/xizmatlar/wordpress-landing",
      name: "wordpress-landing",
      component: () => import('../OtherSections/Services/PriceServices/WordPressLanding.vue'),
      meta: { title: "Nextin | WordPress Landing Page" }
    },
    {
      path: "/xizmatlar/wordpress-sayt",
      name: "wordpress-sayt",
      component: () => import('../OtherSections/Services/PriceServices/WordPressSite.vue'),
      meta: { title: "Nextin | WordPress Sayt" }
    },
    {
      path: "/xizmatlar/korporativ-sayt",
      name: "korporativ-sayt",
      component: () => import('../OtherSections/Services/PriceServices/CorporateSite.vue'),
      meta: { title: "Nextin | Korporativ Sayt" }
    },
    {
      path: "/xizmatlar/oddij-sayt",
      name: "oddij-sayt",
      component: () => import('../OtherSections/Services/PriceServices/SimpleSite.vue'),
      meta: { title: "Nextin | Oddiy Sayt" }
    },
    {
      path: "/xizmatlar/murakkab-sayt",
      name: "murakkab-sayt",
      component: () => import('../OtherSections/Services/PriceServices/ComplexSite.vue'),
      meta: { title: "Nextin | Murakkab Sayt" }
    },
    {
      path: "/xizmatlar/juda-murakkab-sayt",
      name: "juda-murakkab-sayt",
      component: () => import('../OtherSections/Services/PriceServices/VeryComplexSite.vue'),
      meta: { title: "Nextin | Juda Murakkab Sayt" }
    },
    {
      path: "/xizmatlar/yandex-google-reklama",
      name: "yandex-google-reklama",
      component: () => import('../OtherSections/Services/PriceServices/YandexGoogleAds.vue'),
      meta: { title: "Nextin | Yandex Google Reklama" }
    },
    {
      path: "/xizmatlar/ijtimoiy-tarmoqlar-reklamasi",
      name: "ijtimoiy-tarmoqlar-reklamasi",
      component: () => import('../OtherSections/Services/PriceServices/SocialAds.vue'),
      meta: { title: "Nextin | Ijtimoiy Tarmoqlar Reklamasi" }
    },
    {
      path: "/xizmatlar/barcha-platformalar-reklamasi",
      name: "barcha-platformalar-reklamasi",
      component: () => import('../OtherSections/Services/PriceServices/AllPlatformAds.vue'),
      meta: { title: "Nextin | Barcha Platformalar Reklamasi" }
    },
    {
      path: "/xizmatlar/marketing-audit",
      name: "marketing-audit",
      component: () => import('../OtherSections/Services/PriceServices/MarketingAudit.vue'),
      meta: { title: "Nextin | Marketing Audit" }
    },
    {
      path: "/xizmatlar/marketing-reja",
      name: "marketing-reja",
      component: () => import('../OtherSections/Services/PriceServices/MarketingPlan.vue'),
      meta: { title: "Nextin | Marketing Reja" }
    },
    {
      path: "/xizmatlar/push-xabarnoma",
      name: "push-xabarnoma",
      component: () => import('../OtherSections/Services/PriceServices/PushAds.vue'),
      meta: { title: "Nextin | Push Xabarnoma" }
    },
    {
      path: "/xizmatlar/gerrila-marketing",
      name: "gerrila-marketing",
      component: () => import('../OtherSections/Services/PriceServices/GuerrillaMarketing.vue'),
      meta: { title: "Nextin | Guerrilla Marketing" }
    },
    {
      path: "/xizmatlar/kreativ-to-plam",
      name: "kreativ-to-plam",
      component: () => import('../OtherSections/Services/PriceServices/CreativeSet.vue'),
      meta: { title: "Nextin | Kreativ To'plam" }
    },
    {
      path: "/xizmatlar/logo-dizayn",
      name: "logo-dizayn",
      component: () => import('../OtherSections/Services/PriceServices/LogoDesign.vue'),
      meta: { title: "Nextin | Logo Dizayn" }
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