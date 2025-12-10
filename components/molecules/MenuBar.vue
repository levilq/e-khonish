<script setup lang="ts">
import { ref } from 'vue'
import {globalTranslate as t} from "assets/js/language";

const isOpen = ref(false)


const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="lg:hidden">
    <button @click="toggleMenu" aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <transition name="fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-white z-50 flex flex-col justify-between items-center px-6 py-6"
    >
      <div class="w-full flex justify-between items-center mb-6">
        <img src="/images/webp/logo.webp" alt="eKhonish logo" class="h-10" />

        <button @click="toggleMenu" aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex flex-col items-center gap-6 text-base font-bold text-black capitalize hover:text-blue-300">
        <a href="#" @click="toggleMenu">{{ t('features') }}</a>
        <a href="#" @click="toggleMenu">{{ t('capabilities') }}</a>
        <a href="#" @click="toggleMenu">{{ t('who_is_it_for') }}</a>
        <a href="#" @click="toggleMenu">{{ t('presentation') }}</a>
        <a href="#" @click="toggleMenu">{{ t('contacts') }}</a>
      </div>

      <div class="flex relative items-center gap-7 mt-10 bottom-[100px]">
        <MoleculesLanguageSwitcher />
        <AtomsButtonsPrimary>{{ t('login') }}</AtomsButtonsPrimary>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

