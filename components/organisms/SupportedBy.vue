<template>
  <section class="py-10 flex flex-col items-center ">
    <h2 class="text-2xl md:text-4xl font-bold text-[#004F7C] mb-16 text-center">
      {{ t('supported_by') }}
    </h2>

    <div class="flex flex-wrap justify-center gap-6 sm:gap-10">
      <!-- Item 1 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[280px]">
        <img src="/images/png/tjk-gerb.png" alt="Hukumat" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug px-4">
          {{ t('khatlon') }}
        </p>
      </div>

      <!-- Item 2 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[180px]">
        <img src="/images/png/tjk-gerb.png" alt="Education" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{ t('regional_public_formation') }}
        </p>
      </div>

      <!-- Item 3 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[180px]">
        <img src="/images/png/aict.png" alt="Agency" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{ t('agency_of_education') }}
        </p>
      </div>

      <!-- Item 4 -->
      <div class="flex flex-col items-center text-center w-full sm:w-[180px]">
        <img src="/images/png/jurat.png" alt="Jurat" class="w-[120px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{ t('jurat') }}
        </p>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
const { t } = useI18n()
</script>
<style scoped>
</style>
<i18n lang="json">
{
  "en": {
    "supported_by": "Made possible by",
    "khatlon": "Executive authorities of Khatlon region",
    "regional_public_formation": "Regional public formation",
    "agency_of_education": "Agency of innovationsand digital technologies",
    "jurat": ""
  },
  "ru": {
    "supported_by": "При поддержке",
    "khatlon": "Исполнительный орган государственной власти Хатлонской области",
    "regional_public_formation": "Управление образования Хатлонской области. Отделы образования городов и районов",
    "agency_of_education": "Агентство инноваций и цифровых технологий при Президенте Республики Таджикистан",
    "jurat": "ОО Джуръат"
  },
  "tj": {
    "supported_by": "Ҳамкориҳо",
    "khatlon": "Мақомоти иҷроияи ҳокимияти давлатии вилояти Хатлон",
    "regional_public_formation": "Раёсати маорифи макомоти ичроияи хокимияти давлатии вилояти Хатлон",
    "agency_of_education": "Агентии иноватсия ва технологияхои раками",
    "jurat": "Ташкилоти чамъиятии Чуръат"
  }
}
</i18n>