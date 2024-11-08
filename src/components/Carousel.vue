<script>
  export default {
    // No script needed for this component
  }
</script>

<template>
  <!-- 
    Container for the carousel. This Carousel is not used at this moment but will stay for later implementation.
  -->
  <div class="row">
    <div class="col-lg-1"></div>
    <div class="col-lg-10">
      <!-- 
        Carousel component.
      -->
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <!-- 
          Carousel indicators.
        -->
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <!-- 
          Carousel inner content.
        -->
        <div class="carousel-inner">
          <!-- 
            Carousel items.
          -->
          <div class="carousel-item active" data-bs-interval="3000">
            <!-- 
              YouTube iframe for the first carousel item.
            -->
            <iframe width="960" height="540" class="d-block w-90" src="https://www.youtube.com/embed?listType=playlist&list=PL_u1YUflUcHZwdUQsTEtUtziSBu4toNYm&index=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>
        <!-- 
          Carousel controls.
        -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="col-lg-1"></div>
  </div>
</template>

<!-- 
  Styles for the carousel.
-->

<style scoped>
.carousel-inner iframe {
  margin: auto;
}

.row{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 10px 10px;
  margin: 8px;
}
</style>