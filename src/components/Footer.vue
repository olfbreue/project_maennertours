<script setup>

import { useI18n } from 'vue-i18n';
const { locale } = useI18n();



</script>

<template>
    <nav class="mx-2">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg-height-5rem">
    <div class="container-fluid">
<h5 style="color:whitesmoke;">             Copyright 2024 Männertours </h5>
 
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

</style>
