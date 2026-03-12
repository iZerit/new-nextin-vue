
<template>
  <!-- default header and for mobile -->
  <header class="site-header sticky-top home1" id="home1">
    <nav class="navbar navbar-light navbar-expand-lg">
      <div class="container">
        <router-link class="logo-img" to="/">
          <img class="img-fluid" src="../assets/MainLogo.png" alt="" />
        </router-link>
        <ul class="navbar-nav home2_for_mobile_menu" id="home1_navbar_menu">
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{$t('home')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jamoa">{{$t('team')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/narxlar_xizmatlar">{{$t('prices')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#formsection' }">{{$t('contact')}}</router-link>
          </li>
        </ul>
        <!-- Language Switcher Buttons -->
        <div class="lang-switcher-btns">
          <button
            v-for="lang in langs"
            :key="lang.value"
            :class="['lang-btn', { selected: $i18n.locale === lang.value }]"
            @click="setLocale(lang.value)"
          >
            {{ lang.label }}
          </button>
        </div>
        <button class="shadow-none navbar-toggler custom-toggler navbar-toggler-but" type="button"
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
  <!-- header for scrool down  -->
  <header class="site-header sticky-top home2" id="home2">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link class="logo-img" to="/">
          <img class="img-fluid" src="../assets/MainLogo.png" alt="" />
        </router-link>
        <ul class="navbar-nav home2_for_mobile_menu" id="home2_for_mobile_menu">
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{$t('home')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jamoa">{{$t('team')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/narxlar_xizmatlar">{{$t('prices')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#formsection' }">{{$t('contact')}}</router-link>
          </li>
        </ul>
        <button class="shadow-none navbar-toggler custom-toggler home2_for_mobile navbar-toggler-but" type="button"
          data-bs-toggle="offcanvas" id="home2_for_mobile" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Language Switcher Buttons -->
        <div class="lang-switcher-btns">
          <button
            v-for="lang in langs"
            :key="lang.value"
            :class="['lang-btn', { selected: $i18n.locale === lang.value }]"
            @click="setLocale(lang.value)"
          >
            {{ lang.label }}
          </button>
        </div>
      </div>
    </nav>
  </header>
  <!-- offcanvas for header burger menu -->
  <div class="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <a href="/" class="offcanvas-title"><img src="../assets/MainLogo.png" alt="" /></a>
      <button type="button" class="btn-close text-reset close-but flex-end"
        data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body uk-offcanvas-bar">
      <ul class="nav-pills navbar-nav justify-content-end uk-nav uk-nav-default">
        <li class="nav-item offcanvas-nav-item">
          <router-link to="/" @click="closeOffcanvas">
            <a class="sitenav-item-link">{{$t('home')}}</a>
          </router-link>
        </li>
        <li class="nav-item offcanvas-nav-item">
          <router-link class="sitenav-item-link" to="/jamoa" @click="closeOffcanvas">{{$t('team')}}</router-link>
        </li>
        <li class="nav-item offcanvas-nav-item">
          <router-link class="sitenav-item-link" to="/narxlar_xizmatlar" @click="closeOffcanvas">{{$t('prices')}}</router-link>
        </li>
      
        <li class="nav-item offcanvas-nav-item">
          <router-link class="sitenav-item-link" style="padding:0;" :to="{ path: '/', hash: '#formsection' }" @click="closeOffcanvas">{{$t('contact')}}</router-link>
        </li>
        <!-- Language Switcher Buttons in Burger Menu -->
        <li class="nav-item mt-3">
          <div class="lang-switcher-btns">
            <button
              v-for="lang in langs"
              :key="lang.value"
              :class="['lang-btn', { selected: $i18n.locale === lang.value }]"
              @click="setLocale(lang.value);"
            >
              {{ lang.label }}
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      langs: [
        { value: 'uz', label: "UZ" },
        { value: 'ru', label: "RU" }
      ]
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    closeOffcanvas() {
      // Close the offcanvas when a link is clicked
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      if (offcanvasElement) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
      }
    }
  }
}
</script>
