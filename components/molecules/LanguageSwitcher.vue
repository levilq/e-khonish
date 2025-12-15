<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { actions, state } from "assets/js/language"
import TJ from '@/assets/images/flags/tj.svg'
import RU from '@/assets/images/flags/ru.svg'
import GB from '@/assets/images/flags/gb.svg'

const open = ref(false)
const hydrated = ref(false)
const currentLang = ref<string>('lang_32')

const languages = {
  lang_32: { code: 'lang_32', label: 'Тоҷикӣ', flag: TJ },
  lang_33: { code: 'lang_33', label: 'Рус', flag: RU },
  english: { code: 'english', label: 'Eng', flag: GB }
} as const

const detectLang = (): string => {
  if (typeof window === 'undefined') return 'lang_32'
  const saved =
      localStorage.getItem('lang') ||
      localStorage.getItem('language') ||
      localStorage.getItem('currentLang')
  return saved && saved in languages ? saved : 'lang_32'
}

const toggleDropdown = () => (open.value = !open.value)

const switchLanguage = async (code: string) => {
  if (!languages[code as keyof typeof languages]) return
  if (code === currentLang.value) return

  localStorage.setItem('lang', code)
  currentLang.value = code
  open.value = false
  await loadLanguageWords(code)
}

const currentFlag = computed(
    () =>
        languages[currentLang.value as keyof typeof languages]?.flag ??
        '/flags/gb.landing'
)
const languageOptions = computed(() =>
    Object.values(languages).filter(l => l.code !== currentLang.value)
)

const loadLanguageWords = async (code: string) => {
  if (state.selectLang === code && state.loading > 0) return

  state.selectLang = code
  state.loading = 1

  await Promise.all([
    actions.GET_LANGUAGE_WORDS(code, 'start_screen'),
  ])

  state.loading = 2
}

onMounted(async () => {
  const detected = detectLang()
  currentLang.value = detected
  hydrated.value = true
  await loadLanguageWords(detected)
})
</script>

<template>
  <div v-if="hydrated" class="lang-wrapper">
    <button class="lang-button" @click="toggleDropdown">
      <img :src="currentFlag" alt="flag" class="flag" />

      <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#333"
          viewBox="0 0 24 24"
      >
        <path d="M12 16l-6-6h12z" />
      </svg>
      <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#333"
          viewBox="0 0 24 24"
      >
        <path d="M12 8l6 6H6z" />
      </svg>
    </button>

    <div v-if="open" class="lang-dropdown">
      <div
          v-for="opt in languageOptions"
          :key="opt.code"
          class="lang-option"
          @click="switchLanguage(opt.code)"
      >
        <img :src="opt.flag" :alt="opt.label" class="flag" />
        <span class="lang-label">{{ opt.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lang-wrapper {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.lang-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 8px;
}
.lang-button:hover {
  background: rgba(0, 207, 255, 0.1);
}
.flag {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
}

.lang-dropdown {
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  z-index: 100;
  min-width: 110px;
}
.lang-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
}
.lang-option:hover {
  background: rgba(0, 207, 255, 0.1);
}
.lang-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
}
</style>
