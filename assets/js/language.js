import { reactive } from 'vue'
import { LanguageApi } from '@/api/LanguagesApi'

const { setLanguageByProfileAPI } = LanguageApi()

export const state = reactive({
  words: {},
  selectLang: 'lang_32',
  loading: 0
})

export const actions = {
  globalTranslate(selector) {
    let result =
      typeof selector === 'string'
        ? state.words[selector.toLowerCase()]
        : selector
    if (result === undefined || result === '') {
      result = actions.transformation(selector)
    }
    return result
  },

  transformation(data) {
    let result = data.replace(/[_]/g, ' ')
    let firstSymbol = data.charAt(0).toUpperCase()
    return firstSymbol + result.slice(1)
  },

  SET_LANGUAGE_WORDS: (result, languageCode) => {
    state.selectLang = languageCode
    state.words = { ...state.words, ...result }
    state.loading = 1
    return true
  },

  async GET_LANGUAGE_WORDS(languageCode, nameBlock = 'all') {
    const baseURL_API = useRuntimeConfig().public.baseURL_API
    let response = await fetch(
      `${baseURL_API}/support/translations/load?lang=${languageCode}&blocks=${nameBlock}`
    )
    if (response.ok) {
      let result = await response.json()
      await this.SET_LANGUAGE_WORDS(result.data, languageCode)
    }
  },

  async changeLanguage(languageCode, profile_id) {
    if (profile_id) await setLanguageByProfileAPI(profile_id, languageCode)
    await this.GET_LANGUAGE_WORDS(languageCode)
  }
}

export const { globalTranslate } = actions
