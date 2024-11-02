<script setup>
import AuthComponent from '../components/AuthComponent.vue';
import BlogPosts from '../components/BlogPosts.vue';
</script>

<template>
          <div class="row d-flex justify-content-center" style="height: 400px;">
            <div class="col-lg-5">

                <AuthComponent />
                <BlogPosts /> 
    </div>
  </div>
</template>

<style>
    .col-lg-5{
        color: white;
    }
</style>