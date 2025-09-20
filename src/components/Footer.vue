<template>

  <!-- footer  -->
  <footer class="footere">
    <div class="container">
      <div class="footer_inner  row align-items-center justify-content-between">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer_logo mt-5">
            <router-link to="/">
              <img src="/src/assets/MainLogo.png" alt="">
            </router-link>
          </div>
          <div class="footer_link_txt"><h3>{{ $t('footer_social') }}</h3></div>
          <div class="footer_link_txt"><h3>{{ $t('footer_social') }}</h3></div>
          <div class="footer_links">
            <a href="https://www.facebook.com/nextinws" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/nextin.uz/"  target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://t.me/nextin_uz"  target="_blank"><i class="fa-brands fa-telegram"></i></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer_link_txt mt-5">
            <h3>{{ $t('footer_services') }}</h3>
            <h3>{{ $t('footer_services') }}</h3>
          </div>
          <ul class="footer_service_list">
            <li><router-link to="/xizmatlar/web-design"><a style="padding-left: 0" >{{ $t('web_design') }}</a></router-link></li>
            <li> <router-link to="/xizmatlar/web-dasturlash"><a style="padding-left: 0" >{{ $t('web_sites') }}</a></router-link></li>
            <li><a href="#">{{ $t('google_ads') }}</a></li>
            <li><a href="#">{{ $t('email_marketing') }}</a></li>
            <li> <router-link to="/xizmatlar/seo-optimizatsiya"><a style="padding-left: 0" >{{ $t('seo_optimization') }}</a></router-link></li>
            <li><a href="#">{{ $t('online_store') }}</a></li>
            <li><a href="#">{{ $t('internet_marketing') }}</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="footer_link_txt mt-5">
            <h3>{{ $t('footer_contact') }}</h3>
            <h3>{{ $t('footer_contact') }}</h3>
          </div>
          <ul class="footer_service_list">
            <li class="footer_location_li">
              <span><i class="fa-solid fa-phone"></i></span>
              <a href="tel:+998999764127">+998 99 976 41 27</a>
            </li>
            <li class="footer_location_li">
              <span><i class="fa-solid fa-envelope"></i></span>
              <a href="mailto:info@nextin.uz">info@nextin.uz</a>
            </li>
          </ul>
          <div class="footer_link_txt mt-5">
            <h3>{{ $t('footer_address') }}</h3>
            <h3>{{ $t('footer_address') }}</h3>
          </div>
          <p>{{ $t('footer_address_text') }}</p>
          <button type="button" class="btn service_sec_but" id="footer_btn_map">{{ $t('view_map') }}</button>
        </div>
      </div>

      <div class="container copyright">
        <hr>
  <p>{{ $t('footer_copyright') }}</p>
  <p>{{ $t('footer_copyright') }}</p>
      </div>
    </div>

  </footer>
  <!-- footer  -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>