<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import SimpleCard from '../components/SimpleCard.vue';

const { t, locale } = useI18n();
const translatedMessage = ref(t('message.aboutText'));
const videoTitle = ref(t('message.aboutVideoTitle'));
const videoText = ref(t('message.aboutVideoText'));
const aboutHeader = ref(t('message.aboutHeader'));
const btntextVideo = ref(t('message.btntextVideo'));

// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {
  translatedMessage.value = t('message.aboutText');
  videoTitle.value = t('message.aboutVideoTitle');
  videoText.value = t('message.aboutVideoText');
  aboutHeader.value = t('message.aboutHeader');
  btntextVideo.value = t('message.btntextVideo');
});


// Define the button text and link as reactive properties

</script>

<template>

<div class="bg-image rounded-3 mt-lg-4">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" >
        <div class="col-lg-4">
          <h1 class="display-6">{{aboutHeader}}</h1>
           <div class="fs-4">
            {{ translatedMessage }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4 border-light">
          <SimpleCard
            :title="videoTitle"
            :text="videoText"
            :btntext="btntextVideo"
            btnlink="https://youtu.be/GQaWi69s-MI?si=YSkVLJJWNQ54ctpe"
       />
 
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url(../assets/middle_of_the_road.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid #727272;
  margin:8px 8px 8px 8px;
  
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 4%;
  padding-bottom: 4%;
}
.fs-4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 60px;
  text-align: center;
  border: 1px solid #727272;
}
</style>