<script setup>
import { RouterLink, RouterView } from 'vue-router';
import UpperPart from './components/UpperPart.vue';
import NavigationBar from './components/NavigationBar.vue';
import Carousel from './components/Carousel.vue';
import HomeView from './views/HomeView.vue';


</script>


<template>
 
  <UpperPart></UpperPart>
  <NavigationBar></NavigationBar>
  <!--<Carousel></Carousel>  -->
  <HomeView></HomeView>
  <div class="container-fluid">

   
      <div class="row">
       <!-- <img src='@/assets/tarmac.png' class="d-block w-100" alt="tarmac"> -->
        <div class="col-lg-3">
        </div>
        <div class="col-lg-2"></div>

        <div class="col-lg-3"></div>
        <div class="col-lg-4" >
          
        </div>
      </div>
   

    <div class="row" style="height: 400px;">
      <div class="col-lg-3">Left Column</div>
      <div class="col-lg-6">Middle Column</div>
      <div class="col-lg-3">Right Column</div>
    </div>

    <div class="row" style="height: 100px;">
      <div class="col-lg-3">Footer Left</div>
      <div class="col-lg-6">Footer Middle</div>
      <div class="col-lg-3">Footer Right</div>
    </div>

  </div>
</template>


<style scoped>



</style>
