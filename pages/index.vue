<script setup lang="ts">
import { globalTranslate as translate } from 'assets/js/language'
const baseURL = useRuntimeConfig().public.baseURL

</script>

<template>
  <div class="index-wrapper">
    <div class="main-section">
      <div class="container">
        <div class="grid-wrapper">

          <div class="animated">
            <OrganismsAnimatedSq />
          </div>

          <div class="text-side">
            <h1 class="title">E-KHONISH</h1>

            <div class="stars">
              <div class="stars-inner">
                <div style="margin-top: 10px">
                  <span>*</span><span>*</span><span>*</span>
                </div>
                <p>{{ translate('smart') }}</p>
              </div>
            </div>

            <div class="subtext-desktop">
              <p>{{ translate('digital_platform') }}</p>
              <p style="margin-top: -2rem">{{ translate('for_school') }}</p>
            </div>

            <div class="subtext-mobile">
              <p>
                {{ translate('digital_platform') }} {{ translate('for_school') }}
              </p>
            </div>

            <img src="/images/svg/underline.svg" alt="underline" class="underline" />

            <p class="description">
              {{ translate('landing_page_paragraph_1') }}
            </p>


            <nuxt-link :to="`${baseURL}/authentication`" >
              <button class="try-btn">
                {{ translate('let_try') }}
                <span class="arrow">→</span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <OrganismsSquareHero />

    <section id="features">
      <OrganismsPurposeSection />
      <OrganismsPlatformFeatures />
    </section>

    <section id="capabilities">
      <OrganismsPlatforCapabilities />
    </section>

    <section id="about">
      <OrganismsAbout />
      <OrganismsAvailabilityStats />
      <OrganismsOurValues />
      <OrganismsTestimonialsSlider />
    </section>

    <section id="contacts">
      <OrganismsContactSection />
    </section>

    <OrganismsSupportedBy class="mt-section" />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
section[id] {
  scroll-margin-top: 80px;
}

.index-wrapper {
  width: 100%;
  margin-top: 3rem;
  padding: 3rem 0;
}

.container {
  max-width: 1128px;
  margin: 0 auto;
  /* Responsive padding */
  padding: 0 10px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 25px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 16px;
  }
}

.grid-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "animated"
    "text";
  gap: 45px;
  align-items: start;
}


@media (min-width: 1024px) {
  .grid-wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text animated";
    align-items: center;
    column-gap: 60px;
  }

  .text-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 640px;
  }

  .animated {
    min-height: 640px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.text-side {
  grid-area: text;
  max-width: 552px;
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 768px) {
  .text-side {
    text-align: left;
  }
}

.animated {
  grid-area: animated;
  display: flex;
  justify-content: center;
}


.title {
  font-family: "Montserrat", sans-serif;
  color: #005b88;
  margin-top: 2.5rem;
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
}
@media (min-width: 768px) {
  .title {
    font-size: 64px;
    margin-top: 0;
  }
}

.stars {
  display: flex;
  margin-top: -1.5rem;
  justify-content: center;
}
@media (min-width: 768px) {
  .stars {
    justify-content: flex-start;
    margin-top: -4rem;
  }
}

.stars-inner {
  display: flex;
  gap: 1rem;
  color: #ff9900;
  font-size: 80px;
  font-weight: bold;
  align-items: center;
}
.stars-inner p {
  font-size: 40px;
  color: #000;
  margin-top: -2.5rem;
  display: none;
}
@media (min-width: 768px) {
  .stars-inner {
    font-size: 140px;
  }
  .stars-inner p {
    display: flex;
  }
}

.subtext-desktop {
  font-size: 40px;
  font-weight: bold;
  color: #000;
  margin-top: -7rem;
  display: none;
}
@media (min-width: 768px) {
  .subtext-desktop {
    display: block;
  }
}

.subtext-mobile {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  line-height: 1.3;
  margin-top: 0.5rem;
  display: block;
}
@media (min-width: 768px) {
  .subtext-mobile {
    display: none;
  }
}

.underline {
  width: 300px;
  margin: 1rem auto;
  display: block;
}
@media (min-width: 768px) {
  .underline {
    margin-left: -65px;
  }
}

.description {
  font-size: 18px;
  color: #222;
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 768px) {
  .description {
    text-align: left;
  }
}

.green-curve {
  position: absolute;
  left: 480px;
  bottom: 10rem;
  width: 180px;
  display: none;
}
@media (min-width: 768px) {
  .green-curve {
    display: flex;
  }
}

.try-btn {
  background: #005b88;
  color: white;
  padding: 10px 24px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
  margin: 1rem auto 0;
  margin-top: 80px;
}
@media (min-width: 768px) {
  .try-btn {
    margin-left: 0;
  }
}
.try-btn:hover {
  background: #00466a;
}
.arrow {
  font-size: 22px;
  margin-top: 2px;
}

.mt-section {
  margin-top: 4rem;
}

/* Mobile optimizations */
@media (max-width: 767px) {
  .index-wrapper {
    width: 100%;
    margin-top: 0;
    padding: 2rem 0;
    overflow-x: hidden;
  }

  .grid-wrapper {
    gap: 30px;
  }

  .animated {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .text-side {
    padding: 0;
    max-width: 100%;
  }

  .title {
    font-size: 1.75rem;
    margin-top: 1rem;
  }

  .stars {
    margin-top: -0.75rem;
  }

  .stars-inner {
    font-size: 60px;
    gap: 0.5rem;
  }

  .subtext-mobile {
    font-size: 20px;
    margin-top: 0.25rem;
  }

  .underline {
    width: 200px;
    margin: 0.75rem auto;
  }

  .description {
    font-size: 15px;
    max-width: 100%;
    line-height: 1.5;
  }

  .try-btn {
    margin-top: 30px;
    font-size: 13px;
    padding: 8px 20px;
  }

  .mt-section {
    margin-top: 2rem;
  }
}

/* Remove section padding - components handle their own */
section {
  padding: 0;
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .title {
    font-size: 48px;
  }

  .stars-inner {
    font-size: 100px;
  }

  .subtext-desktop {
    font-size: 32px;
  }

  .description {
    font-size: 16px;
  }
}
</style>