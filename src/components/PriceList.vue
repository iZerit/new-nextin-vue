<template>
  <div class="new_inner_title text-center mb-5 mt-5">
    <h1>Xizmatlar Narxi</h1>
  </div>

  <div class="container">
    <div class="row d-flex justify-content-between">
      <section class="row d-flex justify-content-between ">
        <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="grid-1-5 price_list_card " >
            <h2>Wordpress-da Landing Page</h2>
            <h3><span class="uppercase">3 000 000 so'm</span></h3>
            <a href="" class="button">Buyurtma</a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="grid-1-5 price_list_card ">
            <h2>Wordpress-da veb-sayt</h2>
            <h3><span class="uppercase">6 000 000 so'm</span></h3>
            <a href="" class="button">Buyurtma</a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-left" data-aos-duration="1000">
          <div class="grid-1-5 price_list_card " >
            <h2>Korporativ veb-sayt</h2>
            <h3><span class="uppercase">7 500 000 so'm</span></h3>
            <a href="" class="button">Buyurtma</a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-left" data-aos-duration="1000">
          <div class="grid-1-5 price_list_card " >
            <h2>Veb-sayt oddiy (beshta sahifagacha)</h2>
            <h3><span class="uppercase">8 000 000 so'm</span></h3>
            <a href="" class="button">Buyurtma</a>
          </div>
        </div>

      </section>






    </div>
    <div class="center_button d-flex justify-content-center mt-5 mb-5">
      <router-link to="/narxlar" class="btn service_sec_but">Barcha narxlar</router-link>
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