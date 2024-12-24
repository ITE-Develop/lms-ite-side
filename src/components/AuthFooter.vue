<template>
  <footer class="px-5 py-4">
    <div class="row">
      <div class="col-4 d-flex align-items-center">
        <router-link to="/page/terms_and_conditions" class="text-dark text-decoration-none"
          >Terms & Conditions</router-link
        >
        <span class="mx-3 text-light">|</span>
        <router-link to="/page/privacy_policy" href="" class="text-dark text-decoration-none"
          >Privacy Policy</router-link
        >
      </div>
      <div class="col-4 d-flex align-items-center justify-content-center">Power by ITE-Development</div>
      <div class="col-4 d-flex align-items-center justify-content-end">
        <span>Download Our App</span>
        <div class="ms-5">
          <a href=""><img src="@/assets/images/website/app-store.png" alt="App Store" class="me-3" /></a>
          <a href=""><img src="@/assets/images/website/play-store.png" alt="Play Store" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
