<template>
  <section class="py-8 px-4 ">
    <div class="max-w-6xl mx-auto text-center font-medium">
      <h2 class="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-12">
        {{ t("our_values") }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-6 md:mt-20">
        <!-- First three values -->
        <div
            class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
          <div class="flex flex-col items-center text-center max-w-sm mx-auto ">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
              <img src="/images/svg/growth.svg" alt="" class="w-9 h-9"/>
            </div>
            <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
              {{ t("growth") }}
            </h3>
            <p class="text-gray-500 text-sm leading-6" style="font-weight: 700;">
              {{ t("landing_page_paragraph_23") }}
            </p>
          </div>
        </div>

        <div
            class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
          <div class="flex flex-col items-center text-center max-w-sm mx-auto">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
              <img src="/images/svg/availability2.svg" alt="" class="w-9 h-9"/>
            </div>
            <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
              {{ t("availability") }}
            </h3>
            <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700;">
              {{ t("landing_page_paragraph_24") }}
            </p>
          </div>
        </div>



        <div
            class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">

          <div class="flex flex-col items-center text-center max-w-sm mx-auto">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
              <img src="/images/svg/innovation.svg" alt="" class="w-9 h-9"/>
            </div>
            <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
              {{ t("innovations") }}
            </h3>
            <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700;">
              {{ t("landing_page_paragraph_25") }}
            </p>
          </div>
        </div>


        <!-- Last two values centered in a row -->

        <div class="md:col-span-3 flex flex-col md:flex-row justify-center gap-x-6 gap-y-16">
          <div
              class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">

            <div class="flex flex-col items-center text-center max-w-sm mx-auto">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#A4CD39] transition-transform duration-200 group-hover:scale-110">
                <img src="/images/svg/safety.svg" alt="" class="w-9 h-9"/>
              </div>
              <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
                {{ t("safety") }}
              </h3>
              <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700";>
                {{ t("landing_page_paragraph_266") }}
              </p>
            </div>
          </div>
          <div
              class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
            <div class="flex flex-col items-center text-center max-w-sm mx-auto">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
                <img src="/images/svg/partnership.svg" alt="" class="w-9 h-9"/>
              </div>
              <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
                {{ t("partnership") }}
              </h3>
              <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700;">
                {{ t("landing_page_paragraph_27") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { globalTranslate as t } from 'assets/js/language'
</script>

