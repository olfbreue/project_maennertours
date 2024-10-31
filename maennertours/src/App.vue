<script setup>
//import { createApp } from 'vue';
import App from './App.vue';
import { RouterLink, RouterView } from 'vue-router';
import router from './router';
import UpperPart from './components/UpperPart.vue';


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
