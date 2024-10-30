<script setup>
import VehicleCards from '@/components/VehicleCards.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const { t, locale } = useI18n();
const translatedMessage = ref(t('message.vehicleCardText'));

// Watch the locale and update the translated message whenever it changes
watch(locale, () => {
  translatedMessage.value = t('message.vehicleCardText');
});
</script>

<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 text-center mb-4">
        <div class="fs-3">
          {{ translatedMessage }}
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-3 mb-4" v-for="n in 12" :key="n">
            <VehicleCards
            image='@/assets/trailerStill.png'
            text="This is a description of the vehicle."
            btntext="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  padding: 20px;
}
.fs-3 {
  margin-bottom: 20px;
}
</style>
