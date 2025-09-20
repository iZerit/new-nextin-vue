import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n';
import uz from './locales/uz.json';
import ru from './locales/ru.json';

const i18n = createI18n({
  locale: 'uz',
  fallbackLocale: 'uz',
  messages: {
    uz,
    ru
  }
});


const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');


