<script setup lang="ts">
import { globalTranslate as translate } from 'assets/js/language'
</script>

<template>
  <section class="why-ekhonish-section">
    <img
        src="/images/svg/arrow-green.svg"
        alt="arrow"
        class="arrow-img"
    />

    <h2 class="title">
      {{ translate('why') }}
      <span class="highlight">E-KHONISH ?</span>
    </h2>


    <div class="description-box">
      {{ translate('landing_page_paragraph_7') }}
    </div>
  </section>
</template>

<style scoped>
.why-ekhonish-section {
  position: relative;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow-img {
  display: none;
  position: absolute;
  top: -1rem;
  left: 220px;
  width: 105px;
}

@media (min-width: 768px) {
  .arrow-img {
    display: block;
  }
}
@media (min-width: 1024px) {
  .arrow-img {
    width: 108px;
  }
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #005A83;
  margin-top: 4rem;
  line-height: 1.3;
}

@media (min-width: 768px) {
  .title {
    font-size: 28px;
  }
}
@media (min-width: 1024px) {
  .title {
    font-size: 48px;
  }
}


.highlight {
  font-weight: 800;
  color: #005A83;
  font-family: 'Montserrat', sans-serif;
}

.description-box {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  border: 2px solid #005A83;
  border-radius: 12px;
  font-weight: 700;
  max-width: 920px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  line-height: 1.6;
  color: #1E1E1E;
}

@media (min-width: 768px) {
  .description-box {
    font-size: 16px;
  }
}
</style>
