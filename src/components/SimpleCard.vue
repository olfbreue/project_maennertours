<template>
  <!-- 
    Container for the card.
  -->
  <div class="card text-bg-dark mb-3">
    <!-- 
      Header for the card.
    -->
    <div class="card-header">
      Youtube Video
    </div>
    <!-- 
      YouTube iframe.
    -->
    <iframe width="391" height="240" src="https://www.youtube.com/embed/GQaWi69s-MI?si=LFyIpFct_-a9L4Iq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <!-- 
      Body of the card.
    -->
    <div class="card-body">
      <!-- 
        Title of the card.
      -->
      <h5 class="card-title">{{ title }}</h5>
      <!-- 
        Text of the card.
      -->
      <p class="card-text">{{ text }}</p>
      <!-- 
        Button with a link to the YouTube video.
      -->
      <a href="https://youtu.be/GQaWi69s-MI?si=YSkVLJJWNQ54ctpe" target="_blanc" class="btn btn-primary text-end">{{ btntext }}</a>
    </div>
  </div>
</template>

<script setup>
  // Import necessary Vue functions
  import { defineProps } from 'vue';

  // Define props for the component
  const props = defineProps({
    title: String,
    text: String,
    btntext: String,
    btnlink: String
  });
</script>

<!-- 
  Styles for the card.
-->

<style scoped>
.card{
  border-radius: 10px;
  border: 1px solid #727272;
  width: 392px;

  margin-top: 30px;;
}
.card-body{
  width: 392px;
}
</style>