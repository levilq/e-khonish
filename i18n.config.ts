import type { NuxtI18nOptions } from '@nuxtjs/i18n'

const config: Partial<NuxtI18nOptions> = {
    langDir: 'locales/',
    locales: [
        {
            code: 'ru',
            name: 'Русский',
            file: 'ru.json',
            iso: 'ru-TJ',
            dir: 'ltr'
        },
        {
            code: 'en',
            name: 'English',
            file: 'en.json',
            iso: 'en-US',
            dir: 'ltr'
        },
        {
            code: 'tj',
            name: 'Тоҷикӣ',
            file: 'tj.json',
            iso: 'tg-TJ',
            dir: 'ltr'
        },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
        alwaysRedirect: false,
        fallbackLocale: 'ru'
    }
}

export default config;