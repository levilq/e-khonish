<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const isOpen = ref(false)
const { t } = useI18n({ useScope: 'local' })

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <!-- Burger Icon Button (mobile only) -->
  <div class="lg:hidden">
    <button @click="toggleMenu" aria-label="Open menu">
      <!-- Burger icon (3 lines) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <!-- Fullscreen Mobile Menu -->
  <transition name="fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-white z-50 flex flex-col justify-between items-center px-6 py-6"
    >
      <!-- Top row with logo and close icon -->
      <div class="w-full flex justify-between items-center mb-6">
        <img src="/images/png/logo.png" alt="eKhonish logo" class="h-10" />

        <button @click="toggleMenu" aria-label="Close menu">
          <!-- Close icon (X) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="flex flex-col items-center gap-6 text-base font-bold text-black capitalize hover:text-blue-300">
        <a href="#" @click="toggleMenu">{{ t('features') }}</a>
        <a href="#" @click="toggleMenu">{{ t('capabilities') }}</a>
        <a href="#" @click="toggleMenu">{{ t('who_is_it_for') }}</a>
        <a href="#" @click="toggleMenu">{{ t('presentation') }}</a>
        <a href="#" @click="toggleMenu">{{ t('contacts') }}</a>
      </div>

      <!-- Language + Login button -->
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

<i18n lang="json">
{
  "en": {
    "features": "features",
    "capabilities": "capabilities",
    "who_is_it_for": "Who is it for",
    "presentation": "presentation",
    "contacts": "contacts",
    "login": "log in"
  },
  "ru": {
    "features": "особенности",
    "capabilities": "возможности",
    "who_is_it_for": "Для кого",
    "presentation": "О нас",
    "contacts": "контакты",
    "login": "войти"
  },
  "tj": {
    "features": "хусусиятҳо",
    "capabilities": "имкониятҳо",
    "who_is_it_for": "Барои кӣ",
    "presentation": "намоиш",
    "contacts": "тамос",
    "login": "даромад"
  }
}
</i18n>