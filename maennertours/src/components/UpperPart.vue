<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(true);
const lastScrollPosition = ref(0);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  
  // Determine scroll direction and update visibility
  if (currentScrollPosition < lastScrollPosition.value) {
    // Scrolling up
    isVisible.value = true;
  } else if (currentScrollPosition > lastScrollPosition.value) {
    // Scrolling down
    isVisible.value = false;
  }
  
  lastScrollPosition.value = currentScrollPosition;
};

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed-header" :class="{ 'header-hidden': !isVisible }">
    <div class="bg-image">
      <div class="centered-logo-container">
        <img src="@\assets\logo-Teil1t-weiss.png" alt="logo">
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
  transition: transform 0.3s ease-in-out;
}

.header-hidden {
  transform: translateY(-125%);
}

.bg-image {
  background-image: url(../assets/Balkantour_cut_bw2.jpg);
  background-size: cover;
  background-position: center;
  height: 18vh;
  position: relative;
}

.centered-logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

img {
  width: 80%;
  height: 80%;
}

.header-spacer {
  height: calc(18vh + 50px); /* Adjust this value based on your NavigationBar height */
}
</style>
