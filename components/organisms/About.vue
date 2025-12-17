<script setup lang="ts">
import { globalTranslate as translate } from 'assets/js/language'
</script>

<template>
  <section class="about-section">
    <img
        src="/images/svg/green-arrow.svg"
        alt="arrow"
        class="decorative-arrow"
    />

    <div class="about-grid">
      <div class="about-text">
        <h2 class="about-title">
          {{ translate('about_us') }}
        </h2>
        <p class="about-description">
          {{ translate('landing_page_paragraph_21') }}
        </p>
      </div>

      <div class="about-video">
        <div class="video-wrapper">
          <video controls muted playsinline class="video-element">
            <source src="/videos/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  padding: 4rem 1.5rem;
  background: transparent;
  overflow: hidden;
  margin-top: 4rem;
}

.decorative-arrow {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  display: none;
}

@media (min-width: 768px) {
  .decorative-arrow {
    display: block;
    top: -40px;
  }
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.about-text {
  position: relative;
  z-index: 1;
  text-align: center;
}

@media (min-width: 768px) {
  .about-text {
    text-align: left;
  }
}

.about-title {
  font-size: 2rem;
  font-weight: 800;
  color: #005B88;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) {
  .about-title {
    font-size: 2.5rem;
  }
}

.about-description {
  font-size: 15px;
  color: #1E1E1E;
  line-height: 1.8;
  font-weight: 600;
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-description {
    margin: 0;
    font-size: 16px;
  }
}

.about-video {
  display: flex;
  justify-content: center;
}

.video-wrapper {
  width: 100%;
  max-width: 480px;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  position: relative;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border: none;
  outline: none;
  border-radius: 16px;
}
</style>
