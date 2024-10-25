<script>
export default {

}
</script>


<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg-height-5rem">
  <div class="container-fluid">
    <a class="navbar-brand">
      <img class="logo" src="@\assets\Alles_weiss_Logo_1.png">

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</template>

<style>
.navbar-expand-lg-height-5rem {
  height: 5.5rem;
}
.logo {
 
  margin: 0 auto 2rem;
  height: 220px;
  width: 220px;
  position: relative;
 top:20px;
 margin-left: 30px;
 margin-right: 30px;
 z-index: 1000;
}
</style>