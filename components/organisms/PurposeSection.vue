<template>
  <section class="relative px-4 md:py-12 text-center flex flex-col items-center">
    <!-- Green Arrow -->
    <img
        src="/images/svg/arrow-green.svg"
        alt="arrow"
        class="hidden md:block absolute -top-4 left-[220px] w-[105px] lg:w-[108px]"
    />

    <!-- Heading -->
    <h2 class="text-[24px] md:text-[28px] lg:text-[48px] font-bold text-[#005A83] mt-16 ">
      {{t('why')}} <span class="text-[#005A83] font-extrabold" style="font-family: 'Montserrat', sans-serif;">E-KHONISH?</span> {{t('choose')}}
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
    "why": "Why",
    "the_erp": "The ERP-based platform streamlines educational processes for all participants: students get easy access to schedules and learning materials, parents can track academic performance and their child’s development, teachers manage classes and engage with families, and administrators customize the system to meet institutional needs and ensure education quality control.",
    "choose": ""
  },
  "ru": {
    "why": "Почему выбирают",
    "the_erp": "Платформа на базе ERP упрощает образовательные процессы для всех участников: школьники получают удобный доступ к расписанию и учебной информации, родители к успеваемости и динамике развития ребенка, учителя – к управлению занятиями и взаимодействию с семьями, а администрация – к настройке системы под нужды учреждения и контролю качества образования.",
    "choose": ""
  },
  "tj": {
    "why": "Чаро",
    "the_erp": "Низоми электронии (платформаи) ERP асосёфта равандҳои таълимиро барои ҳамаи иштирокчиён содда менамояд: Хонандагон дастрасии қулай ба ҷадвал ва иттилооти таълимӣ доранд,Волидон имконияти дидан ва пайгирии дастовардҳои таълимӣ ва динамикаи рушди фарзандашонро пайдо менамоянд, Муаллимон (омӯзгорон) бошанд ба идоракунии дарсҳо ва муошират бо оилаҳо дастрасӣ пайдо мекунанд, Маъмурият барои мутобиқсозии низом ба ниёзҳои муассиса ва назорати сифати таълим дастрасӣ пайдо мекунад.",
    "choose": "– ро интихоб менамоянд"
  }
}
</i18n>