import { actions } from '@/assets/js/language'
export default defineNuxtPlugin(async () => {
  const { data } = await useFetch('/api/support/load-translate')
  actions.SET_LANGUAGE_WORDS(data.value.data, 'lang_32')
})
