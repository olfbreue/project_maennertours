<script setup>
// Import necessary Vue functions and components
import VehicleCards from './VehicleCards.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

// Initialize i18n and locale
const { t, locale } = useI18n();

// Initialize translated text
const karrenText = ref(t('message.karrenText'));
const vehiclesHeader = ref(t('message.vehiclesHeader'));

// Watch the locale and update the translated text whenever it changes
watch(locale, () => {
  karrenText.value = t('message.karrenText');
  vehiclesHeader.value = t('message.vehiclesHeader');
});
</script>

<template>
  <!-- 
    Container with a background image.
  -->
  <div class="bg-image rounded-3">
    <!-- 
      Container for the content.
    -->
    <div class="container-fluid">
      <!-- 
        Row with two columns.
      -->
      <div class="row d-flex justify-content-center">
        <!-- 
          First column with text.
        -->
        <div class="col-lg-4">
          <!-- 
            Header text.
          -->
          <h1 class="display-5">{{ vehiclesHeader }}</h1>
          <!-- 
            Text with a background color and padding.
          -->
          <div class="fs-4">
            {{ karrenText }}
          </div>
        </div>
        <!-- 
          Second column with a carousel.
        -->
        <div class="col-lg-1"></div>
        <div class="col-lg-5">

          <!--  Carousel with images-->
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <!--  Carousel items with images -->
              <div class="carousel-item active">
                <div class="image-frame">
                  <img src="../assets/carousel_images/AWS.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-frame">
                  <img src="../assets/carousel_images/Buggy.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-frame">
                  <img src="../assets/carousel_images/Fiat.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-frame">
                  <img src="../assets/carousel_images/Hercules.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-frame">
                  <img src="../assets/carousel_images/HondaChopper.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-frame">
                  <img src="../assets/carousel_images/Opel.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-frame">
                  <img src="../assets/carousel_images/Reliant.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-frame">
                  <img src="../assets/carousel_images/Simson.png" class="d-block w-100" alt="...">
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


        </div>



      </div>
    </div>
  </div>

</template>

<!-- 
  Styles for the component.
-->

<style scoped>
#carouselExampleSlidesOnly{

  padding-bottom:0px !important;

}
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(../assets/schrottkarren.JPG);
  background-size: cover;
  background-position: center;

  position: relative;
  border: 1px solid #727272;
  margin: 4px 8px 4px 8px;

}

.container-fluid {
  padding: 10px;
    margin-bottom:0px !important;

}

.fs-4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 60px;
  text-align: center;
  border: 1px solid #727272;
}

img {
  width: 625px;
  height: 360px;
  border-radius: 10px 10px 10px 10px;
}

.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 4%;
  padding-bottom: 4%;
  display: flex;
  align-items: center;
}

.carousel {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 10px 10px;
  padding: 10px;
  text-align: center;
  border: 1px solid #727272;
  width: 620px;
  height: 380px;
}

.col-lg-5 {
 
  width: 30%;
  margin-top: 85px;


}
</style>
