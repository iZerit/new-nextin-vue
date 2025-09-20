<template>
  <div class="new_inner_title text-center mb-5 mt-5">
    <h1>{{ $t('service_prices') }}</h1>
  </div>

  <div class="container">
    <div class="row d-flex justify-content-between">
      <section class="row d-flex justify-content-between ">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="grid-1-5 price_list_card " >
            <h2>{{ $t('wordpress_landing') }}</h2>
            <h3><span class="uppercase">3 000 000 so'm</span></h3>
            <a href="" class="button">{{ $t('order') }}</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="grid-1-5 price_list_card ">
            <h2>{{ $t('wordpress_site') }}</h2>
            <h3><span class="uppercase">6 000 000 so'm</span></h3>
            <a href="" class="button">{{ $t('order') }}</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="grid-1-5 price_list_card " >
            <h2>{{ $t('corporate_site') }}</h2>
            <h3><span class="uppercase">7 500 000 so'm</span></h3>
            <a href="" class="button">{{ $t('order') }}</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="grid-1-5 price_list_card " >
            <h2>{{ $t('simple_site') }}</h2>
            <h3><span class="uppercase">8 000 000 so'm</span></h3>
            <a href="" class="button">{{ $t('order') }}</a>
          </div>
        </div>
      </section>
    </div>


  
    <div class="center_button d-flex justify-content-center mt-5 mb-5">
  <router-link to="/narxlar" class="btn service_sec_but">{{ $t('all_prices') }}</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "PriceList"
}
</script>

<style scoped>

</style>