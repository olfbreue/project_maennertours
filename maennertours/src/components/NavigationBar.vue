<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function changeLanguage(lang) {
  locale.value = lang;
  console.log("Language:" + lang);
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg-height-5rem">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img class="logo" src="@/assets/Alles_weiss_Logo_1.png">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
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
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-expand-lg-height-5rem {
  height: 5.5rem;
  background-image: url("../assets/tarmac.png");
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
}
.logo {
  margin: 0 auto 2rem;
  height: 220px;
  width: 220px;
  position: relative;
  top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 1000;
}
.dropdown-item img {
  width: 30px;
  height: 20px;
  margin-right: 4px;
}
</style>
