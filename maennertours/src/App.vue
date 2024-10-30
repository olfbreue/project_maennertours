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
  <NavigationBar></NavigationBar>
 
  <div class="m-2 rounded">
    <HomeView></HomeView>
  </div>
  <!--<VehiclesView></VehiclesView> -->
  <div class="m-2 rounded">
    <PannenSchnaps></PannenSchnaps>
    <YouTube></YouTube>
    <!-- <Carousel></Carousel>   -->
  </div>
  <div class="row">
        <div class="col-lg-4" ></div>
        <div class="col-lg-8 ms-auto">
          <iframe src="https://www.instagram.com/maennertours/embed" height="750" width="800"></iframe>
        </div>
        
      </div>
      <div class="row">
        <div class="col-lg-4" >
         

        </div>
        <div class="col-lg-8 ms-auto">

                        
        </div>
        
      </div>
 <!-- <TourList></TourList> -->
  <div class="container-fluid">

   
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-2"></div>
        <div class="col-lg-3"></div>
        <div class="col-lg-4" ></div>
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

iframe{
  background-color: black);
  border-radius: 10px;
  margin-left: 10px;
 
}

</style>
