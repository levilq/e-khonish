<script setup lang="ts">
import { globalTranslate as translate } from 'assets/js/language'
</script>

<template>
  <section class="values-section">
    <div class="values-container">
      <h2 class="values-title">{{ translate('our_values') }}</h2>

      <!-- Top 3 -->
      <div class="values-grid">
        <div class="value-card">
          <div class="icon-circle">
            <img src="/images/svg/growth.svg" alt="growth" class="icon" />
          </div>
          <h3 class="value-title">{{ translate('growth') }}</h3>
          <p class="value-desc">{{ translate('landing_page_paragraph_23') }}</p>
        </div>

        <div class="value-card">
          <div class="icon-circle">
            <img src="/images/svg/availability2.svg" alt="availability" class="icon" />
          </div>
          <h3 class="value-title">{{ translate('availability') }}</h3>
          <p class="value-desc">{{ translate('landing_page_paragraph_24') }}</p>
        </div>

        <div class="value-card">
          <div class="icon-circle">
            <img src="/images/svg/innovation.svg" alt="innovation" class="icon" />
          </div>
          <h3 class="value-title">{{ translate('innovations') }}</h3>
          <p class="value-desc">{{ translate('landing_page_paragraph_25') }}</p>
        </div>
      </div>

      <!-- Bottom 2 -->
      <div class="values-grid bottom-row">
        <div class="value-card green">
          <div class="icon-circle">
            <img src="/images/svg/safety.svg" alt="safety" class="icon" />
          </div>
          <h3 class="value-title">{{ translate('safety') }}</h3>
          <p class="value-desc">{{ translate('landing_page_paragraph_266') }}</p>
        </div>

        <div class="value-card">
          <div class="icon-circle">
            <img src="/images/svg/partnership.svg" alt="partnership" class="icon" />
          </div>
          <h3 class="value-title">{{ translate('partnership') }}</h3>
          <p class="value-desc">{{ translate('landing_page_paragraph_27') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-section {
  background: transparent;
  text-align: center;
}


.values-container {
  max-width: 1100px;
  margin: 0 auto;
}

.values-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1e1e1e;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .values-title {
    font-size: 3rem;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  .bottom-row {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
  }
}

.value-card {
  border-radius: 16px;
  padding: 2rem 1rem;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  height: 430px;
  box-sizing: border-box;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 90, 131, 0.15);
  background: transparent;
}

.icon-circle {
  background-color: #ffa41b;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
}

.value-card:hover .icon-circle {
  transform: scale(1.08);
}

.value-card.green .icon-circle {
  background-color: #a4cd39;
}

.icon {
  width: 60%;
  height: auto;
  object-fit: contain;
  display: block;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e1e1e;
  margin-top: 0.5rem;
}

.value-desc {
  font-size: 0.95rem;
  color: #6b7280;
  font-weight: 600;
  line-height: 1.6;
  max-width: 320px;
  margin: 0.5rem auto 0;
}
</style>
