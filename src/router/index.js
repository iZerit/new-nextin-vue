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
      path: "/xizmatlar",
      name: "xizmatlar",
      component : ()=> import('../OtherSections/Services/ServicesMain.vue')
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
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
    return { top: 0 }
  },
});

export default router;
