
Vue
Insert code

<!-- 
  NavigationBar.vue: Handles navigation and language selection.
-->

<script setup>
  // Import necessary Vue functions
  import { useI18n } from 'vue-i18n';

  // Initialize i18n instance
  const { locale } = useI18n();

  // Define function to change language
  function changeLanguage(lang) {
    // Update locale value
    locale.value = lang;
    console.log("Language:" + lang);
  }

  // Set default language to German
  changeLanguage('de');
</script>

<template>
  <!-- 
    Navigation bar container.
  -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg-height-5rem">
    <div class="container-fluid">
      <!-- 
        Logo image.
      -->
      <a class="navbar-brand">
        <img class="logo navbar-expand-lg" src="@/assets/Alles_weiss_Logo_1.png">
      </a>
      <!-- 
        Toggle button for mobile devices.
      -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 
        Navigation links.
      -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb- mx- mb-lg-0 ms-auto">
          <!-- 
            Home link.
          -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <!-- 
            Social Media link.
          -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/SocialMedia">Social Media</router-link>
          </li>
          <!-- 
            Blog link.
          -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/BlogView">Blog</router-link>
          </li>
          <!-- 
            Tour-Tracker link.
          -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/TourTracker">Tour-Tracker</router-link>
          </li>
          <!-- 
            Language selection dropdown.
          -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Languages
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <!-- 
                German language option.
              -->
              <li>
                <a class="dropdown-item" href="#" @click="changeLanguage('de')">
                  <img src="../assets/de.png" alt="German" class="me-1">
                  German
                </a>
              </li>
              <!-- 
                English language option.
              -->
              <li>
                <a class="dropdown-item" href="#" @click="changeLanguage('en')">
                  <img src="../assets/en.png" alt="English" class="me-1">
                  English
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navbar-toggler-icon{
  margin-right:10px;
}
.navbar-expand-lg-height-5rem {
  height: 4.5rem;
  background-image: url("../assets/tarmac.png");
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  padding-top: 10px;
  padding-left: 8px;
  padding-right:8px;
}
.logo {

  max-height: 160px;
  max-width: 160px;
  /*position: relative; */

  margin-right: 30px;
  z-index: 1000;
}
.dropdown-item img {
  width: 30px;
  height: 20px;
  margin-right: 4px;
}
@media (max-width: 990px) {
  .logo {
    width: 90px;
    height: auto;
  }
  .container-fluid{
    position:absolute;
    
    height: 100px;
  }
}
.nav-item{
  
  padding-left:10px;
 
}
.nav-link:hover {
  color: #6c757d;
}
.mb-lg-0{
  background-image: url("../assets/tarmac.png");
}
.router-link-active {
  color: #f8ffb8 !important;
}
.nav-link{
  color:white;
}
</style>
