<script setup>
  // Import necessary Vue functions
  import { useI18n } from 'vue-i18n';
  import { ref, watch } from 'vue';

  // Initialize i18n instance
  const { t, locale } = useI18n();

  // Initialize translated message
  const instaText = ref(t('message.instaText'));

  // Watch the locale and update the translated message whenever it changes
  watch(locale, () => {
    instaText.value = t('message.instaText');
  });
</script>

<template>
  <!-- 
    Container for the Instagram page.
  -->
  <div class="bg-image rounded-3 mt-lg-4">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        
        <div class="col-lg-4">
          <div class="display-5">Instagram</div>
          <div class="fs-4">

            {{ instaText }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3">
          <!-- 
            Instagram iframe.
          -->
          <iframe
            src="https://www.instagram.com/maennertours/embed"
            height="470"
            width="400"
            frameborder="0"
            scrolling="no"
            class="instagram-frame"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
  Styles for the Instagram page.
-->


<style scoped>
.bg-image
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(../assets/Männertours-ural.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid #727272;
  margin:0px 8px 0px 8px;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 4%;
  padding-bottom: 4%;
}
.fs-4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 60px;
  text-align: center;
  border: 1px solid #727272;
}
.list-group{
    max-height: 450px;
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
}
.list-group-item{
  background-color: #272626e6;
  align-self: auto;
}
.instagram-frame {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: hidden;
  border: none;
  border-radius:10px;
  margin-left:9vh;
}

.instagram-frame::-webkit-scrollbar {
  display: none;
}
</style>
