<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';


const { t, locale } = useI18n();
const translatedMessage = ref(t('message.aboutText'));
const btntextShop = ref(t('message.btntextShop'));
const youTubeCardText = ref(t('message.youTubeCardText'));

// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {

  youTubeCardText.value = t('message.youTubeCardText');
  btntextShop.value = t('message.btntextShop');
});
</script>

<template>
  <div class="bg-image rounded-3">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" >
        <div class="col-lg-4" >
          <h1 class="display-3">YouTube</h1>
          <div class="fs-4">
            
            {{ youTubeCardText }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <ul class="list-group overflow-auto">
            <li v-for="index in 12" :key="index" class="list-group-item">
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

<style scoped>
.bg-image
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(../assets/alpenWechsel.png);
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid #727272;
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
  padding: 40px;
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
</style>
