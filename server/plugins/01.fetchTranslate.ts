export default defineNitroPlugin(async (nitroApp) => {
  const storage = useStorage('TRANSLATE_KEY')
  const endpoint = useRuntimeConfig().public.baseURL_API

  async function fetchSettings() {
    const result = await $fetch(`${endpoint}/support/translations/load?lang=lang_32&blocks=start_screen`, {
      method: 'GET'
    })
    await storage.setItem('translate', result)
  }
  try {
    await fetchSettings()
  }
  catch (e) {
  }
})
