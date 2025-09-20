<template>

  <section>
    <div class="container">
      <div class="services_div">
        <div class="services_inner_div">
          <div class="services_title text-center mb-5 mt-5">
            <h2>{{ $t('main_services_title') }}</h2>
          </div>


          <!-- service first row info  -->

          <div class="services_text text-center">
            <p>{{ $t('main_services_intro1') }}</p>
            <p>{{ $t('main_services_intro2') }}</p>
            <!-- <p>Bir oz eskirgan va SEO optimallashtirishning to'satdan bosib olinishi ostida yengib o'tgan
                bo'lsa-da, Flash taqdimotlari har doim ularning xilma-xilligi va animatsiyalariga katta
                e'tibor qaratgan. Ko'pchilikka ma'lum bo'lgan brend vakili ekanligingizni yoki ortiqcha
                optimallashtirishga muhtoj bo'lmagan oddiy portfolio saytini xohlayotganingizni hisobga olsak,
                Flash siz uchun to'g'ri. Bizning Flash animatsiyalarimiz sizning tasavvuringizni yoritadi va
                sizni befarq qoldirmaydi. Fleshli saytlardan tashqari, biz animatsiya va dinamik tarkibni
                o'z ichiga olgan flesh-bannerlar va boshqa reklama materiallarini yaratish bilan ham
                shug'ullanamiz.</p> -->
          </div>

          <!-- service first row info  -->





          <!-- service second row  -->

          <div class="service_first_row">
            <div class="row">

              <!-- webdesign  -->

              <div class="first_card col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <router-link to="/xizmatlar/web-design">
                    <div class="first_icon">
                      <i class="fa-solid fa-pen"></i>
                    </div>
                  </router-link>

                  <router-link to="./xizmatlar/web-design"><h3 class="mt-3">Web design</h3></router-link>
                </div>
                <div class="card_text mt-2">
                  <p>Nextin Web Studio veb-dizaynerlar jamoasi bilan faxrlanadi, ular o'zlarining ko'p
                    yillik tajribalarini yaratishda o'tkazadilar ...</p>
                  <router-link to="/xizmatlar/web-design">To'liq ma'lumot</router-link>
                </div>
              </div>

              <!-- web design  -->





              <!-- web programm  -->

              <div class="first_card col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <router-link to="/xizmatlar/web-dasturlash">
                    <div class="first_icon">
                      <i class="fa-solid fa-code"></i>
                    </div>
                  </router-link>

                  <router-link to="/xizmatlar/web-dasturlash"> <h3 class="mt-3">Web dasturlash</h3></router-link>
                </div>
                <div class="card_text mt-2">
                  <p>"Veb dasturlash" atamasi internet uchun veb-sayt yoki veb-ilovaning butun
                    rivojlanishini o'z ichiga oladi ...
                  </p>
                  <router-link to="/xizmatlar/web-dasturlash">To'liq ma'lumot</router-link>

                </div>
              </div>

              <!-- web programm  -->







              <!-- google ads  -->

              <div class="first_card card_invincible_mobile col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-brands fa-google"></i>
                  </div>
                  <h3 class="mt-3">Google reklamalar</h3>
                </div>
                <div class="card_text mt-2">
                  <p>Muvaffaqiyat dunyosidagi etakchi shior - "Vaqt - bu pul". Hech kim cheksiz
                    izlanishlarga berilmaydi ...
                  </p>
                  <a href="#">To'liq ma'lumot</a>

                </div>
              </div>

              <!-- google ads  -->




              <!-- e-mail marketing  -->

              <div class="first_card card_invincible_mobile col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <h3 class="mt-3">E-mail Marketing</h3>
                </div>
                <div class="card_text mt-2">
                  <p>Mahsulot sotishda asosiy narsa nima ekanligini bilasizmi?Reklama! Marketing - bu
                    shaxsiy guvohnoma ...
                  </p>
                  <a href="#">To'liq ma'lumot</a>

                </div>
              </div>

              <!-- e-mail marketing  -->



              <!-- seo optimisation  -->

              <div class="first_card card_invincible_mobile col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <router-link to="/xizmatlar/seo-optimizatsiya">
                    <div class="first_icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </router-link>
                  <router-link to="/xizmatlar/seo-optimizatsiya"><h3 class="mt-3">SEO optimizatsiya</h3></router-link>
                </div>
                <div class="card_text mt-2">
                  <p>Bizning Nextin Web Studio jamoasi veb-saytni optimallashtirish mazmuniga kelganda
                    uzoq muddatli tajribaga ega. ...
                  </p>
                  <router-link to="/xizmatlar/seo-optimizatsiya">To'liq ma'lumot</router-link>

                </div>
              </div>

              <!-- seo optimisation  -->




              <!-- internet do'kon  -->

              <div class="first_card col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <h3 class="mt-3">Internet do'kon</h3>
                </div>
                <div class="card_text mt-2">
                  <p>Internetning rivojlanishi bilan - internet elektron biznesining rivojlanishi ham
                    oshib bormoqda....
                  </p>
                  <router-link to="/">To'liq ma'lumot</router-link>

                </div>
              </div>

              <!-- internet do'kon  -->




              <!-- internet marketing  -->

              <div class="first_card col-lg-4 col-md-4 col-sm-6 mb-5">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-solid fa-arrow-trend-up"></i>
                  </div>
                  <h3 class="mt-3">Internet Marketing</h3>
                </div>
                <div class="card_text mt-2">
                  <p>Har bir kompaniya, hatto eng kichigi ham o'z veb-saytiga ega. Internetda
                    ko'rinmas
                    narsa - bu ...
                  </p>
                  <router-link to="/">To'liq ma'lumot</router-link>

                </div>
              </div>

              <!-- internet marketing  -->



            </div>
          </div>

          <!-- service second row ^^^^^ -->




        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Xizmatlar"
}
</script>

<style scoped>

</style>