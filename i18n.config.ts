import type { NuxtI18nOptions } from '@nuxtjs/i18n'

const config: Partial<NuxtI18nOptions> = {
    langDir: 'locales/',
    locales: [
        { code: 'ru', name: 'Русский', file: 'ru.json' },
        { code: 'en', name: 'English', file: 'en.json' },
        { code: 'tj', name: 'Тоҷикӣ', file: 'tj.json' },
    ],
    defaultLocale: 'ru'
}

export default config;