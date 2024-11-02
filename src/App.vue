<!-- src/components/App.vue -->
<script setup>
import UpperPart from './components/UpperPart.vue';

</script>

<template>

    <UpperPart />
    <RouterView />

 
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
