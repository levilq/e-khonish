<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules'
import { globalTranslate as translate } from 'assets/js/language'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const testimonials = [
  {
    name: 'karimov_siyovush',
    position: 'biology_teacher',
    avatar: new URL('@/assets/images/karimov.webp', import.meta.url).href,
    quote: 'landing_page_paragraph_29'
  },
  {
    name: 'sharipov_saidmurod',
    position: 'mathematics_teacher',
    avatar: new URL('@/assets/images/sharipov.webp', import.meta.url).href,
    quote: 'landing_page_paragraph_30'
  },
  {
    name: 'yusupova_ashurmokh',
    position: 'primary_school_teacher',
    avatar: new URL('@/assets/images/yusupova.webp', import.meta.url).href,
    quote: 'landing_page_paragraph_31'
  },
  {
    name: 'darveshova_zulhija',
    position: 'school_director',
    avatar: new URL('@/assets/images/yorov.webp', import.meta.url).href,
    quote: 'landing_page_paragraph_32'
  },
  {
    name: 'abiev_suhrob',
    position: 'geography_teacher',
    avatar: new URL('@/assets/images/mijgona.webp', import.meta.url).href,
    quote: 'landing_page_paragraph_33'
  }
]
</script>

<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <div class="testimonials-wrapper">

        <div class="text-side">
          <h2 class="section-title">
            {{ translate('what_schools_say') }}
            <span class="highlight">{{ translate('about_platform') }}</span>
          </h2>
          <p class="section-desc">
            {{ translate('landing_page_paragraph_28') }}
          </p>
        </div>

        <div class="slider-side">
          <div class="testimonial-wrapper">

            <div class="testimonial-card">
              <ClientOnly>
                <Swiper
                    :modules="[Autoplay, Pagination, EffectFade, Navigation]"
                    :loop="true"
                    effect="fade"
                    :fadeEffect="{ crossFade: true }"
                    :speed="800"
                    :autoplay="{ delay: 5000, disableOnInteraction: false }"
                    :pagination="{ el: '.testimonial-pagination', clickable: true }"
                    :navigation="{
                    nextEl: '.testimonial-button-next',
                    prevEl: '.testimonial-button-prev'
                  }"
                    class="testimonial-swiper"
                >
                  <SwiperSlide v-for="(item, index) in testimonials" :key="index">
                    <div class="slide-content">
                      <div class="avatar-row">
                        <img :src="item.avatar" class="avatar" alt="avatar" />
                        <div class="info">
                          <h3 class="name">{{ translate(item.name) }}</h3>
                          <p class="position">{{ translate(item.position) }}</p>
                        </div>
                      </div>
                      <p class="quote">{{ translate(item.quote) }}</p>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div class="testimonial-nav">
                  <div class="testimonial-button-prev">‹</div>
                  <div class="testimonial-button-next">›</div>
                </div>
              </ClientOnly>
            </div>

            <div class="testimonial-pagination"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

.testimonials-section {
  padding: 4rem 0;
  width: 100%;
  overflow-x: hidden;
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.testimonials-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  align-items: center;
}

.text-side {
  width: 100%;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.highlight {
  color: #0077a3;
}

.section-desc {
  font-size: 0.9rem;
  max-width: 100%;
  color: #555;
  line-height: 1.6;
}

.slider-side {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.testimonial-wrapper {
  width: 100%;
  max-width: 100%;
}

.testimonial-card {
  background: #fff;
  border-radius: 16px;
  padding: 1.25rem;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 100%;
  height: 400px;
  overflow: hidden;
  box-sizing: border-box;
}

.testimonial-swiper {
  width: 100%;
  overflow: hidden;
}

.testimonial-swiper .swiper-wrapper {
  height: auto !important;
}

.testimonial-swiper .swiper-slide {
  height: auto !important;
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0 !important;
}

.testimonial-swiper .swiper-slide-active {
  position: relative !important;
  opacity: 1 !important;
}

.slide-content {
  padding: 0;
  width: 100%;
}

.avatar-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 0.75rem;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.info {
  flex: 1;
  min-width: 0;
}

.name {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
}

.position {
  font-size: 0.85rem;
  color: #777;
  margin: 0;
}

.quote {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #333;
  margin: 0;
  word-wrap: break-word;
  height: 200px;
}

.testimonial-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;
}

.testimonial-button-prev,
.testimonial-button-next {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0077a3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;
  font-size: 20px;
  flex-shrink: 0;
}

.testimonial-button-prev:hover,
.testimonial-button-next:hover {
  background: #005f82;
  transform: scale(1.05);
}

.testimonial-pagination {
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
}

.testimonial-pagination :deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #0077a3 !important;
  opacity: 0.4;
  margin: 0 4px !important;
}

.testimonial-pagination :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  transform: scale(1.2);
}

/* Tablet */
@media (min-width: 768px) {
  .testimonials-section {
    padding: 5rem 0;
  }

  .testimonials-container {
    padding: 0 1rem;
  }

  .testimonials-wrapper {
    gap: 3rem;
  }

  .section-title {
    font-size: 2rem;
    text-align: left;
  }

  .section-desc {
    font-size: 1rem;
    text-align: left;
    max-width: 520px;
  }

  .testimonial-card {
    padding: 1.5rem 2rem;
  }

  .testimonial-wrapper {
    max-width: 560px;
  }

  .avatar {
    width: 48px;
    height: 48px;
  }

  .name {
    font-size: 1.1rem;
  }

  .position {
    font-size: 0.9rem;
  }

  .quote {
    font-size: 0.95rem;
    line-height: 1.55;
  }

  .testimonial-button-prev,
  .testimonial-button-next {
    width: 40px;
    height: 40px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .testimonials-section {
    padding: 6rem 0;
  }

  .testimonials-container {
    padding: 0 1rem;
  }

  .testimonials-wrapper {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

/* Mobile specific fixes */
@media (max-width: 767px) {
  .testimonials-section {
    padding: 3rem 0;
  }

  .testimonials-container {
    padding: 0;

  }

  .section-title {
    text-align: center;
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  .section-desc {
    text-align: center;
    margin: 0 auto;
    padding: 0 0.5rem;
    font-size: 0.85rem;
  }

  .testimonial-card {
    padding: 1rem;
    margin: 0;
    height: 400px;
  }

  .quote {
    font-size: 0.8rem;
    line-height: 1.4;
    height: 260px;
  }

  .testimonial-nav {
    padding: 0;
  }

  .testimonial-button-prev,
  .testimonial-button-next {
    width: 34px;
    height: 34px;
    font-size: 18px;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }

  .name {
    font-size: 0.95rem;
  }

  .position {
    font-size: 0.8rem;
  }
}
</style>