<template>
  <section class="flex py-8 px-4">
    <div class="mx-auto justify-between space-x-3 grid grid-cols-1 md:grid-cols-2">

      <!-- LEFT TEXT BLOCK -->
      <div class="w-[350px] md:w-[500px] pb-7 mx-auto">
        <h2 class="text-2xl md:text-4xl font-bold text-[#1E1E1E] mb-4 text-left">
          {{ t("what_schools_say") }}
          <span class="text-[#0077A3]">{{ t("about_platform") }}</span>
        </h2>

        <p class="text-left pr-5 md:pr-0">
          {{ t("landing_page_paragraph_28") }}
        </p>
      </div>

      <!-- SLIDER -->
      <div class="relative">
        <ClientOnly>
          <Swiper
              :modules="[Autoplay, Pagination, Navigation]"
              :loop="true"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :pagination="{ clickable: true }"
              :navigation="{ prevEl: '.custom-prev', nextEl: '.custom-next' }"
              class="w-full relative pb-16"
          >
            <SwiperSlide v-for="(item, index) in testimonials" :key="index">
              <div class="bg-[#f8fafc] rounded-xl p-6 max-w-xl mx-auto h-[470px] md:h-[330px] flex flex-col">

              <div class="flex items-center gap-4 mb-4">
                  <img
                      :src="item.avatar"
                      class="w-12 h-12 rounded-full object-cover"
                      alt="avatar"
                  />
                  <div class="text-left">
                    <h3 class="text-lg font-semibold text-[#1E1E1E]">
                      {{ t(item.name) }}
                    </h3>
                    <p class="text-sm text-gray-400">
                      {{ t(item.position) }}
                    </p>
                  </div>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed text-left">
                  {{ t(item.quote) }}
                </p>
              </div>
            </SwiperSlide>

            <div class="swiper-pagination mt-4" />
          </Swiper>
        </ClientOnly>

        <!-- Custom navigation arrows BELOW slider -->
        <div class="absolute z-40 bottom-4 px-4 left-0 right-0 flex justify-between items-center gap-6">
          <button class="custom-prev custom-arrow"></button>
          <button class="custom-next custom-arrow"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { globalTranslate as t } from "assets/js/language";

const testimonials = [
  {
    name: "karimov_siyovush",
    position: "biology_teacher",
    avatar: new URL("@/assets/images/karimov.png", import.meta.url).href,
    quote: "landing_page_paragraph_29",
  },
  {
    name: "sharipov_saidmurod",
    position: "mathematics_teacher",
    avatar: new URL("@/assets/images/sharipov.png", import.meta.url).href,
    quote: "landing_page_paragraph_30",
  },
  {
    name: "yusupova_ashurmokh",
    position: "primary_school_teacher",
    avatar: new URL("@/assets/images/yusupova.png", import.meta.url).href,
    quote: "landing_page_paragraph_31",
  },
  {
    name: "darveshova_zulhija",
    position: "school_director",
    avatar: new URL("@/assets/images/yorov.png", import.meta.url).href,
    quote: "landing_page_paragraph_32",
  },
  {
    name: "abiev_suhrob",
    position: "geography_teacher",
    avatar: new URL("@/assets/images/mijgona.png", import.meta.url).href,
    quote: "landing_page_paragraph_33",
  },
];
</script>

<style scoped>
/* Custom arrow buttons */
:deep(.custom-arrow) {
  width: 34px;
  height: 34px;
  background: white;
  border: 1px solid #dce2e8;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0077a3;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

/* Icons inside buttons */
:deep(.custom-prev::after) {
  content: "<";
  font-size: 14px;
  font-weight: bold;
  margin-left: -2px;
}

:deep(.custom-next::after) {
  content: ">";
  font-size: 14px;
  font-weight: bold;
  margin-right: -2px;
}

/* Hover effect */
:deep(.custom-arrow:hover) {
  background: #f3f5f7;
  color: #005f82;
}
</style>
