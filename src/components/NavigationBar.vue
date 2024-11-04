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
    <nav class="mx-2">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg-height-5rem">
    <div class="container-fluid">
     <a class="navbar-brand">
        <img class="logo" src="@/assets/Alles_weiss_Logo_1.png">
      </a> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mx-4 mb-lg-0 ms-auto">
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
</nav>

</template>

<style scoped>
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
  margin: 0 auto 2rem;
  height: 260px;
  width: 260px;
  position: relative;
  margin-left: 80px;
  margin-right: 30px;
  z-index: 1000;
}
.dropdown-item img {
  width: 30px;
  height: 20px;
  margin-right: 4px;
}
.navbar-brand img {
  width: auto;
  height: 50vh; /* Viewport height units */
  max-height: 200px; /* Optional maximum height */
}

</style>
