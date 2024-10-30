<template>
  <div class="card text-bg-dark mb-3" style="width: 18rem;">
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

<style>

</style>