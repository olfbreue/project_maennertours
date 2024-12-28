<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';


const { t, locale } = useI18n();
const instaText = ref(t('message.instaText'));
const trackerText = ref(t('message.trackerText'));

// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {

  
    instaText.value = t('message.instaText');
    trackerText.value = t('message.trackerText');
});
</script>

<template>
  <div class="bg-image rounded-3 mt-lg-4">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" >
        
        <div class="col-lg-4" >
          <h1 class="display-6">Impressum</h1>
          <div class="fs-4">

Anschrift:<br><br>
Männertours e.V.<br>
Carrer Rubio I Ors 25<br>
08940 Cornella de Llobregat<br>
Spain<br><br>

Vorstandvorsitzender:<br>
Stephan Waldmann<br><br>

Kontakt:<br>
Info@maennertours.com<br>
+4915205434473<br><br>

Steuernummer:<br>
216/5738/1960<br><br>

Vereinsregisternummer:<br>
VR20067
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
            <img src="../assets/Alles_weiss_Logo_1.png" class="img-fluid" alt="Tour Tracker von Autoscope" href="https://maennertours.autoskope.de/" target="_blank">
                  
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(../assets/trabbies.jpg);
  background-size: cover;
  background-position: center;
 
  position: relative;
  border: 1px solid #727272;
  margin:0px 8px 8px 8px;
  padding-bottom:30px;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  margin-top: 4%;
}
.fs-4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: left;
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

.link-opacity-100-hover{
  margin-top: 200px;
}

.btn{
  margin-top:10px;
}

img, p{
  margin-top:60px;
}
</style>
