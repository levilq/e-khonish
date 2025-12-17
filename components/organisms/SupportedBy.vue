<script setup lang="ts">
import { globalTranslate as translateFn } from 'assets/js/language'

const translate = (...args: any[]) => translateFn(...args)
</script>

<template>
  <section class="support-section">
    <h2 class="support-title">{{ translate('supported_by') }}</h2>

    <div class="support-row">
      <div class="support-item">
        <img src="/images/webp/tjk-gerb.webp" alt="Hukumat" class="support-logo" />
        <p class="support-text">{{ translate('khatlon_authorities') }}</p>
      </div>

      <div class="support-item">
        <img src="/images/webp/tjk-gerb.webp" alt="Education" class="support-logo" />
        <p class="support-text">{{ translate('regional_public_formation') }}</p>
      </div>

      <div class="support-item">
        <img src="/images/webp/aict.webp" alt="Agency" class="support-logo" />
        <p class="support-text">{{ translate('agency_of_education') }}</p>
      </div>

      <div class="support-item">
        <img src="/images/webp/jurat.webp" alt="Jurat" class="support-logo wide" />
        <p class="support-text">{{ translate('jurat') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.support-section {
  padding: 80px 20px;
  text-align: center;
}

.support-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: #004F7C;
  margin-bottom: 64px;
}
@media (min-width: 768px) {
  .support-title {
    font-size: 40px;
  }
}


.support-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 80px;
  padding: 0 10px;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .support-row {
    flex-wrap: wrap;
    gap: 40px;
  }
}


.support-item {
  flex: 0 0 auto;
  text-align: center;
  max-width: 260px;
}


.support-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 16px;
  transition: transform 0.3s ease;
}

.support-logo:hover {
  transform: scale(1.05);
}

.support-logo.wide {
  width: 120px;
  height: 80px;
}

.support-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #004F7C;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .support-text {
    font-size: 17px;
  }
}
</style>
