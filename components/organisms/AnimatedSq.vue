<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { globalTranslate as translate } from 'assets/js/language'

const showVideo = ref(false)
const showImage = ref(false)
const showTransformation = ref(false)
const windowWidth = ref(1024)
const currentImageIndex = ref(0)


const showVideoMobile = ref(false)
const showImageMobile = ref(false)
const showTransformationMobile = ref(false)
const currentImageIndexMobile = ref(0)

let interval: NodeJS.Timeout
let intervalMobile: NodeJS.Timeout

function startSlider() {
  interval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % 3
  }, 3000)
}

function stopSlider() {
  clearInterval(interval)
}

function startSliderMobile() {
  intervalMobile = setInterval(() => {
    currentImageIndexMobile.value = (currentImageIndexMobile.value + 1) % 3
  }, 4000)
}

function stopSliderMobile() {
  clearInterval(intervalMobile)
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


function playVideoMobile() {
  showVideoMobile.value = true
}

function closeVideoMobile() {
  showVideoMobile.value = false
}

function expandImageMobile() {
  showImageMobile.value = true
  startSliderMobile()
}

function closeImageMobile() {
  showImageMobile.value = false
  stopSliderMobile()
}

function toggleTransformationMobile() {
  showTransformationMobile.value = !showTransformationMobile.value
}

const handleResize = () => {
  if (process.client) windowWidth.value = window.innerWidth
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
    stopSliderMobile()
  }
})
</script>

<template>
  <div class="main-container">
    <div class="animated-wrapper desktop-only">
      <div class="animated-grid">

        <div class="play-button" :class="{ 'fade-out': showVideo || showImage }" @click="playVideo">
          <img src="/images/svg/play.svg" alt="Play icon" class="play-icon" />
        </div>

        <div class="blue-square" :class="{ 'fade-out': showVideo }"></div>

        <div class="green-square" :class="{ 'fade-out': showVideo }">
          <img src="/images/svg/flower.svg" class="square-icon" />
          {{ translate('digitalization') }}
        </div>

        <div class="image-square" :class="{ 'fade-out': showVideo || showTransformation }" @click="expandImage">
          <div class="arrow-btn open-btn">
            <img src="/images/svg/arrow.svg" alt="arrow" />
          </div>
          <img src="/images/webp/platform-preview.webp" alt="Platform" />
        </div>

        <div class="innovation-square" :class="{ 'fade-out': showVideo }">
          <img src="/images/svg/lightbulb.svg" class="square-icon" />
          {{ translate('innovations') }}
        </div>

        <div class="orange-square"></div>

        <div class="transformation-square" :class="{ 'fade-out': showTransformation }" @click="toggleTransformation">
          <span>{{ translate('transformation') }}</span>
          <div class="arrow-btn bottom-right">
            <img src="/images/svg/arrow.svg" />
          </div>
        </div>

        <div class="circle-img">
          <img src="/images/webp/girl.webp" alt="girl" />
        </div>

        <Transition name="video-expand">
          <div
              v-if="showVideo"
              class="video-overlay"

          >
            <button class="close-video" @click="closeVideo">✕</button>
            <video controls muted playsinline>
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
          </div>
        </Transition>

        <Transition name="image-expand">
          <div v-if="showImage" class="image-overlay">
            <Transition name="fade" mode="out-in">
              <template v-if="currentImageIndex === 0">
                <img src="/images/webp/slider-1.webp" />
              </template>
              <template v-else-if="currentImageIndex === 1">
                <img src="/images/webp/slider-2.webp" />
              </template>
              <template v-else>
                <img src="/images/webp/slider-3.webp" />
              </template>
            </Transition>
            <div class="arrow-btn close same-pos" @click="closeImage">
              <img src="/images/svg/arrow.svg" class="rotate" />
            </div>
          </div>
        </Transition>

        <Transition name="slide-in">
          <div v-if="showTransformation" class="transformation-overlay">
            <p class="mt-6" style="font-size: 16px">
              {{ translate('transformation_paragraph_1') }}
            </p>
            <div class="arrow-btn close bottom" @click="toggleTransformation">
              <img src="/images/svg/arrow.svg" class="rotate" />
            </div>
          </div>
        </Transition>

      </div>
    </div>

    <div class="animated-wrapper-mobile mobile-only">
      <div class="animated-grid-mobile">

        <div class="play-button-mobile" :class="{ 'fade-out': showVideoMobile || showImageMobile }" @click="playVideoMobile">
          <img src="/images/svg/play.svg" alt="Play icon" class="play-icon" />
        </div>

        <div class="blue-square-mobile" :class="{ 'fade-out': showVideoMobile || showImageMobile }"></div>

        <div class="image-square-mobile" :class="{ 'fade-out': showVideoMobile || showImageMobile || showTransformationMobile }" @click="expandImageMobile">
          <div class="arrow-btn open-btn">
            <img src="/images/svg/arrow.svg" alt="arrow" />
          </div>
          <img src="/images/webp/platform-preview.webp" alt="Platform" />
        </div>

        <div class="orange-square-mobile" :class="{ 'fade-out': showTransformationMobile }"></div>

        <div class="transformation-square-mobile" :class="{ 'fade-out': showTransformationMobile }" @click="toggleTransformationMobile">
          <span>{{ translate('transformation') }}</span>
          <div class="arrow-btn bottom-right">
            <img src="/images/svg/arrow.svg" />
          </div>
        </div>

        <Transition name="video-expand">
          <div v-if="showVideoMobile" class="video-overlay-mobile">
            <button class="close-video" @click="closeVideoMobile">✕</button>
            <video controls muted playsinline>
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
          </div>
        </Transition>

        <Transition name="image-expand">
          <div v-if="showImageMobile" class="image-overlay-mobile">
            <Transition name="fade" mode="out-in">
              <template v-if="currentImageIndexMobile === 0">
                <img src="/images/svg/slider-1.svg" />
              </template>
              <template v-else-if="currentImageIndexMobile === 1">
                <img src="/images/svg/slider-2.svg" />
              </template>
              <template v-else>
                <img src="/images/svg/slider-3.svg" />
              </template>
            </Transition>
            <div class="arrow-btn close same-pos" @click="closeImageMobile">
              <img src="/images/svg/arrow.svg" class="rotate" />
            </div>
          </div>
        </Transition>

        <Transition name="slide-in">
          <div v-if="showTransformationMobile" class="transformation-overlay-mobile">
            <p class="mt-6" style="font-size: 11px">
              {{ translate('transformation_paragraph_1') }}
            </p>
            <div class="arrow-btn close bottom" @click="toggleTransformationMobile">
              <img src="/images/svg/arrow.svg" class="rotate" />
            </div>
          </div>
        </Transition>

      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  position: relative;
  margin: 2rem auto;
  width: 100%;
}

