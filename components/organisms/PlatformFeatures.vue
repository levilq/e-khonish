<script setup lang="ts">
import { globalTranslate as translate } from 'assets/js/language'
</script>

<template>
  <section class="features-section">
    <div class="features-grid">
      <div class="feature-card">
        <div class="icon-wrapper">
          <div class="icon-circle">
            <img src="/images/svg/features/icon-1.svg" alt="icon 1" class="icon" />
          </div>
        </div>
        <p class="feature-text">{{ translate('landing_page_paragraph_8') }}</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper">
          <div class="icon-circle">
            <img src="/images/svg/features/icon-2.svg" alt="icon 2" class="icon" />
          </div>
        </div>
        <p class="feature-text">{{ translate('landing_page_paragraph_9') }}</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper">
          <div class="icon-circle">
            <img src="/images/svg/features/icon-3.svg" alt="icon 3" class="icon" />
          </div>
        </div>
        <p class="feature-text">{{ translate('landing_page_paragraph_10') }}</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper">
          <div class="icon-circle">
            <img src="/images/svg/features/icon-4.svg" alt="icon 4" class="icon" />
          </div>
        </div>
        <p class="feature-text">{{ translate('landing_page_paragraph_11') }}</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper">
          <div class="icon-circle">
            <img src="/images/svg/features/icon-5.svg" alt="icon 5" class="icon" />
          </div>
        </div>
        <p class="feature-text">{{ translate('landing_page_paragraph_12') }}</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper">
          <div class="icon-circle">
            <img src="/images/svg/features/icon-6.svg" alt="icon 6" class="icon" />
          </div>
        </div>
        <p class="feature-text">{{ translate('landing_page_paragraph_13') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 5rem 20px;
  background: transparent;
  max-width: 1128px;
  margin: 0 auto;
}

/* Tablet: 32px padding */
@media (min-width: 768px) {
  .features-section {
    padding: 5rem 32px;
  }
}

/* Desktop: NO padding */
@media (min-width: 1024px) {
  .features-section {
    padding: 5rem 0;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem 2rem;
  text-align: center;
  justify-items: center;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3.5rem 2rem;
  }
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 400px;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  transition: all 0.35s ease;
  background-color: transparent;
  border: 1px solid transparent;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(0, 88, 122, 0.2);
  box-shadow: 0 8px 24px rgba(0, 88, 122, 0.25);
  transform: translateY(-8px);
  backdrop-filter: blur(6px);
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 100%;
}

.icon-circle {
  background-color: #00587A;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.feature-card:hover .icon-circle {
  transform: scale(1.08);
}

.icon {
  width: 42px;
  height: 42px;
}

.feature-text {
  font-size: 16px;
  line-height: 1.9;
  color: #1E1E1E;
  font-weight: 600;
  max-width: 380px;
  margin: 50px auto 0;
}

@media (min-width: 1024px) {
  .feature-text {
    font-size: 17px;
  }
}
</style>