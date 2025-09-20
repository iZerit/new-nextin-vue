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
            <router-link class="nav-link" to="/">{{$t('home')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jamoa">{{$t('team')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/narxlar">{{$t('prices')}}</router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to="/xizmatlar">{{$t('services')}}</router-link>
          </li>
        </ul>
        <button  class="shadow-none navbar-toggler custom-toggler home2_for_mobile  navbar-toggler-but" type="button"
                 data-bs-toggle="offcanvas" id="home2_for_mobile" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Language Switcher -->
        <select v-model="$i18n.locale" class="form-select w-auto ms-3" style="display:inline-block;">
          <option value="uz">O'zbek</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </nav>
  </header>
  <!-- header for scrool down  -->

  <!-- offcanvas for header burger menu -->
  <div class="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
    <div class="offcanvas-header">
      <a href="#" class="offcanvas-title "><img src="" alt=""></a>
      <button type="button" class="btn-close text-reset close-but flex-end"
              data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body uk-offcanvas-bar">
      <ul class="nav-pills navbar-nav justify-content-end uk-nav uk-nav-default">
        <li class="nav-item offcanvas-nav-item">
          <router-link  to="/"> <a class="sitenav-item-link">{{$t('home')}}</a></router-link>
        </li>
        <li class="nav-item offcanvas-nav-item">
          <router-link  class="sitenav-item-link " to="/jamoa" >{{$t('team')}}</router-link>
        </li>
        <li class="nav-item offcanvas-nav-item">
          <router-link class="sitenav-item-link" to="/narxlar">{{$t('prices')}}</router-link>
        </li>
        <li class="nav-item offcanvas-nav-item offcanvas-dropdown-menu" >
          <router-link class="sitenav-item-link" style="padding:0;" to="/xizmatlar">{{$t('services')}}</router-link>
        </li>
        <!-- Language Switcher in Burger Menu -->
        <li class="nav-item mt-3">
          <select v-model="$i18n.locale" class="form-select w-auto">
            <option value="uz">O'zbek</option>
            <option value="ru">Русский</option>
          </select>
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
.form-select.w-auto,
select.form-select.w-auto {
  background: linear-gradient(90deg, #e53935 0%, #1e88e5 100%);
  color: #fff;
  border: none;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(30,136,229,0.1);
  transition: box-shadow 0.2s, background 0.2s;
}
.form-select.w-auto:focus,
select.form-select.w-auto:focus {
  outline: none;
  box-shadow: 0 0 0 2px #e53935;
  background: linear-gradient(90deg, #e53935 0%, #1e88e5 100%);
  color: #fff;
}
.form-select.w-auto option,
select.form-select.w-auto option {
  background: #060ae7;
  color: #fff;
}

/* Language Switcher Styles */
.form-select.w-auto,
select.form-select.w-auto {
  background: linear-gradient(90deg, #e53935 0%, #1e88e5 100%);
  color: #fff;
  border: none;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(30,136,229,0.1);
  transition: box-shadow 0.2s;
}
.form-select.w-auto:focus,
select.form-select.w-auto:focus {
  outline: none;
  box-shadow: 0 0 0 2px #e53935;
}
</style>