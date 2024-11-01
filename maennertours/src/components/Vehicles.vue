<script setup>
import VehicleCards from '@/components/VehicleCards.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const { t, locale } = useI18n();
const karrenText = ref(t('message.karrenText'));
const vehiclesHeader = ref(t('message.vehiclesHeader'));


// Watch the locale and update the translated message whenever it changes
watch(locale, () => {
  karrenText.value = t('message.karrenText');
  vehiclesHeader.value = t('message.vehiclesHeader');
});
</script>

<template>
  <div class="bg-image rounded-3">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" >
        
        <div class="col-lg-5" >
          <h1 class="display-5">{{vehiclesHeader}}</h1>
          <div class="fs-3">
            {{ karrenText }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/carousel_images/AWS.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel_images/Buggy.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel_images/Fiat.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel_images/Hercules.png" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                    url(../assets/schrottkarren.JPG);
  background-size: cover;
  background-position: center;
  height: 80vh;
  position: relative;
  border: 1px solid #727272;
  margin:4px 8px 4px 8px;

}
.container-fluid {
  padding: 20px;
}
.fs-3 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: center;
  border: 1px solid #727272;
}
img{
  max-width: 625px;
  max-height: 370px;
}

.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 4%;
}
#carouselExampleSlidesOnly{
  padding-top:12%;
  padding-right:10%;
}
</style>
