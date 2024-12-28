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


</style>
