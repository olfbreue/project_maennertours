<!-- src/components/App.vue -->
<script setup>
import UpperPart from './components/UpperPart.vue';
import Footer from './components/Footer.vue';

</script>

<template>

    <UpperPart />
    <RouterView />
  <Footer></Footer>

 
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
