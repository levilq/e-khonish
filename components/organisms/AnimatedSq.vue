<script setup lang="ts">
import { ref } from 'vue'
const { t } = useI18n({ useScope: 'local' })
const showVideo = ref(false)

function playVideo() {
  showVideo.value = true
}
function closeVideo() {
  showVideo.value = false
}
</script>

<template>
  <div class="relative mt-8 md:mt-0 lg:order-2 mx-auto w-fit">
    <!-- Grid -->
    <div
        class="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-0 transition-all duration-700 ease-in-out"
    >
      <!-- Conditional: Expanded Video Block -->
      <div
          v-if="showVideo"
          class="absolute z-40 w-[450px] h-[300px] md:w-[450px] md:h-[300px] bg-gradient-to-br from-[#FFA41B] to-[#B8E986] rounded-[40px] p-4 flex flex-col items-end justify-center shadow-xl transition-all duration-700 ease-in-out"
          style="grid-column: 1 / span 3; grid-row: 1 / span 2;"
      >
        <button
            class="text-white text-xl font-bold absolute top-3 right-4"
            @click="closeVideo"
        >
          ✕
        </button>
        <video
            class="rounded-xl w-full h-full object-cover"
            controls
            autoplay
        >
          <source src="https://www.youtube.com/watch?v=nrW7RrW_H2I&t=8s" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Normal Grid Content -->
      <template v-else>
        <!-- Top Left: Play Button -->
        <div
            class="w-[150px] h-[150px] bg-gradient-to-br from-[#FFA41B] to-[#B8E986] rounded-tr-[100px] flex items-center justify-center cursor-pointer transition-all duration-500"
            @click="playVideo"
        >
          <img src="/images/svg/play.svg" alt="Play icon" class="w-[40px] h-[40px]" />
        </div>

        <!-- Always visible -->
        <div class="w-[150px] h-[150px] bg-[#004F7C] rounded-br-[100px]"></div>

        <!-- Digitalization -->
        <div class="capitalize w-[150px] h-[150px] bg-[#B9F250] rounded-tl-[100px] flex-col items-center justify-center p-2 text-sm font-bold text-[#003049] hidden md:flex">
          <img src="/images/svg/flower.svg" alt="Цифровизация" class="w-[70px] h-[70px] mb-2" />
          {{ t('digitalization') }}
        </div>

        <!-- Platform preview -->
        <div class="w-[300px] h-[150px] col-span-2 md:col-span-2 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
          <img src="/images/png/platform-preview.png" alt="Platform" class="object-cover w-full h-full" />
        </div>

        <!-- Innovation -->
        <div class="capitalize w-[150px] h-[150px] bg-gradient-to-br from-[#00CFFF] to-[#006080] rounded-bl-[100px] flex-col items-center justify-center p-2 text-white text-sm font-bold hidden md:flex">
          <img src="/images/svg/lightbulb.svg" alt="Инновации" class="w-[70px] h-[70px] mb-2" />
          {{ t('innovation') }}
        </div>

        <!-- Bottom left -->
        <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#B8E986] to-[#FFA41B] rounded-bl-[100px]"></div>

        <!-- Transformation -->
        <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#C8F26D] to-[#FFA41B] rounded-tr-[80px] rounded-bl-[80px] relative flex items-center justify-center text-white text-sm font-bold">
          <span class="text-center capitalize">{{ t('transformation') }}</span>
          <div class="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-white flex items-center justify-center">
            <img src="/images/svg/arrow.svg" class="w-4 h-4" alt="arrow" />
          </div>
        </div>

        <!-- Girl image -->
        <div class="w-[150px] h-[150px] rounded-full overflow-hidden hidden md:block">
          <img src="/images/png/girl.png" alt="girl" class="object-cover w-full h-full" />
        </div>
      </template>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "digitalization": "digitalization",
    "innovation": "innovation",
    "transformation": "transformation"
  },
  "ru": {
    "digitalization": "Цифровизация",
    "innovation": "Инновации",
    "transformation": "Трансформация"
  },
  "tj": {
    "digitalization": "Рақамизатсия",
    "innovation": "Навоварй",
    "transformation": "Трансформатсия"
  }
}
</i18n>
