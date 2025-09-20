import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD

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
=======
import AOS from 'aos'
import 'aos/dist/aos.css'




const app = createApp(App)

app.use(router)




   app.use(AOS.init())
app.AOS = new AOS.init({ disable: "phone"});

app.use(AOS).mount('#app')
// app.mount('#app')
>>>>>>> 05d46dad3799576753843766fe1a0908541b75ca


