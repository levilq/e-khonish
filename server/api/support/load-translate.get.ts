export default defineEventHandler(async () => {
  return await useStorage('TRANSLATE_KEY').getItem('translate')
})