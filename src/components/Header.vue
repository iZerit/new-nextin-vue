<template>
  <!-- default header and for mobile -->
  <header class="site-header sticky-top home1" id="home1">
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="logo-img" to="/"><img class="img-fluid" src="../assets/MainLogo.png" alt=""></router-link>
        <button  class="shadow-none navbar-toggler custom-toggler  navbar-toggler-but" type="button"
                 data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>
  </header>
  <!-- default header and for mobile -->


  <!-- header for scrool down  -->
  <header class="site-header sticky-top home2" id="home2">
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        <router-link class="logo-img" to="/"><img class="img-fluid" src="../assets/MainLogo.png" alt=""></router-link>
        <ul class="navbar-nav home2_for_mobile_menu" id="home2_for_mobile_menu">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Bosh sahifa</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Jamoa</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Bizning ishlar</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Narxlar</router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to="/xizmatlar">Xizmatlar</router-link>
          </li>
        </ul>
        <button  class="shadow-none navbar-toggler custom-toggler home2_for_mobile  navbar-toggler-but" type="button"
                 data-bs-toggle="offcanvas" id="home2_for_mobile" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
  <!-- header for scrool down  -->

  <!-- offcanvas for header burger menu -->
  <div class="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <a href="#" class="offcanvas-title "><img src="" alt=""></a>
      <button type="button" class="btn-close text-reset close-but flex-end"
              data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="nav-pills navbar-nav justify-content-end">

        <li class="nav-item offcanvas-nav-item">
          <router-link class="sitenav-item-link" to="/">Bosh sahifa</router-link>
        </li>

        <li class="nav-item offcanvas-nav-item">
          <router-link class="sitenav-item-link " to="/">Jamoa</router-link>
        </li>
        <li class="nav-item offcanvas-nav-item">
          <router-link class="sitenav-item-link" to="/">Narxlar</router-link>
        </li>
        <li class="nav-item offcanvas-nav-item offcanvas-dropdown-menu" >
          <router-link class="sitenav-item-link" style="padding:0;" to="/xizmatlar">Xizmatlar</router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- offcanvas for header burger menu -->

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>