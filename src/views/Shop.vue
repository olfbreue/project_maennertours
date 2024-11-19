<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import VehicleCards from '@/components/VehicleCards.vue';

const { t, locale } = useI18n();
const Shoptext = ref(t('message.Shoptext'));

  // Import images
  import schnapsImage from '../assets/hebeb-hne.png';
  import AufkleberImage from '../assets/shoplink_roggenroll.png';

  const pannenSchnapsText = ref(t('message.pannenSchnapsText'));
  const pannenSchnapsShop = ref(t('message.pannenSchnapsShop'));
  const btntextShop = ref(t('message.btntextShop'));
  const AufkleberShop = ref(t('message.AufkleberShop'));
  const AufkleberTitle = ref(t('message.AufkleberTitle'));
// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {

    pannenSchnapsText.value = t('message.pannenSchnapsText');
    pannenSchnapsShop.value = t('message.pannenSchnapsShop');
    AufkleberTitle.value = t('message.AufkleberTitle');
    AufkleberShop.value = t('message.AufkleberShop');
    btntextShop.value = t('message.btntextShop');
    Shoptext.value = t('message.Shoptext');
    
});
</script>

<template>
  <div class="bg-image rounded-3 mt-lg-4">
    <div class="container-fluid">
      <div class="row" >
        <div class="col-lg-2"></div>
        <div class="col-lg-4" >
          <h1 class="display-6">Online Shops</h1>
          <div class="fs-4">
            {{ Shoptext }}
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
  height: 70vh;
  position: relative;
  border: 1px solid #727272;
  margin:0px 8px 8px 8px;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 6%;
}
.fs-4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: center;
  border: 1px solid #727272;
}
.list-group{
    max-height: 450px;
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
}
.list-group-item{
  background-color: #272626e6;
  align-self: auto;
}
.instagram-frame {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: hidden;
  border: none;
  border-radius:10px;
}

.instagram-frame::-webkit-scrollbar {
  display: none;
}

.link-opacity-100-hover{
  margin-top: 200px;
}

.btn{
  margin-top:10px;
}
</style>
