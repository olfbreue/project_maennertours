<template>

  <div class="card mb-3 text-bg-dark text-end" style="max-width: 450px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="image" class="card-img-top" alt="vehicle image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">{{ text }}</p>
       
        <!-- Use btnlink prop dynamically -->
        <a :href="btnlink" target="_blank" class="btn btn-primary">{{ btntext }}</a>
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
  btnlink: String, // Adding btnlink as a prop here
});


</script>

<style scoped>
img{
  margin:20px;
}
.card-body{
  padding-right: 10vh;
  padding-top: 10%;
}
</style>
