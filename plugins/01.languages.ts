import { actions } from '@/assets/js/language'

export default defineNuxtPlugin(async () => {
  // 1. Use useFetch with a unique key to ensure SSR consistency
  const { data, error } = await useFetch('/api/support/load-translate', {
    key: 'initial-translations'
  })

  // 2. Debugging: Check if the API actually returned the expected structure
  if (error.value) {
    console.error('Translation Fetch Error:', error.value)
    return
  }

  // 3. Ensure we have the data before calling the action
  // Most APIs return { data: { ... } }, so we check for data.value.data
  if (data.value && data.value.data) {
    actions.SET_LANGUAGE_WORDS(data.value.data, 'lang_32')
  } else {
    console.warn('API returned success but data property is missing or empty')
  }
})