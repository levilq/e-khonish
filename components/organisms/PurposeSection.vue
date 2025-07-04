<template>
  <section class="relative px-4 md:py-12 text-center flex flex-col items-center">
    <!-- Green Arrow -->
    <img
        src="/images/svg/arrow-green.svg"
        alt="arrow"
        class="hidden md:block absolute -top-4 left-[220px] w-[105px] lg:w-[108px]"
    />

    <!-- Heading -->
    <h2 class="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E1E1E] mt-16 capitalize">
      {{t('why')}} <span class="text-[#0077A3] font-extrabold" style="font-family: 'Montserrat', sans-serif;">E-KHONISH?</span>
    </h2>

    <!-- Description Box -->
    <div class="mt-6 px-4 py-4  border-2 border-[#005A83] rounded-xl font-bold max-w-[920px]  shadow-sm text-[14px] md:text-[16px] leading-relaxed text-[#1E1E1E]">
      {{t('the_erp')}}
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
</script>
<i18n lang="json">
{
  "en": {
    "why": "why",
    "the_erp": "The ERP-based platform streamlines educational processes for all participants: students get easy access to schedules and learning materials, parents can track academic performance and their child’s development, teachers manage classes and engage with families, and administrators customize the system to meet institutional needs and ensure education quality control."

  },
  "ru": {
    "why": "Почему выбирают",
    "the_erp": "Платформа на базе ERP упрощает образовательные процессы для всех участников: школьники получают удобный доступ к расписанию и учебной информации, родители к успеваемости и динамике развития ребенка, учителя – к управлению занятиями и взаимодействию с семьями, а администрация – к настройке системы под нужды учреждения и контролю качества образования."

  },
  "tj": {
    "why": "Чаро",
    "the_erp": "Низоми электронии мо, ки дар асоси низоми ERP таҳия шудааст, раванди таълимро барои ҳамаи иштирокчиён осонтар мегардонад: хонандагон дастрасии қулай ба ҷадвали дарсҳо ва маводи таълимӣ доранд, волидайн натиҷаҳои таҳсил ва пешрафти фарзанди худро пайгирӣ мекунанд, муаллимон равиши таълимро идора мекунанд ва бо волидайн дар тамос мешаванд, маъмурият низомро мутобиқи эҳтиёҷоти муассиса танзим намуда, сифати таҳсилотро назорат мекунад"

  }
}
</i18n>