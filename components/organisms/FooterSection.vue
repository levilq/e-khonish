<template>
  <footer class="text-[#1E1E1E] px-4 pt-12 pb-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
      <!-- Left: Logo and Description -->
      <div class="text-center md:text-left">
        <img src="/images/png/logo.png" alt="Khonish Logo" class="w-32 mx-auto md:mx-0 mb-4" />
        <p class="text-sm">{{ t("footer.tagline") }}</p>
      </div>

      <!-- Center: Social Media -->
      <div class="flex justify-center md:justify-end space-x-6">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <img src="/images/svg/facebook.svg" alt="facebook">
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <img src="/images/svg/instagram.svg" alt="instagram">
        </a>
        <a href="https://t.me" target="_blank" aria-label="Telegram">
          <img src="/images/svg/telegram.svg" alt="telegram">
        </a>
      </div>
    </div>

    <hr class="my-6 border-t border-gray-300" />

    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
      <p>© 2025, {{ t("footer.all_rights") }}</p>

      <!-- Language Switcher -->
      <div class="flex space-x-4 items-center">
        <button
            v-for="option in languageOptions"
            :key="option.code"
            @click="switchLanguage(option.code)"
        >
          <img :src="option.flag" :alt="option.label" class="w-6 h-6 rounded-full" />
        </button>
      </div>

      <!-- Right: Privacy Policy -->
      <NuxtLink to="#" class="text-sm hover:underline">
        {{ t("footer.privacy_policy") }}
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale, locales, setLocale } = useI18n()

const flags = {
  en: '/flags/gb.svg',
  ru: '/flags/ru.svg',
  tj: '/flags/tj.svg',
}

const labels = {
  en: 'English',
  ru: 'Русский',
  tj: 'Тоҷикӣ',
}

const languageOptions = computed(() =>
    (locales.value || []).map(l => ({
      code: l.code,
      flag: flags[l.code] || '',
      label: labels[l.code] || '',
    }))
)

const switchLanguage = (code) => {
  setLocale(code)
}
</script>

<i18n lang="json">
{
  "en": {
    "footer": {
      "tagline": "A smart digital platform for schools",
      "privacy_policy": "Privacy Policy",
      "all_rights": "All rights reserved"
    }
  },
  "ru": {
    "footer": {
      "tagline": "Платформа для цифровизации школ",
      "privacy_policy": "Политика конфиденциальности",
      "all_rights": "Все права защищены"
    }
  },
  "tj": {
    "footer": {
      "tagline": "Платформаи рақамии муассисаҳои таълимӣ",
      "privacy_policy": "Сиёсати махфият",
      "all_rights": "Ҳамаи ҳуқуқҳо ҳифз шудаанд"
    }
  }
}
</i18n>

<style scoped>

</style>
