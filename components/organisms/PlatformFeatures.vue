<template>
  <section class="py-9 px-4">
    <div class="grid gap-6 md:grid-cols-3 font-bold">
      <!-- Card 1 -->
      <div class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-1.svg" alt="icon 1" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('landing_page_paragraph_8')}}
        </p>
      </div>

      <!-- Card 2 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-2.svg" alt="icon 2" class="w-9 h-9"/>
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
            {{t('landing_page_paragraph_9')}}
        </p>
      </div>

      <!-- Card 3 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-3.svg" alt="icon 3" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('landing_page_paragraph_10')}}
        </p>
      </div>

      <!-- Card 4 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-4.svg" alt="icon 4" class="w-9 h-9"/>
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('landing_page_paragraph_11')}}
        </p>
      </div>

      <!-- Card 5 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-5.svg" alt="icon 5" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('landing_page_paragraph_12')}}
        </p>
      </div>

      <!-- Card 6 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-6.svg" alt="icon 6" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('landing_page_paragraph_13')}}
        </p>
      </div>
    </div>

  </section>
</template>

<script setup>
import { globalTranslate as t } from 'assets/js/language'

</script>
