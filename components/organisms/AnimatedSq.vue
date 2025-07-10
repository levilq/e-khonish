<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const { t } = useI18n({ useScope: 'local' })

const showVideo = ref(false)
const showImage = ref(false)
const showTransformation = ref(false)
const windowWidth = ref(1024)
const currentImageIndex = ref(0)
let interval: NodeJS.Timeout

function startSlider() {
  interval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % 3
  }, 3000)
}
function stopSlider() {
  clearInterval(interval)
}
function playVideo() {
  showVideo.value = true
}
function closeVideo() {
  showVideo.value = false
}
function expandImage() {
  showImage.value = true
  startSlider()
}
function closeImage() {
  showImage.value = false
  stopSlider()
}
function toggleTransformation() {
  showTransformation.value = !showTransformation.value
}
const handleResize = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth
  }
}
onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize)
  }
})
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', handleResize)
    stopSlider()
  }
})
</script>

<template>
  <div class="relative mt-8 md:mt-0 lg:order-2 mx-auto w-fit">
    <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-0">
      <!-- Play Button -->
      <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#FFA41B] to-[#B8E986] rounded-tr-[100px] flex items-center justify-center cursor-pointer z-10"
           @click="playVideo">
        <img src="/images/svg/play.svg" alt="Play icon" class="w-[40px] h-[40px]" />
      </div>

      <div class="w-[150px] h-[150px] bg-[#004F7C] rounded-br-[100px]"></div>

      <!-- Digitalization -->
      <div class="capitalize w-[150px] h-[150px] bg-[#B9F250] rounded-tl-[100px] hidden md:flex flex-col items-center justify-center p-2 text-sm font-bold text-[#003049]">
        <img src="/images/svg/flower.svg" alt="Цифровизация" class="w-[70px] h-[70px] mb-2" />
        {{ t('digitalization') }}
      </div>

      <!-- Image with arrow -->
      <div class="w-[300px] h-[150px] col-span-2 md:col-span-2 rounded-tl-[100px] rounded-br-[100px] overflow-hidden cursor-pointer relative"
           @click="expandImage">
        <div class="absolute mt-[100px] ml-2 w-10 h-10 rounded-full border border-white flex items-center justify-center z-10">
          <img src="/images/svg/arrow.svg" class="w-4 h-4" alt="arrow" />
        </div>
        <img src="/images/png/platform-preview.png" alt="Platform" class="object-cover w-full h-full" />
      </div>

      <!-- Innovation -->
      <div class="capitalize w-[150px] h-[150px] bg-gradient-to-br from-[#00CFFF] to-[#006080] rounded-bl-[100px] hidden md:flex flex-col items-center justify-center p-2 text-white text-sm font-bold">
        <img src="/images/svg/lightbulb.svg" alt="Инновации" class="w-[70px] h-[70px] mb-2" />
        {{ t('innovation') }}
      </div>

      <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#B8E986] to-[#FFA41B] rounded-bl-[100px]"></div>

      <!-- Transformation Block (Clickable) -->
      <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#C8F26D] to-[#FFA41B] rounded-tr-[80px] rounded-bl-[80px] relative flex items-center justify-center text-white text-sm font-bold cursor-pointer"
           @click="toggleTransformation">
        <span class="text-center capitalize">{{ t('transformation') }}</span>
        <div class="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-white flex items-center justify-center">
          <img src="/images/svg/arrow.svg" class="w-4 h-4" alt="arrow" />
        </div>
      </div>

      <div class="w-[150px] h-[150px] rounded-full overflow-hidden hidden md:block">
        <img src="/images/png/girl.png" alt="girl" class="object-cover w-full h-full" />
      </div>

      <!-- Video Overlay -->
      <Transition name="video-expand">
        <div v-if="showVideo"
             class="absolute z-50 rounded-[40px] p-4 flex flex-col items-end justify-center shadow-xl"
             :style="{
              width: windowWidth >= 640 ? '450px' : '300px',
              height: windowWidth >= 640 ? '300px' : '300px',
              top: '0',
              left: '0',
              backgroundImage: 'linear-gradient(to bottom right, #FFA41B, #B8E986)'
             }">
          <button class="text-[#006080] text-xl font-bold absolute top-3 left-4 cursor-pointer" @click="closeVideo">✕</button>
          <iframe class="rounded-xl w-full h-full p-6"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameborder="0"
                  allowfullscreen></iframe>
        </div>
      </Transition>

      <!-- Image Slider Overlay -->
      <Transition name="image-expand">
        <div v-if="showImage"
             class="absolute z-40 rounded-tl-[70px] rounded-br-[70px] overflow-hidden shadow-xl bg-gradient-to-br from-[#00CFFF] to-[#006080]"
             :style="{
              width: windowWidth >= 640 ? '300px' : '300px',
              height: windowWidth >= 640 ? '300px' : '300px',
              top: '0',
              left: '0'
             }">
          <Transition name="fade" mode="out-in">
            <template v-if="currentImageIndex === 0">
              <img src="/images/png/slider-1.png" class="object-cover w-full h-full" alt="slide-1" />
            </template>
            <template v-else-if="currentImageIndex === 1">
              <img src="/images/png/slider-2.png" class="object-cover w-full h-full" alt="slide-2" />
            </template>
            <template v-else>
              <img src="/images/png/slider-3.png" class="object-cover w-full h-full" alt="slide-3" />
            </template>
          </Transition>
          <button class="absolute top-5 left-7 text-xl font-bold text-white" @click="closeImage">✕</button>
        </div>
      </Transition>

      <!-- Transformation Overlay -->
      <Transition name="slide-in">
        <div v-if="showTransformation"
             class="absolute z-50 bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#C8F26D] to-[#FFA41B] rounded-[40px] shadow-xl p-6 flex flex-col justify-between">
          <button class="text-white text-xl font-bold absolute top-3 left-4" @click="toggleTransformation">✕</button>
          <p class="text-sm text-[#004F7C] font-semibold leading-relaxed mt-10">
              {{t('transfer_education')}}
          </p>
          <div class="self-end w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer" @click="toggleTransformation">
            <img src="/images/svg/arrow.svg" class="w-4 h-4" alt="arrow" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.video-expand-enter-active,
