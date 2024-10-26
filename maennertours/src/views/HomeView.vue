<script setup>
import SimpleCard from '../components/SimpleCard.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const { t, locale } = useI18n();
const translatedMessage = ref(t('message.hello'));

// Watch the locale and update the translated message whenever it changes
watch(locale, () => {
  translatedMessage.value = t('message.hello');
});
</script>

<template>
  <div class="bg-image">
    <div class="container-fluid">
      <div class="row" style="height: 400px;">
        <div class="col-lg-2"></div>
        <div class="col-lg-5">
          <div class="fs-3">
            {{ translatedMessage }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <SimpleCard></SimpleCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url(../assets/middle_of_the_road.jpg);
  background-size: cover;
  background-position: center;
  height: 80vh; /* or any other height you want */
  position: relative;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 120px;
}
.col-lg-5 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 40px;
  text-align: center;
}
</style>
