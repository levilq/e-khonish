<template>
  <footer class=" text-[#1E1E1E] px-4 pt-12 pb-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">

      <!-- Left: Logo and Description -->
      <div class="text-center md:text-left">
        <img src="/images/png/logo.png" alt="Khonish Logo" class="w-32 mx-auto md:mx-0 mb-4" />
        <p class="text-sm">{{ t("footer.tagline") }}</p>
      </div>

      <!-- Center: Social Media -->
      <div class="flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Icon name="mdi:facebook" class="text-[#1E1E1E] text-xl hover:text-[#0077A3]" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Icon name="mdi:instagram" class="text-[#1E1E1E] text-xl hover:text-[#0077A3]" />
        </a>
        <a href="https://t.me" target="_blank" aria-label="Telegram">
          <Icon name="mdi:telegram" class="text-[#1E1E1E] text-xl hover:text-[#0077A3]" />
        </a>
      </div>

      <!-- Right: Privacy Policy -->
      <div class="text-center md:text-right">
        <NuxtLink to="#" class="text-sm hover:underline">
          {{ t("footer.privacy_policy") }}
        </NuxtLink>
      </div>
    </div>

    <hr class="my-6 border-t border-gray-300" />

    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
      <p>Copyright © 2025, {{ t("footer.all_rights") }}</p>

      <!-- Language Switcher -->
      <div class="flex space-x-4 items-center">
        <button v-for="locale in availableLocales" :key="locale.code" @click="setLocale(locale.code)">
          <img :src="locale.flag" :alt="locale.label" class="w-6 h-4" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t, locale } = useI18n()

const availableLocales = [
  { code: 'en', label: 'English', flag: '/public/flags/gb.svg' },
  { code: 'tj', label: 'Тоҷикӣ', flag: '/public/flags/tj.svg' },
  { code: 'ru', label: 'Русский', flag: '/public/flags/ru.svg' }
]

function setLocale(code) {
  locale.value = code
}
</script>

<style scoped>
footer {
  font-family: 'Montserrat', sans-serif;
}
</style>
