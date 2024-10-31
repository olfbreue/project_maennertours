<script setup>
import VehicleCards from '@/components/VehicleCards.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const { t, locale } = useI18n();
const karrenText = ref(t('message.karrenText'));

// Watch the locale and update the translated message whenever it changes
watch(locale, () => {
  karrenText.value = t('message.karrenText');
});
</script>

<template>
  <div class="bg-image rounded-3">
    <div class="container-fluid">
      <div class="row" >
        <div class="col-lg-2"></div>
        <div class="col-lg-5" >
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
.container-fluid {
  padding: 20px;
}
.fs-3 {
  margin-bottom: 20px;
}
img{
  max-width: 625px;
  max-height: 370px;
}
.col-lg-5 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: center;
  border: 1px solid #727272;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 1%;
}
#carouselExampleSlidesOnly{
  padding-top:10%
}
</style>
