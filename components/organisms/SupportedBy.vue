<template>
  <section class="py-10  flex flex-col">
    <h2 class="text-2xl md:text-4xl font-bold text-[#004F7C] mb-16 mx-auto">
      {{t('supported_by')}}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-x-22 gap-y-5">
      <!-- Item 1 -->
      <div class="flex flex-col items-center text-center  md:w-[180px]">
        <img src="/images/png/tjk-gerb.png" alt="Hukumat" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{t('khatlon')}}
        </p>
      </div>

      <!-- Item 2 -->
      <div class="flex flex-col items-center text-center mt-7 md:0 md:w-[180px]">
        <img src="/images/png/tjk-gerb.png" alt="Education" class="w-[80px] h-[80px] object-contain mb-4" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{t('regional_public_formation')}}
        </p>
      </div>

      <!-- Item 3 -->
      <div class="md:flex items-center text-center mt-7 md:0 md:w-[180px]">
        <img src="/images/png/aict.png" alt="Agency" class="w-[80px] h-[80px] object-contain mb-4 mx-auto" />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{t('agency_of_education')}}
        </p>
      </div>

      <!-- Item 4 -->
      <div class="flex flex-col items-center text-center w-[140px] mx-auto">
        <img src="/images/png/jurat.png" alt="Jurat" class="w-[140px] h-[100px] object-contain " />
        <p class="text-md text-[#004F7C] font-black leading-snug">
          {{t('jurat')}}
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
    "supported_by": "Is supported by",
    "khatlon": "Executive authorities of Khatlon region",
    "regional_public_formation": "Regional public formation",
    "agency_of_education": "Agency of innovationsand digital technologies",
    "jurat": ""
  },
  "ru": {
    "supported_by": "При поддержке",
    "khatlon": "Органы исполнительной власти Хатлонской области",
    "regional_public_formation": "Областное народное образование",
    "agency_of_education": "Агентство инноваций и цифровых технологий",
    "jurat": "ОО Джуръат"
  },
  "tj": {
    "supported_by": "Бо дастгирии",
    "khatlon": "Мақомоти иҷроияи ҳокимияти давлатии вилояти Хатлон",
    "regional_public_formation": "Раёсати маорифи макомоти ичроияи хокимияти давлатии вилояти Хатлон",
    "agency_of_education": "Агентии иноватсия ва технологияхои раками",
    "jurat": "Ташкилоти чамъиятии Чуръат"
  }
}
</i18n>