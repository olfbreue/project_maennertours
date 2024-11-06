<script setup>

import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

function changeLanguage(lang) {
  locale.value = lang;
  console.log("Language:" + lang);
}
changeLanguage('de');

</script>

<template>
   

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg-height-5rem">
    <div class="container-fluid">
     <a class="navbar-brand">
        <img class="logo navbar-expand-lg" src="@/assets/Alles_weiss_Logo_1.png">
      </a> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mb- mx- mb-lg-0 ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/SocialMedia">Social Media</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/BlogView">Blog</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kontakt</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/TourTracker">Tour-Tracker</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Languages
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <a class="dropdown-item" href="#" @click="changeLanguage('de')">
                  <img src="../assets/de.png" alt="German" class="me-1">
                  German
                </a>
              </li>
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
  margin-right:100px;
}
.navbar-expand-lg-height-5rem {
  height: 5.5rem;
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
.collapse{
  background-color: #343a40;
}

</style>
