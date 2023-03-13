<template>
  <div class="new_inner_title text-center mb-5 mt-5">
    <h1>Xizmatlar Narxi</h1>
  </div>

  <div class="container">
    <div class="row d-flex justify-content-between">
      <div class="grid-1-5 price_list_card col-lg-3 col-md-4 col-sm-6" data-aos="fade-right" data-aos-duration="1000">
        <h2>Wordpress-da Landing Page</h2>
        <h3><span class="uppercase">3 000 000 so'm</span></h3>
        <a href="" class="button">Buyurtma</a>
      </div>
      <div class="grid-1-5 price_list_card col-lg-3 col-md-4 col-sm-6" data-aos="fade-right" data-aos-duration="1000">
        <h2>Wordpress-da veb-sayt</h2>
        <h3><span class="uppercase">6 000 000 so'm</span></h3>


        <a href="" class="button">Buyurtma</a>
      </div>
      <div class="grid-1-5 price_list_card col-lg-3 col-md-4 col-sm-6" data-aos="fade-left" data-aos-duration="1000">
        <h2>Korporativ veb-sayt</h2>
        <h3><span class="uppercase">7 500 000 so'm</span></h3>



        <a href="" class="button">Buyurtma</a>
      </div>
      <div class="grid-1-5 price_list_card col-lg-3 col-md-4 col-sm-6" data-aos="fade-left" data-aos-duration="1000">
        <h2>Veb-sayt oddiy (beshta sahifagacha)</h2>
        <h3><span class="uppercase">8 000 000 so'm</span></h3>
        <a href="" class="button">Buyurtma</a>
      </div>




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
.grid-1-5 {
  border: 2px solid #ff1d1d;
  width: 265px;
  border-radius: 0.375rem;
  height: 350px;
  padding: 1.25em;
  position: relative;
  text-align: center;
  transition: all .6s;
  color: white;
  margin-top: 25px;
}


.grid-1-5:hover {
  background-color: #ff1d1d;
  transform: scale(1.025);
  z-index: 2;
}
</style>