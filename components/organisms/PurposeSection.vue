<template>
  <section class="relative px-4 md:py-12 text-center flex flex-col items-center">
    <!-- Green Arrow -->
    <img
        src="/images/svg/arrow-green.svg"
        alt="arrow"
        class="hidden md:block absolute -top-4 left-[220px] w-[105px] lg:w-[108px]"
    />

    <!-- Heading -->
    <h2 class="text-[24px] md:text-[28px] lg:text-[48px] font-bold text-[#005A83] mt-16 ">
      {{t('why')}} <span class="text-[#005A83] font-extrabold" style="font-family: 'Montserrat', sans-serif;">E-KHONISH?</span>s
    </h2>

    <!-- Description Box -->
    <div class="mt-6 px-4 py-4  border-2 border-[#005A83] rounded-xl font-bold max-w-[920px]  shadow-sm text-[14px] md:text-[16px] leading-relaxed text-[#1E1E1E]">
      {{t('landing_page_paragraph_7')}}
    </div>
  </section>
</template>

<script setup>
import { globalTranslate as t } from 'assets/js/language'

</script>
