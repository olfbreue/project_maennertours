<template>
 
<div class="bg-image">
  <div class="centered-logo-container">
    <img src="@\assets\logo-Teil1t-weiss.png" alt="logo">
  </div>
</div>


</template>

<script>

</script>

<style scope>
.bg-image {
  background-image: url(../assets/Balkantour_cut_bw.jpg);
  background-size: cover;
  background-position: center;
  height: 30vh; /* or any other height you want */
  position: relative;
}

.centered-logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
 
}

img {
  width: 80%;
  height:80%;
}
</style>