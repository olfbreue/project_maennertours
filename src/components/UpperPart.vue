<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const headerTranslate = ref(0);
const lastScrollPosition = ref(0);
const headerHeight = ref(0);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  const scrollDelta = currentScrollPosition - lastScrollPosition.value;
  
  // Update the translation value based on scroll
  headerTranslate.value = Math.max(
    Math.min(headerTranslate.value - scrollDelta, 0), // Don't translate down more than 0
    -(headerHeight.value * 1.5) // Don't translate up more than header height
  );
  
  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
  // Get the header height on mount
  const header = document.querySelector('.fixed-header');
  if (header) {
    headerHeight.value = header.offsetHeight;
  }
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed-header" :style="{ transform: `translateY(${headerTranslate}px)` }">
    <div class="bg-image mx-2">
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
  transition: transform 0.15s ease-out; /* Reduced transition time for smoother scrolling */
}

.bg-image {
  background-image: url(../assets/Balkantour_cut_bw2.jpg);
  background-size: cover;
  background-position: center;
  height: 18vh;
  position: relative;
  min-height: 110px;
}

.centered-logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  min-height: 110px;
}

img {
  width: 80%;
  height: 80%;
}

.header-spacer {
  height: calc(18vh + 85px);
}
</style>
