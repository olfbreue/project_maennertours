<script setup>

import { useI18n } from 'vue-i18n';
const { locale } = useI18n();



</script>

<template>
  <nav class="mx-2">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg-height-5rem">
      <div class="container-fluid">
        <h5 style="color:whitesmoke;">Copyright 2024 Männertours
        <router-link style="color:whitesmoke; padding-left:20px;" to="/Impressum" >Impressum</router-link>
      </h5>
        <a href="https://www.szenekonzept.de/" target="_blank" class="navbar-logo-link">
          <span style="color:whitesmoke; font-size: 16px;">Sitedesign by</span>
          <img src="../assets/sz2.svg" alt="Logo" class="navbar-logo" />
        </a>
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
  border-radius: 10px 10px 0px 0px;
  margin-top: auto;
}

.navbar-logo-link {
  margin-left: auto;
  margin-right: 6%;
  text-decoration: none;
}

.navbar-logo {
  height: 50px;
  width: auto;
  margin-left: 10px;
}
h5{
  padding-left:5%;
}

</style>


