<script setup>
//import { createApp } from 'vue';
import App from './App.vue';
import { RouterLink, RouterView } from 'vue-router';
import router from './router';
import UpperPart from './components/UpperPart.vue';
import NavigationBar from './components/NavigationBar.vue';
import Carousel from './components/Carousel.vue';
import HomeView from './views/HomeView.vue';
import VehiclesView from './views/VehiclesView.vue';
import TourList from './components/TourList.vue';
import PannenSchnaps from './components/PannenSchnaps.vue';
import YouTube from './components/YouTube.vue';

//createApp(App).use(router).mount('#app');

</script>


<template>
 
  <UpperPart></UpperPart>

  <RouterView></RouterView>
   <!--<div class="m-2 rounded">
   <HomeView></HomeView>
  </div>
  <VehiclesView></VehiclesView> 
  <div class="m-2 rounded">
    <PannenSchnaps></PannenSchnaps>
    <YouTube></YouTube>
     <Carousel></Carousel>   
  </div> -->
  
 <!-- <TourList></TourList> -->

</template>


<style scoped>



</style>
