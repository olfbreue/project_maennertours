<template>
  <div class="card text-bg-dark mb-3" style="width: 23rem;">
  <img src="../assets/trailerStill.png" class="card-img-top" alt="maenner foto">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ text }}</p>
    <a href="#" class="btn btn-primary">{{ btntext }}</a>
  </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  text: String,
  btntext: String,
  btnlink: String
});
</script>

<style scoped>
.card{
  border-radius: 10px;
  border: 1px solid #727272;
  box-shadow: -2px 2px 2px 2px rgba(244, 244, 244, 0.274);

}
</style>