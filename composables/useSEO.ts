export const useSEO = () => {
  const { locale } = useI18n()
  const localePath = useLocalePath()

  const setPageSEO = (options: {
    title: Record<string, string>
    description: Record<string, string>
    keywords?: Record<string, string>
    ogImage?: string
    canonicalPath?: string
    structuredData?: any
  }) => {
    const currentLocale = locale.value as string

    const title = options.title[currentLocale] || options.title['ru']
    const description = options.description[currentLocale] || options.description['ru']
    const keywords = options.keywords?.[currentLocale] || options.keywords?.['ru'] || ''

    const canonicalUrl = options.canonicalPath
      ? `https://e-khonish.tj${localePath(options.canonicalPath)}`
      : `https://e-khonish.tj${localePath('/')}`

    useSeoMeta({
      title,
      description,
      keywords,
      ogTitle: title,
      ogDescription: description,
      ogImage: options.ogImage || 'https://e-khonish.tj/images/png/platform-preview.png',
      ogUrl: canonicalUrl,
      ogType: 'website',
      ogLocale: getOgLocale(currentLocale),
      twitterCard: 'summary_large_image',
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: options.ogImage || 'https://e-khonish.tj/images/png/platform-preview.png'
    })

    const hreflangLinks = [
      { rel: 'alternate', hreflang: 'ru', href: `https://e-khonish.tj/` },
      { rel: 'alternate', hreflang: 'en', href: `https://e-khonish.tj/en/` },
      { rel: 'alternate', hreflang: 'tj', href: `https://e-khonish.tj/tj/` },
      { rel: 'alternate', hreflang: 'x-default', href: `https://e-khonish.tj/` }
    ]

    useHead({
      title,
      htmlAttrs: {
        lang: currentLocale
      },
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl
        },
        ...hreflangLinks
      ],
      script: options.structuredData ? [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(options.structuredData)
        }
      ] : []
    })
  }

  const getOgLocale = (locale: string): string => {
    const localeMap: Record<string, string> = {
      'ru': 'ru_RU',
      'en': 'en_US',
      'tj': 'tg_TJ'
    }
    return localeMap[locale] || 'ru_RU'
  }

  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "E-Khonish",
    "description": "Цифровая платформа для автоматизации управления школами в Таджикистане",
    "url": "https://e-khonish.tj",
    "logo": "https://e-khonish.tj/images/png/logo.png",
    "foundingLocation": {
      "@type": "Place",
      "name": "Таджикистан"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Таджикистан"
    },
    "serviceType": "Образовательные технологии"
  })

  const generateWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "E-Khonish",
    "alternateName": "E-KHONISH",
    "description": "Умная цифровая платформа для школ Таджикистана",
    "url": "https://e-khonish.tj",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://e-khonish.tj/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": generateOrganizationSchema()
  })

  const generateSoftwareApplicationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "E-Khonish",
    "description": "Цифровая платформа для автоматизации управления школами",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "provider": generateOrganizationSchema(),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TJS"
    },
    "featureList": [
      "Управление учебным процессом",
      "Электронный дневник",
      "Коммуникация с родителями",
      "Автоматизация отчетности"
    ]
  })

  return {
    setPageSEO,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateSoftwareApplicationSchema
  }
}