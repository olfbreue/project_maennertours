<template>
  <!--
  <div class="card text-bg-dark mb-3" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="vehicle image">
    
    <div class="card-body card-image-left">
      <p class="card-text">{{ text }}</p>
      <a href="#" class="btn btn-primary">{{ btntext }}</a>
    </div>
  </div>
-->
  <div class="card mb-3 text-bg-dark" style="max-width: 340px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="image" class="card-img-top" alt="vehicle image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Merchandising</h5>
        <p class="card-text">{{ text }}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
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
