export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},

    ssr: true,

    modules: [
        '@nuxtjs/sitemap'
    ],

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                {name: 'robots', content: 'index, follow'},
                {name: 'author', content: 'E-Khonish'},
                {name: 'format-detection', content: 'telephone=no'},
                {property: 'og:site_name', content: 'E-Khonish'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image:type', content: 'image/png'},
                {property: 'og:image:width', content: '1200'},
                {property: 'og:image:height', content: '630'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:site', content: '@ekhonish'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'canonical', href: 'https://ekhonish.tj/'}
            ]
        },
        buildAssetsDir: "/_landing/",
    },

    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || '/',
            baseURL_API: process.env.BASE_URL_API + '/api'
        }
    },

    css: [
        '@/assets/style/scss/main.scss'
    ],

    experimental: {
        appManifest: false,
        entryImportMap: false
    }
})