<template>
  <section class="py-10 flex flex-col items-center ">
    <h2 class="text-2xl md:text-4xl font-bold text-[#004F7C] mb-16 text-center">
      {{ t('supported_by') }}
    </h2>

    <div class="flex flex-wrap justify-center gap-6 sm:gap-10">
      <!-- Item 1 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[280px]">
        <img src="/images/webp/tjk-gerb.webp" alt="Hukumat" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug px-4">
          {{ t('khatlon_authorities') }}
        </p>
      </div>

      <!-- Item 2 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[180px]">
        <img src="/images/webp/tjk-gerb.webp" alt="Education" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{ t('regional_public_formation') }}
        </p>
      </div>

      <!-- Item 3 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[180px]">
        <img src="/images/webp/aict.webp" alt="Agency" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{ t('agency_of_education') }}
        </p>
      </div>

      <!-- Item 4 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[180px]">
        <img src="/images/webp/jurat.webp" alt="Jurat" class="w-[120px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{ t('jurat') }}
        </p>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { globalTranslate as translateFn } from 'assets/js/language'

const t = (...args: any[]) => translateFn(...args)</script>
<style scoped>
</style>
