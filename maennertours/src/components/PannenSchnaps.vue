<script setup>
import VehicleCards from '@/components/VehicleCards.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import schnapsImage from '../assets/pannenSchnapsShop.jpg';

const { t, locale } = useI18n();
const translatedMessage = ref(t('message.aboutText'));
const pannenSchnapsText = ref(t('message.pannenSchnapsText'));
const pannenSchnapsShop = ref(t('message.pannenSchnapsShop'));
const btntextShop = ref(t('message.btntextShop'));

// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {
  translatedMessage.value = t('message.aboutText');
  pannenSchnapsText.value = t('message.pannenSchnapsText');
  pannenSchnapsShop.value = t('message.pannenSchnapsShop');
  btntextShop.value = t('message.btntextShop');
});
</script>

<template>
  <div class="bg-image rounded-3">
    <div class="container-fluid">
      <div class="row" >
        <div class="col-lg-2"></div>
        <div class="col-lg-5" >
          <div class="fs-3">
            {{ pannenSchnapsText }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <VehicleCards
            :image='schnapsImage'
            :title="pannenSchnapsTitle"
            :text="pannenSchnapsShop"
            :btntext="btntextShop"
            btnlink="https://example.com"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(../assets/pannenSchnaps1.jpg);
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
  /*border: 1px solid #727272;*/
}
</style>
