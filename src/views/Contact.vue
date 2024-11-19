<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';


const { t, locale } = useI18n();

const ContactText = ref(t('message.ContactText'));
const ContactHeadline = ref(t('message.ContactHeadline'));

// Watch the locale and update the translated message and video title whenever it changes
watch(locale, () => {

  
    ContactHeadline.value = t('message.ContactHeadline'); 
    ContactText.value = t('message.ContactText');
});
</script>

<template>
    <div class="bg-image rounded-3 mt-lg-4">
      <div class="container-fluid">
        <div class="row justify-content-center" >
       
          <div class="col-lg-4" >
            <h1 class="display-6">{{ ContactHeadline }}</h1>
            <div class="fs-4">
              {{ ContactText }}
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-3">
            <form id="contact-form" method="post" action="send_email.php">
              <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" required class="form-control">
                <div class="invalid-feedback">Please enter your first name.</div>
              </div>
              <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" required class="form-control">
                <div class="invalid-feedback">Please enter your last name.</div>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required class="form-control">
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>
              <div class="form-group">
                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" required class="form-control"></textarea>
                <div class="invalid-feedback">Please enter a comment.</div>
              </div>
              <div class="form-group">
                <label for="captcha">CAPTCHA:</label>
                <input type="text" id="captcha" name="captcha" required class="form-control">
                <div class="invalid-feedback">Please enter the correct CAPTCHA code.</div>
               <!-- <img src="captcha.php" alt="CAPTCHA">-->
              </div>
              <button type="submit" class="btn btn-primary">Send Email</button>
            </form>
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
  height: 100vh;
  position: relative;
  border: 1px solid #727272;
  margin:0px 8px 8px 8px;
}
.row {
  color: #c0c0c0;
  z-index: 1000;
  padding-top: 6%;
  
}
.fs-4 {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 80px 10px 80px;
  padding: 40px;
  text-align: center;
  border: 1px solid #727272;
}
.form-group {
  margin-bottom: 20px;
}
.form-control {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}
.btn {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
}
.btn:hover {
  background-color: #3e8e41;
}
input, #comment{
    background-color: rgba(0, 0, 0, 0.5);
    color:#c0c0c0;
}
</style>
