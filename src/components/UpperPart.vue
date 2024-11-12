<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { ref, onMounted, onUnmounted } from 'vue';


</script>

<template>
  <div class="fixed-header" :style="{ transform: `translateY(${headerTranslate}px)` }">
    <div class="bg-image mx-2">
      <div class="centered-logo-container">
        <img src="@\assets\logoTeil1tweiss.png" alt="logo">
      </div>
    </div>
    <NavigationBar></NavigationBar>
  </div>
  <!-- Add a spacer div to prevent content from hiding behind the fixed header -->
  <div class="header-spacer"></div>
</template>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.15s ease-out; /* Reduced transition time for smoother scrolling */
}

.bg-image {
  background-image: url(../assets/Balkantour_cut_bw2.jpg);
  background-size: cover;
  background-position: center;
  height: 50px;
  position: relative;
  min-height: 110px;
}

.centered-logo-container {
  position: relative;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  min-height: 150px;
}

img {
  width:40%;
  max-width: 440px;
  margin-bottom: 60px;
}

.header-spacer {
  height: 170px;
}

@media (max-width: 870px) {
  .centered-logo-container {
    width: 650px; /* adjust the value to your needs */
  }
}
</style>