.video-expand-leave-active {
  transition: all 0.7s ease-in-out;
  transform-origin: top left;
}
.video-expand-enter-from,
.video-expand-leave-to {
  opacity: 0;
  transform: scale(0);
}
.video-expand-enter-to,
.video-expand-leave-from {
  opacity: 1;
  transform: scale(1);
}

.image-expand-enter-active,
.image-expand-leave-active {
  transition: all 0.6s ease-in-out;
  transform-origin: bottom left;
}
.image-expand-enter-from,
.image-expand-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.image-expand-enter-to,
.image-expand-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Slide-in for transformation block */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.5s ease-in-out;
  transform-origin: bottom right;
}
.slide-in-enter-from,
.slide-in-leave-to{
  opacity: 0;
  transform: scale(0);
}
.slide-in-enter-to,
.slide-in-leave-from{
  opacity: 1;
  transform: scale(1);
}
</style>
<i18n lang="json">
{
  "en": {
    "digitalization": "digitalization",
    "innovation": "innovation",
    "transformation": "transformation",
    "transfer_education": "e-Khonish is transforming the education system of Tajikistan by leveraging innovation, providing interactive learning and support to students and teachers, preparing them for the digital age."
  },
  "ru": {
    "digitalization": "Цифровизация",
    "innovation": "Инновации",
    "transformation": "Трансформация",
    "transfer_education": "e-Khonish трансформирует систему образования Таджикистана, используя инновации, предоставляя интерактивное обучение и поддержку учащимся и учителям, готовя их к цифровой эпохе."
  },
  "tj": {
    "digitalization": "Рақамизатсия",
    "innovation": "Навоварй",
    "transformation": "Трансформатсия",
    "transfer_education": "e-Khonish системаи маорифи Тоҷикистонро тавассути инноватсия табдил дода, омӯзиши интерактивӣ ва дастгирӣ ба донишҷӯён ва омӯзгоронро пешкаш намуда, онҳоро ба асри рақамӣ омода месозад"

  }
}
</i18n>