<template>

  <div class="card mb-3 text-bg-dark" style="max-width: 340px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="image" class="card-img-top" alt="vehicle image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">{{ text }}</p>
       
        <a href="#" class="btn btn-primary">{{ btntext }}</a>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: String,
  text: String,
  btntext: String,
});

//console.log('Vehicle Card s Image prop value:', props.image)

</script>

<style scoped>

</style>
