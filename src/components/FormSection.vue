<template>
  <!-- form section  -->
  <section class="form_section container mb-5" id="formsection">
    <div class="d-flex row justify-content-between align-items-center">
      <div class="form_inner col-lg-6 col-md-6 col-sm-12">
        <form  class="form" name="contact"
               method="POST" data-netlify="true">
          <h1 class="text-center">Biz bilan bog'lanish</h1>
          <div class="form_input">
            <input name="name" type="text" placeholder="ism" class="form-control ">
          </div>
          <div class="form_input">
            <input name="email" type="text " placeholder="E-mail" class="form-control">
          </div>
          <div class="form_input">
            <input name="phone" id="phone-mask" type="text" placeholder="Telefon raqam"
                   class="form-control">
          </div>

          <div class="mt-3" data-netlify-recaptcha="true"></div>

          <div class="form_buttons d-flex justify-content-between">
            <button type="submit" class="form_button btn service_sec_but mt-3 mb-3">Yuborish</button>
            <button id="show_div_but" type="button"
                    class="btn service_sec_but mt-3 mb-3 form_second_button">Xaritada ko'rish</button>
            <button id="hide_div_but" type="button" class="btn service_sec_but mt-3 mb-3 hide_map">Xaritani
              yopish</button>
          </div>
        </form>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 map_div" id="map_divv">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.0320852651116!2d68.77810387717874!3d40.4966735389498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2433786b46856950!2sBarkamol%20Avlod%20Markazi!5e0!3m2!1suz!2s!4v1669660019818!5m2!1suz!2s"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>


  </section>
  <!-- form section  -->
</template>

<script>
export default {
  name: "FormSection"
}
</script>

<style scoped>

</style>