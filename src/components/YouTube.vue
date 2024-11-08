<!-- Import necessary Vue functions -->
<script setup>
  // Import the useI18n function from the vue-i18n library
  import { useI18n } from 'vue-i18n';
  // Import the ref and watch functions from the Vue library
  import { ref, watch } from 'vue';

  // Initialize the i18n instance and get the t function and locale
  const { t, locale } = useI18n();

  // Initialize the translated message, button text, and YouTube card text
  const translatedMessage = ref(t('message.aboutText'));
  const btntextShop = ref(t('message.btntextShop'));
  const youTubeCardText = ref(t('message.youTubeCardText'));

  // Watch the locale and update the translated message and video title whenever it changes
  watch(locale, () => {
    // Update the YouTube card text and button text when the locale changes
    youTubeCardText.value = t('message.youTubeCardText');
    btntextShop.value = t('message.btntextShop');
  });
</script>

<!-- Template for the YouTube page -->
<template>
  <!-- Container for the YouTube page -->
  <div class="bg-image rounded-3 mt-lg-4">
    <!-- Container for the YouTube page content -->
    <div class="container-fluid">
      <!-- Row for the YouTube page content -->
      <div class="row d-flex justify-content-center">
        <!-- Column for the YouTube card -->
        <div class="col-lg-4">
          <!-- YouTube card title -->
          <h1 class="display-5">YouTube</h1>
          <!-- YouTube card text -->
          <div class="fs-4">
            {{ youTubeCardText }}
          </div>
        </div>
        <!-- Empty column for spacing -->
        <div class="col-lg-1"></div>
        <!-- Column for the YouTube video list -->
        <div class="col-lg-4">
          <!-- List group for the YouTube videos -->
          <ul class="list-group overflow-auto">
            <!-- Loop through the YouTube videos and display each one -->
            <li v-for="index in 12" :key="index" class="list-group-item">
              <!-- YouTube video iframe -->
              <iframe
                width="412"
                height="225"
                :src="`https://www.youtube.com/embed?listType=playlist&list=PL_u1YUflUcHZwdUQsTEtUtziSBu4toNYm&index=${index}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Styles for the YouTube page -->
<style scoped>
  /* Background image for the YouTube page */
  .bg-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(../assets/alpenWechsel.png);
    background-size: cover;
    background-position: center;
    position: relative;
    border: 1px solid #727272;
    margin: 8px 8px 4px 8px;
  }

  /* Row styles for the YouTube page */
  .row {
    color: #c0c0c0;
    z-index: 1000;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  /* Font size 4 styles for the YouTube page */
  .fs-4 {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px 80px 10px 80px;
    padding: 60px;
    text-align: center;
    border: 1px solid #727272;
  }

  /* List group styles for the YouTube page */
  .list-group {
    max-height: 450px;
    margin-bottom: 10px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    margin-left: 7%;
  }

  /* List group item styles for the YouTube page */
  .list-group-item {
    background-color: #272626e6;
    align-self: auto;
  }

  /* List group width for the YouTube page */
  .list-group {
    width: 455px;
  }
</style>
