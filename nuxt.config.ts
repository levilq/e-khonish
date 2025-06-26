// https://nuxt.com/docs/api/configuration/nuxt-config
import i18n from "./i18n.config"

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: { ...i18n },
})