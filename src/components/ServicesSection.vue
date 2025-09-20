<template>
  <!-- service section -->
  <section class=" service_section">
    <div class="container">
      <div class="services_div">
        <div class="services_inner_div">
          <div class="new_inner_title text-center mb-5 mt-5">
            <h1>{{$t('services_title')}}</h1>
          </div>
          <div class="service_first_row">
            <div class="row">
              <div class="first_card col-lg-4 col-md-4  col-sm-6">
                <div class="icon_title d-flex">
                  <router-link to="./xizmatlar/web-design">
                    <div class="first_icon">
                      <i class="fa-solid fa-pen"></i>
                    </div>
                  </router-link>
                  <router-link to="./xizmatlar/web-design"><h3 class="mt-3">{{$t('web_design')}}</h3></router-link>

                </div>
                <div class="card_text mt-2">
                  <p>{{$t('web_design_desc')}}</p>
                  <router-link to="./xizmatlar/web-design">{{$t('more_info')}}</router-link>
                </div>
              </div>
              <div class="first_card col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <router-link to="/xizmatlar/web-dasturlash">
                    <div class="first_icon">
                      <i class="fa-solid fa-code"></i>
                    </div>
                  </router-link>
                  <router-link to="/xizmatlar/web-dasturlash"><h3 class="mt-3">{{$t('web_dev')}}</h3></router-link>
                </div>
                <div class="card_text mt-2">
                  <p>{{$t('web_dev_desc')}}</p>
                  <router-link to="/xizmatlar/web-dasturlash">{{$t('more_info')}}</router-link>

                </div>
              </div>

              <!-- Wordpressda sayt  -->

              <!-- <div class="first_card col-lg-4 col-md-4 col-sm-6">
                  <div class="icon_title d-flex">
                      <div class="first_icon">
                          <i class="fa-brands fa-wordpress"></i>
                      </div>
                      <h3 class="mt-3">Wordpressda sayt</h3>
                  </div>
                  <div class="card_text mt-2">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus ab atque
                          itaque voluptas, dolorum magnam provident tempore laudantium ullam molestiae, cum
                          iure praesentium minima.</p>
                      <a href="#">To'liq ma'lumot</a>

                  </div>
              </div> -->

              <!-- Wordpressda sayt  -->

              <div class="first_card card_invincible_mobile col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-brands fa-google"></i>
                  </div>
                  <a href="#"><h3 class="mt-3">{{$t('google_ads')}}</h3></a>
                </div>
                <div class="card_text mt-2">
                  <p>{{$t('google_ads_desc')}}</p>
                  <a href="#">{{$t('more_info')}}</a>

                </div>
              </div>
              <div class="mt-5 first_card card_invincible_mobile col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <a href="#"> <h3 class="mt-3">{{$t('email_marketing')}}</h3></a>
                </div>
                <div class="card_text mt-2">
                  <p>{{$t('email_marketing_desc')}}</p>
                  <a href="#">{{$t('more_info')}}</a>

                </div>
              </div>
              <div class="mt-5 first_card card_invincible_mobile col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <router-link to="/xizmatlar/seo-optimizatsiya">
                    <div class="first_icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </router-link>
                  <router-link to="/xizmatlar/seo-optimizatsiya"><h3 class="mt-3">{{$t('seo_optimization')}}</h3></router-link>

                </div>
                <div class="card_text mt-2">
                  <p>{{$t('seo_optimization_desc')}}</p>
                  <router-link to="/xizmatlar/seo-optimizatsiya">{{$t('more_info')}}</router-link>

                </div>
              </div>
              <div class="first_card mt-5 col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <a href="#"> <h3 class="mt-3">{{$t('online_store')}}</h3></a>
                </div>
                <div class="card_text mt-2">
                  <p>{{$t('online_store_desc')}}</p>
                  <a href="#">{{$t('more_info')}}</a>

                </div>
              </div>




              <div class="first_card mt-5 col-lg-4 col-md-4 col-sm-6">
                <div class="icon_title d-flex">
                  <div class="first_icon">
                    <i class="fa-solid fa-arrow-trend-up"></i>
                  </div>
                  <a href="#"><h3 class="mt-3">{{$t('internet_marketing')}}</h3></a>
                </div>
                <div class="card_text mt-2">
                  <p>{{$t('internet_marketing_desc')}}</p>
                  <a href="#">{{$t('more_info')}}</a>

                </div>
              </div>
            </div>
          </div>



          <!-- service second row  -->




        </div>
        <div class="center_button d-flex justify-content-center mt-3 mb-5">
          <router-link to="/xizmatlar" class="btn service_sec_but">{{$t('all_services')}}</router-link>
        </div>
      </div>
    </div>

  </section>
  <!-- service section -->
</template>

<script>
export default {
  name: "ServicesSection"
}

</script>

<style scoped>

</style>