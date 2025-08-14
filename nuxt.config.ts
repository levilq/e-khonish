import i18n from "./i18n.config"

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  ssr: true,

  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/api/sitemap.xml', '/', '/en/', '/tj/']
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],

  i18n: { ...i18n },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'E-Khonish' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:site_name', content: 'E-Khonish' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ekhonish' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://e-khonish.tj/' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://e-khonish.tj'
    }
  },

  css: [
    '@/assets/css/fonts.css'
  ],

  experimental: {
    payloadExtraction: false
  }
})