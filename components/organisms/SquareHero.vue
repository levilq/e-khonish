<template>
  <section class="flex flex-col gap-y-6 relative mt-10 px-4">
    <!-- Top Row -->
    <div class="pt-12 flex flex-col md:flex-row justify-between items-center">
      <h2 class="text-center text-3xl sm:text-4xl md:text-4xl font-bold text-[#1E1E1E] md:text-left mb-6 md:mb-0">
        {{ t('for_who') }} <br />
        <span class="text-[#0077A3]">{{ t('platform') }}?</span>
      </h2>
      <img
          src="/images/svg/swirly-arrow.svg"
          alt="arrow"
          class="hidden md:block absolute top-[-100px] right-[50px] w-[250px]"
      />
    </div>

    <!-- Top Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-[170px]">
      <!-- Schools -->
      <div class="relative bg-[url('/images/svg/schools.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[250px] p-6 mx-auto">
        <div class="absolute -top-4 left-3 z-30">
          <div class="bg-white uppercase text-[#FFA41B] font-bold text-[18px] sm:text-[20px] px-6 py-2 rounded-full shadow-xl">
            {{ t('schools') }}
          </div>

        </div>
        <img src="/images/svg/school-icon.svg" class="absolute top-4 right-4 w-[100px] h-[100px] opacity-60" alt="school icon" />
        <div class="text-[#1E1E1E] text-[14px] font-bold leading-[1.5] mt-6 max-w-[290px] md:max-w-[300px] absolute">
          <p>{{ t('landing_page_paragraph_1') }}</p>
          <p class="mt-2">{{ t('landing_page_paragraph_2') }}</p>
        </div>
      </div>

      <!-- Girl Card -->
      <div class="relative bg-[url('/images/svg/girl-box.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[250px] p-[9px] flex items-end justify-center mx-auto mt-[80px] md:mt-0">
        <img src="/images/webp/girl_book.webp" class="relative bottom-6 md:bottom-3 w-[375px]" alt="girlBook" />
      </div>

      <!-- Teachers -->
      <div class="relative bg-[url('/images/svg/instructors.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[250px] p-6 mx-auto">
        <div class="absolute -top-4 right-3 z-30">
          <div class="bg-white uppercase text-[#085b80] font-bold text-[14px] sm:text-[20px] px-6 sm:px-9 py-2 rounded-full shadow-xl">
            {{ t('teachers') }}
          </div>
        </div>
        <img src="/images/svg/teacher-icon.svg" class="absolute top-4  w-[100px] h-[100px] opacity-60" alt="teacher icon" />
        <div class="text-white text-[14px]  font-bold leading-[1.5] mt-7 max-w-[290px] md:max-w-[310px] absolute">
          <p>{{ t('landing_page_paragraph_3') }}</p>
          <p class="mt-2">{{ t('landing_page_paragraph_4') }}</p>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-4 relative bottom-7 md:bottom-0">
      <!-- Parents (Desktop) -->
      <div class="relative bg-[url('/images/svg/parents-box.svg')] bg-no-repeat bg-contain w-full max-w-[552px] h-[156px] p-6 hidden md:flex mx-auto">
        <div class="absolute -top-4 right-10 z-30">
          <div class="bg-white uppercase text-[#00B8E7] font-bold text-[20px] px-5 py-2 rounded-full shadow-xl">
            {{ t('parents') }}
          </div>
        </div>
        <img src="/images/svg/parents-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="parents icon" />
        <div class="text-white text-[14px]  font-semibold leading-[1.5] mt-4 max-w-[450px] absolute">
          <p>{{ t('landing_page_paragraph_5') }}</p>
        </div>
      </div>

      <!-- Parents (Mobile) -->
      <div class="relative bg-[url('/images/svg/parents-sm.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[156px] p-6 flex md:hidden mx-auto">
        <div class="absolute -top-4 right-[12px] z-30">
          <div class="bg-white uppercase text-[#00B8E7] font-bold text-[12px] px-7 py-3 rounded-full shadow-xl">
            {{ t('parents') }}
          </div>
        </div>
        <img src="/images/svg/parents-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="parents icon" />
        <div class="text-white text-[12px] font-bold leading-[1.5] mt-3 max-w-[290px] absolute">
          <p>{{ t('landing_page_paragraph_5') }}</p>
        </div>
      </div>

      <!-- Government (Desktop) -->
      <div class="relative bg-[url('/images/svg/gos.svg')] bg-no-repeat bg-contain w-full max-w-[552px] h-[156px] p-6 hidden md:flex mx-auto">
        <div class="absolute bottom-1 right-3 z-30">
          <div class="bg-white uppercase text-black font-bold text-[20px] px-6 py-2 rounded-full shadow-xl">
            {{ t('government_institutions') }}
          </div>
        </div>
        <img src="/images/svg/gos-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="gos icon" />
        <div class="text-black text-[14px]  font-bold leading-[1.5] max-w-[504px] absolute top-7">
          <p>{{ t('landing_page_paragraph_6') }}</p>
        </div>
      </div>

      <!-- Government (Mobile) -->
      <div class="relative bg-[url('/images/svg/gos-sm.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[156px] p-6 flex md:hidden mx-auto">
        <div class="absolute bottom-4 right-[5px] z-30">
          <div class="bg-white uppercase text-black font-bold text-[12px] px-6 py-2 rounded-full shadow-xl">
            {{ t('government_institutions') }}
          </div>
        </div>
        <img src="/images/svg/gos-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="gos icon" />
        <div class="text-black text-[12px] font-bold leading-[1.5]  max-w-[300px] absolute">
          <p>{{ t('landing_page_paragraph_6') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {globalTranslate as t} from "assets/js/language.js";
</script>
