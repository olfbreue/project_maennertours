<script>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

export default {
  name: 'Facebook',
  setup() {
    const { t, locale } = useI18n();
    const FacebookText = ref(t('message.FacebookText'));

    // Watch the locale and update the translated message whenever it changes
    watch(locale, () => {
      FacebookText.value = t('message.FacebookText');
    });

    return {
      FacebookText,
    };
  },
};
</script>

<template>
  <div class="bg-image rounded-3 mt-lg-4">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-4">
          <h1 class="display-5">Facebook</h1>
          <div class="fs-4">
            {{ FacebookText }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmaennertours&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(../assets/alpen2.JPG);
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid #727272;
  margin: 0px 8px 8px 8px;
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
.col-lg-3 {
  width: auto;
  height: auto;
}
@media (max-width: 768px) {
  .col-lg-3 {
    width: 100% !important;
    min-width: 0;
  }
}
iframe{
  margin-top:60px;
  border-radius:10px;
}
</style>
