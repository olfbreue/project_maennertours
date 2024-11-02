<!-- App.vue -->
<template>
  <div>
    <h1>My Blog</h1>
    <AuthComponent />
    <BlogPosts />
  </div>
</template>

<script setup>
import AuthComponent from './components/AuthComponent.vue';
import BlogPosts from './components/BlogPosts.vue';
</script>

<style>
/* Add some basic styling if needed */
</style>