@media (min-width: 768px) {
  .main-container {
    max-width: 480px;
  }
}

@media (max-width: 767px) {
  .main-container {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }

  .mobile-only {
    display: none;
  }
}

@media (max-width: 767px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }
}

.animated-wrapper {
  position: relative;
  margin: 0 auto;
  width: 480px;
  height: 480px;
  max-width: 100%;
}

.animated-grid {
  display: grid;
  grid-template-columns: repeat(3, 160px);
  grid-template-rows: repeat(3, 160px);
  gap: 0;
  justify-content: center;
}


.circle-img {
  display: block !important;
}


.play-button,
.blue-square,
.green-square,
.image-square,
.innovation-square,
.orange-square,
.transformation-square,
.circle-img {
  width: 100%;
  height: 100%;
  transition: opacity 1s;
}

.play-button {
  background: linear-gradient(to bottom right, #ffa41b, #b8e986);
  border-top-right-radius: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.play-icon {
  width: 48px;
  height: 48px;
}

.blue-square {
  background: #004f7c;
  border-bottom-right-radius: 90px;
}

.green-square {
  background: #b9f250;
  border-top-left-radius: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.square-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
}

.image-square {
  grid-column: span 2;
  border-top-left-radius: 90px;
  border-bottom-right-radius: 90px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.image-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.innovation-square {
  background: linear-gradient(to bottom right, #00cfff, #006080);
  border-bottom-left-radius: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.orange-square {
  background: linear-gradient(to bottom right, #b8e986, #ffa41b);
  border-bottom-left-radius: 90px;
}

.transformation-square {
  background: linear-gradient(to bottom right, #c8f26d, #ffa41b);
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: white;
}

.circle-img {
  border-radius: 50%;
  overflow: hidden;
}

.circle-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 440px; /* spans all 3 columns */
  height: 280px; /* spans top 2 rows */
  padding: 20px;
  border-radius: 30px;
  background: linear-gradient(to bottom right, #ffa41b, #b8e986);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  z-index: 60;
}

.video-overlay video {
  width: 420px;
  margin-top: 10px;
  border-radius: 18px;
  padding: 14px;
}

.close-video {
  position: absolute;
  top: 8px;
  left: 16px;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: white;
  z-index: 10;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 320px;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
  overflow: hidden;
  z-index: 55;
  background: linear-gradient(to bottom right, #00cfff, #006080);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.transformation-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 270px; /* spans 2 columns */
  height: 270px; /* spans 2 rows */
  border-radius: 30px;
  padding: 24px;
  background: linear-gradient(to bottom right, #c8f26d, #ffa41b);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  color: #004f7c;
  z-index: 50;
}

.animated-wrapper-mobile {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  display: none;
  justify-content: center;
  align-items: center;

}

@media (max-width: 767px) {
  .animated-wrapper-mobile {
    display: flex;
  }
}

.animated-grid-mobile {
  display: grid;
  grid-template-columns: repeat(2, 208px);
  grid-template-rows: repeat(3, 208px);
  gap: 0;
  max-width: 416px;
  margin: 0 auto;
}

.play-button-mobile,
.blue-square-mobile,
.image-square-mobile,
.orange-square-mobile,
.transformation-square-mobile {
  width: 208px;
  height: 208px;
  transition: opacity 1s;
}


.play-button-mobile {
  background: linear-gradient(to bottom right, #ffa41b, #b8e986);
  border-top-right-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.play-button-mobile .play-icon {
  width: 50px;
  height: 50px;
}

.blue-square-mobile {
  background: #004f7c;
  border-bottom-right-radius: 80px;
}


.image-square-mobile {
  grid-column: span 2;
  width: 416px;
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.image-square-mobile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.orange-square-mobile {
  background: linear-gradient(to bottom right, #b8e986, #ffa41b);
  border-bottom-left-radius: 80px;
}

.transformation-square-mobile {
  background: linear-gradient(to bottom right, #c8f26d, #ffa41b);
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}


.video-overlay-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 416px;
  height: 316px;
  padding: 20px;
  border-radius: 30px;
  background: linear-gradient(to bottom right, #ffa41b, #b8e986);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-overlay-mobile video {
  width: 100%;
  max-height: 100%;
  border-radius: 18px;
}


.image-overlay-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 416px;
  height: 416px;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
  overflow: hidden;
  z-index: 55;
  background: linear-gradient(to bottom right, #00cfff, #006080);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.image-overlay-mobile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.transformation-overlay-mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 416px;
  height: 416px;
  border-radius: 30px;
  padding: 24px;
  background: linear-gradient(to bottom right, #c8f26d, #ffa41b);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  color: #004f7c;
  z-index: 50;
}

.transformation-overlay-mobile p {
  font-size: 11px !important;
  margin-top: 0.5rem;
}


.arrow-btn {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
}

.arrow-btn img {
  width: 16px;
  height: 16px;
}

.open-btn {
  bottom: 12px;
  left: 12px;
}

.bottom-right {
  bottom: 18px;
  right: 18px;
}

.same-pos {
  bottom: 12px;
  left: 12px;
}

.bottom {
  bottom: 18px;
  right: 18px;
}

.rotate {
  transform: rotate(45deg);
}

.video-expand-enter-active,
.video-expand-leave-active {
  transition: all 0.8s ease-in-out;
}

.video-expand-enter-from,
.video-expand-leave-to {
  transform: scale(0);
  opacity: 0;
}

.image-expand-enter-active,
.image-expand-leave-active {
  transition: 0.6s ease-in-out;
}

.image-expand-enter-from,
.image-expand-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: 0.5s ease-in-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: scale(0);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-out {
  opacity: 0.3;
}


@media (max-width: 767px) {
  .animated-grid-mobile {
    grid-template-columns: repeat(2, 45vw);
    grid-template-rows: repeat(3, 45vw);
    max-width: 90vw;
  }

  .play-button-mobile,
  .blue-square-mobile,
  .orange-square-mobile,
  .transformation-square-mobile {
    width: 45vw;
    height: 45vw;
  }

  .image-square-mobile {
    width: 90vw;
    height: 45vw;
  }

  .video-overlay-mobile {
    width: 83vw;
    height: 82vw;
    padding: 15px;
  }

  .image-overlay-mobile {
    top: 0;
    width: 90vw;
    height: 90vw;
  }

  .transformation-overlay-mobile {
    width: 79vw;
    height: 78vw;
  }
}
</style>