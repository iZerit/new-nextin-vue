import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './style.css'

// Import translations
import uz from './locales/uz.json'
import ru from './locales/ru.json'

// Create i18n instance
const i18n = createI18n({
  locale: 'uz', // default locale
  fallbackLocale: 'ru',
  messages: {
    uz,
    ru
  }
})

// Create and mount the app
createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')

// Initialize AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
})