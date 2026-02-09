import { actions } from '@/assets/js/language'

export default defineNuxtPlugin(async () => {
  const { data, error } = await useFetch('/api/support/load-translate', {
    key: 'initial-translations'
  })

  if (error.value) {
    return
  }

  if (data.value && data.value.data) {
    actions.SET_LANGUAGE_WORDS(data.value.data, 'lang_32')
  }
})