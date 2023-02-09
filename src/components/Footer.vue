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
          <div class="footer_link_txt"><h3>Ijtimoiy tarmoqlar</h3></div>
          <div class="footer_links">
            <a href="https://www.facebook.com/nextinws" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/nextin.uz/"  target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://t.me/nextin_uz"  target="_blank"><i class="fa-brands fa-telegram"></i></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer_link_txt mt-5">
            <h3>Bizning xizmatlar</h3>
          </div>
          <ul class="footer_service_list">
            <li><router-link to="/xizmatlar/web-design"><a style="padding-left: 0" >Web Design</a></router-link></li>
            <li> <router-link to="/xizmatlar/web-dasturlash"><a style="padding-left: 0" >Web Saytlar</a></router-link></li>
            <li><a href="#">Google Reklamalar</a></li>
            <li><a href="#">E-mail Marketing</a></li>
            <li> <router-link to="/xizmatlar/seo-optimizatsiya"><a style="padding-left: 0" >SEO optimizatsiya</a></router-link></li>
            <li><a href="#">Internet do'kon</a></li>
            <li><a href="#">Internet marketing</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="footer_link_txt mt-5">
            <h3>Bog'lanish</h3>
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
            <h3>Manzil</h3>
          </div>
          <p>Sirdaryo Viloyati, Guliston Shahri,
            Guliston Ko'chasi 11A</p>
          <button type="button" class="btn service_sec_but" id="footer_btn_map">Xaritada ko'rish</button>
        </div>
      </div>

      <div class="container copyright">
        <hr>
        <p>Copyright © 2023 Nextin Web Studio</p>
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