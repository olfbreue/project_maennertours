<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import YouTube from '../components/YouTube.vue';
import InstaGram from '../components/InstaGram.vue';
import Facebook from '../components/Facebook.vue';

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
    <YouTube></YouTube>
    <InstaGram></InstaGram> 
    <Facebook></Facebook>
</template>

<style scoped>

.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 8%;
}
.col-lg-4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: center;
  border: 1px solid #727272;
}
</style>
