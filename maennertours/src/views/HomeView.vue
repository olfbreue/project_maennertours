<script setup>
import SimpleCard from '../components/SimpleCard.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import PannenSchnaps from '@/components/PannenSchnaps.vue';
import Vehicles from '../components/Vehicles.vue';

const { t, locale } = useI18n();
const translatedMessage = ref(t('message.aboutText'));
const videoTitle = ref(t('message.aboutVideoTitle'));
const videoText = ref(t('message.aboutVideoText'));

// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {
  translatedMessage.value = t('message.aboutText');
  videoTitle.value = t('message.aboutVideoTitle');
  videoText.value = t('message.aboutVideoText');
});
</script>

<template>
  <div class="bg-image rounded-3">
    <div class="container-fluid">
      <div class="row" style="height: 400px;">
        <div class="col-lg-2"></div>
        <div class="col-lg-5">
          <div class="fs-3">
            {{ translatedMessage }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4 border-light">
          <SimpleCard
            :title="videoTitle"
            :text="videoText"
            btntext="Click Me"
            btnlink="https://example.com"
          />
        </div>
      </div>
    </div>
  </div>
  <PannenSchnaps></PannenSchnaps>
  <Vehicles></Vehicles>
</template>

<style scoped>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(../assets/middle_of_the_road.jpg);
  background-size: cover;
  background-position: center;
  height: 80vh;
  position: relative;
  border: 1px solid #727272;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 8%;
}
.col-lg-5 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: center;
  border: 1px solid #727272;
}
</style>
