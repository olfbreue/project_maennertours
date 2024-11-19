<!-- 
  PannenSchnaps.vue: Handles the PannenSchnaps page.
-->

<script setup>
  // Import necessary Vue functions
  import VehicleCards from '@/components/VehicleCards.vue';
  import { useI18n } from 'vue-i18n';
  import { ref, watch } from 'vue';

  // Import images
  import schnapsImage from '../assets/hebeb-hne.png';
  import AufkleberImage from '../assets/shoplink_roggenroll.png';
 

  // Initialize i18n instance
  const { t, locale } = useI18n();

  // Initialize translated messages
  const translatedMessage = ref(t('message.aboutText'));
  const pannenSchnapsText = ref(t('message.pannenSchnapsText'));
  const pannenSchnapsShop = ref(t('message.pannenSchnapsShop'));
  const btntextShop = ref(t('message.btntextShop'));
  const AufkleberShop = ref(t('message.AufkleberShop'));
  const AufkleberTitle = ref(t('message.AufkleberTitle'));
  const KlamottenTitle = ref(t('message.KlamottenTitle'));
  const KlamottenShop = ref(t('message.KlamottenShop'));
  const pannenHeader = ref(t('message.pannenHeader'));

  // Watch the locale and update the translated messages whenever it changes
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
  <!-- 
    Container for the PannenSchnaps page.
  -->
  <div class="bg-image rounded-3">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-4">
          <!-- 
            Header for the PannenSchnaps page.
          -->
          <h1 class="display-5">{{ pannenHeader }}</h1>
          <!-- 
            Text for the PannenSchnaps page.
          -->
          <div class="fs-4">
            {{ pannenSchnapsText }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3">
          <!-- 
            VehicleCards components for the PannenSchnaps page.
          -->
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
         <!-- <VehicleCards
            :image='KlamottenImage'
            :title="KlamottenTitle"
            :text="KlamottenShop"
            :btntext="btntextShop"
            btnlink="http://www.roggen-roll-shop.de/epages/64652728.sf/de_DE/?ObjectPath=/Shops/64652728/Categories/%22Band%60s%20and%20Friend%60s%22/Maennertours"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
  Styles for the PannenSchnaps page.
-->

<style scoped>
.bg-image
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url(../assets/schanps_close.jpg);
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
.fs-4{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 60px;
  text-align: center;
  border: 1px solid #727272;
}
.col-lg-4{
  margin-top:20px;
  padding-right: 50px;
  width: 35%;
}
.col-lg-3{
  margin-top:70px;
}
</style>
