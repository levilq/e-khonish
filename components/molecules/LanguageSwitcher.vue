<template>
  <div class="relative inline-block ">
    <!-- Trigger button (flag + caret on right) -->
    <button @click="toggleDropdown" class="flex items-center gap-1 cursor-pointer">
      <img :src="currentFlag" class="w-6 h-6 rounded-full" alt="Flag"/>
      <svg
          v-if="!open"
          class="w-5 h-5 text-gray-500 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <svg
          v-else
          class="w-5 h-5 text-gray-500 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <div v-if="open" class="absolute mt-2 flex flex-col gap-2 z-50">
      <div
          v-for="option in languageOptions"
          :key="option.code"
          @click="switchLanguage(option.code)"
          class="flex items-center gap-2 cursor-pointer"
      >
        <img :src="option.flag" class="w-6 h-6 rounded-full" alt="flag"/>
        <span class="text-sm font-semibold text-black">{{ option.label }}</span>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const open = ref(false)

const toggleDropdown = () => (open.value = !open.value)
const switchLanguage = (code: string) => {
  setLocale(code)
  open.value = false
}

const flags: Record<string, string> = {
  ru: '/flags/ru.svg',
  en: '/flags/gb.svg',
  tj: '/flags/tj.svg',
}

const labels: Record<string, string> = {
  ru: 'Рус',
  en: 'Eng',
  tj: 'Тоҷикӣ',
}

const currentFlag = computed(() => flags[locale.value])
const localesList = locales.value as Array<{ code: string }>

// ✅ Only show other languages in dropdown
const languageOptions = computed(() =>
    localesList
        .filter(l => l.code !== locale.value)
        .map(l => ({
          code: l.code,
          flag: flags[l.code],
          label: labels[l.code],
        }))
)
</script>

