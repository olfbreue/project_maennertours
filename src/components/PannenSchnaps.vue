<script setup>
import VehicleCards from '@/components/VehicleCards.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import schnapsImage from '../assets/hebeb-hne.png';
import AufkleberImage from '../assets/sticker.png';
import KlamottenImage from '../assets/klamotten.png';

const { t, locale } = useI18n();
const translatedMessage = ref(t('message.aboutText'));
const pannenSchnapsText = ref(t('message.pannenSchnapsText'));
const pannenSchnapsShop = ref(t('message.pannenSchnapsShop'));
const btntextShop = ref(t('message.btntextShop'));
const AufkleberShop = ref(t('message.AufkleberShop'));
const AufkleberTitle = ref(t('message.AufkleberTitle'));
const KlamottenTitle = ref(t('message.KlamottenTitle'));
const KlamottenShop = ref(t('message.KlamottenShop'));
const pannenHeader = ref(t('message.pannenHeader'));

// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {
  pannenSchnapsText.value = t('message.pannenSchnapsText');
  pannenSchnapsShop.value = t('message.pannenSchnapsShop');
  AufkleberTitle.value = t('message.AufkleberTitle');
  AufkleberShop.value = t('message.AufkleberShop');
  btntextShop.value = t('message.btntextShop');
  KlamottenTitle.value = t('message.KlamottenTitle');
  KlamottenShop.value = t('message.KlamottenShop');
  pannenHeader.value = t('message.pannenHeader');
});


</script>

<template>
  <div class="bg-image rounded-3">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" >
        <div class="col-lg-5" >
          <h1 class="display-5">{{pannenHeader}}</h1>
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
            btnlink="https://www.kopfgetriebeoel.de/maennertours/"
          />
                    <VehicleCards
            :image='AufkleberImage'
            :title="AufkleberTitle"
            :text="AufkleberShop"
            :btntext="btntextShop"
            btnlink="http://www.roggen-roll-shop.de/epages/64652728.sf/de_DE/?ObjectPath=/Shops/64652728/Categories/%22Band%60s%20and%20Friend%60s%22/Maennertours"

          />
          <VehicleCards
            :image='KlamottenImage'
            :title="KlamottenTitle"
            :text="KlamottenShop"
            :btntext="btntextShop"
            btnlink="http://www.roggen-roll-shop.de/epages/64652728.sf/de_DE/?ObjectPath=/Shops/64652728/Categories/%22Band%60s%20and%20Friend%60s%22/Maennertours"

          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url(../assets/pannenSchnaps1.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid #727272;
  margin:4px 8px 4px 8px;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 4%;
  padding-bottom: 4%;
}
.fs-3{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: center;
  border: 1px solid #727272;
}
.col-lg-4{
  padding-top: 4%;
  padding-right: 50px;
}
</style>
