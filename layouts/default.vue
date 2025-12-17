<template>
  <div class="layout">
    <div class="blur-circle orange-circle circle-1"></div>
    <div class="blur-circle blue-circle circle-2"></div>
    <div class="blur-circle orange-circle circle-3"></div>
    <div class="blur-circle blue-circle circle-4"></div>
    <div class="blur-circle blue-circle circle-5 desktop-only"></div>
    <div class="blur-circle blue-circle circle-6 desktop-only"></div>
    <div class="blur-circle orange-circle circle-7"></div>
    <div class="blur-circle orange-circle circle-8"></div>
    <div class="blur-circle blue-circle circle-9 desktop-only"></div>

    <div class="center-blur"></div>

    <div class="main-container">
      <OrganismsHeader class="layout-header" />
      <slot />
      <OrganismsFooterSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/style/scss/fonts.sass'
</script>

<style scoped>
.layout {
  position: relative;
  overflow-x: hidden;
}

.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.7;
  z-index: 0;
}

.orange-circle {
  background-color: #ffa41b;
}
.blue-circle {
  background-color: #00cfff;
}

/* Desktop positions */
.circle-1 {
  top: 520px;
  left: -120px;
  width: 500px;
  height: 450px;
}
.circle-2 {
  top: -120px;
  right: -120px;
  width: 400px;
  height: 400px;
}
.circle-3 {
  top: 1620px;
  right: -120px;
  width: 400px;
  height: 400px;
}
.circle-4 {
  top: 2420px;
  left: -120px;
  width: 500px;
  height: 450px;
}
.circle-5 {
  top: 3120px;
  right: -120px;
  width: 400px;
  height: 400px;
}
.circle-6 {
  top: 4000px;
  left: -120px;
  width: 500px;
  height: 450px;
}
.circle-7 {
  top: 4200px;
  right: -120px;
  width: 400px;
  height: 400px;
}
.circle-8 {
  bottom: 420px;
  left: -120px;
  width: 400px;
  height: 400px;
}
.circle-9 {
  bottom: 420px;
  right: -120px;
  width: 400px;
  height: 400px;
}

.center-blur {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 164, 27, 0.2);
  border-radius: 50%;
  filter: blur(120px);
  transform: translate(-50%, -50%);
  z-index: 0;
}

.main-container {
  position: relative;
  z-index: 10;
  max-width: 1328px;
  margin: 0 auto;
}

.layout-header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1328px;
  z-index: 100;
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 768px) {
  .main-container {
    padding: 0 24px;
  }

  .layout-header {
    padding: 0 24px;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .main-container {
    padding: 0;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .blur-circle {
    width: 200px !important;
    height: 200px !important;
    filter: blur(80px) !important;
    opacity: 0.4 !important;
  }

  .layout-header {
    left: 0 !important;
    transform: none !important;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 8px;
  }

  .main-container {
    padding: 0;
    max-width: 100%;
  }

  /* Use percentage-based positioning for responsive behavior */
  .circle-1 {
    top: 15%;
    left: -40px;
  }
  .circle-2 {
    top: 5%;
    right: -40px;
  }
  .circle-3 {
    top: 40%;
    right: -40px;
  }
  .circle-4 {
    top: 60%;
    left: -40px;
  }
  .circle-5,
  .circle-6,
  .circle-9 {
    display: none !important;
  }
  .circle-7 {
    top: 75%;
    right: -40px;
  }
  .circle-8 {
    bottom: 10%;
    left: -40px;
  }

  .center-blur {
    width: 180px;
    height: 180px;
    filter: blur(90px);
  }
}

/* Desktop only circles */
@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}
@media (max-width: 767px) {
  .desktop-only {
    display: none;
  }
}
</style>