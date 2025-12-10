export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},

    ssr: true,


    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/sitemap',
        '@pinia/nuxt'
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
                {rel: 'canonical', href: 'https://e-khonish.tj/'}
            ]
        }
    },

    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || '/',
            baseURL_API: process.env.BASE_URL + '/api',
            baseURL_API_AUTH: process.env.BASE_URL + '/api/auth',
            baseURL_API_JOURNAL: process.env.BASE_URL + '/api/journal',
            baseURL_API_SUPPORT: process.env.BASE_URL + '/api/support',
            baseURL_API_SCHEDULE: process.env.BASE_URL + '/api/schedule',
            baseURL_API_AUTH_BY_TOKEN: process.env.BASE_URL + '/api/authByToken',
            baseURL_API_AUTH_REFRESH_TOKENS:
                process.env.BASE_URL + '/api/refreshTokens',
            baseURL_AUTH_LOGIN_TOKEN:
                process.env.BASE_URL + '/authentication/loginByToken',
            baseURL_LIVE_ROOM: process.env.BASE_URL_LIVE_ROOM,
            baseURL_UPLOADS: process.env.BASE_URL_UPLOADS,

            appToken: process.env.APP_TOKENS,

            reverbAppId: process.env.REVERB_APP_ID,
            reverbAppKey: process.env.REVERB_APP_KEY,
            reverbAppSecret: process.env.REVERB_APP_SECRET,
            reverbHost: process.env.REVERB_HOST,
            reverbPort: process.env.REVERB_PORT,
            reverbScheme: process.env.REVERB_SCHEME,

            fetchChatUrl: process.env.FETCH_CHAT_URL,
            speechHost: process.env.SPEECH_URL
        }
    },

    css: [
        '@/assets/css/fonts.css'
    ],

    experimental: {
        payloadExtraction: false
    }
})