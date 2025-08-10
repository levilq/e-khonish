<template>
  <section class="flex flex-col gap-y-6 relative mt-10 px-4">
    <!-- Top Row -->
    <div class="pt-12 flex flex-col md:flex-row justify-between items-center">
      <h2 class="text-center text-3xl sm:text-4xl md:text-4xl font-bold text-[#1E1E1E] md:text-left mb-6 md:mb-0">
        {{ t('for_who') }} <br />
        <span class="text-[#0077A3]">{{ t('platform') }}?</span>
      </h2>
      <img
          src="/images/svg/swirly-arrow.svg"
          alt="arrow"
          class="hidden md:block absolute top-[-100px] right-[50px] w-[250px]"
      />
    </div>

    <!-- Top Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-[170px]">
      <!-- Schools -->
      <div class="relative bg-[url('/images/svg/schools.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[250px] p-6 mx-auto">
        <div class="absolute -top-4 left-3 z-30">
          <div class="bg-white uppercase text-[#FFA41B] font-bold text-[18px] sm:text-[20px] px-6 py-2 rounded-full shadow-xl">
            {{ t('schools') }}
          </div>

        </div>
        <img src="/images/svg/school-icon.svg" class="absolute top-4 right-4 w-[100px] h-[100px] opacity-60" alt="school icon" />
        <div class="text-[#1E1E1E] text-[14px] font-bold leading-[1.5] mt-6 max-w-[290px] md:max-w-[300px] absolute">
          <p>{{ t('functions_for_managing') }}</p>
          <p class="mt-2">{{ t('functions_designed') }}</p>
        </div>
      </div>

      <!-- Girl Card -->
      <div class="relative bg-[url('/images/svg/girl-box.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[250px] p-[9px] flex items-end justify-center mx-auto mt-[80px] md:mt-0">
        <img src="/images/png/girl_book.png" class="relative bottom-6 md:bottom-3 w-[375px]" alt="girlBook" />
      </div>

      <!-- Teachers -->
      <div class="relative bg-[url('/images/svg/instructors.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[250px] p-6 mx-auto">
        <div class="absolute -top-4 right-3 z-30">
          <div class="bg-white uppercase text-[#085b80] font-bold text-[14px] sm:text-[20px] px-6 sm:px-9 py-2 rounded-full shadow-xl">
            {{ t('teachers') }}
          </div>
        </div>
        <img src="/images/svg/teacher-icon.svg" class="absolute top-4  w-[100px] h-[100px] opacity-60" alt="teacher icon" />
        <div class="text-white text-[14px]  font-bold leading-[1.5] mt-7 max-w-[290px] md:max-w-[310px] absolute">
          <p>{{ t('the_system_offers') }}</p>
          <p class="mt-2">{{ t('enhanced_tools') }}</p>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-4 relative bottom-7 md:bottom-0">
      <!-- Parents (Desktop) -->
      <div class="relative bg-[url('/images/svg/parents-box.svg')] bg-no-repeat bg-contain w-full max-w-[552px] h-[156px] p-6 hidden md:flex mx-auto">
        <div class="absolute -top-4 right-10 z-30">
          <div class="bg-white uppercase text-[#00B8E7] font-bold text-[20px] px-5 py-2 rounded-full shadow-xl">
            {{ t('parents') }}
          </div>
        </div>
        <img src="/images/svg/parents-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="parents icon" />
        <div class="text-white text-[14px]  font-semibold leading-[1.5] mt-4 max-w-[450px] absolute">
          <p>{{ t('the_platform_helps') }}</p>
        </div>
      </div>

      <!-- Parents (Mobile) -->
      <div class="relative bg-[url('/images/svg/parents-sm.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[156px] p-6 flex md:hidden mx-auto">
        <div class="absolute -top-4 right-[12px] z-30">
          <div class="bg-white uppercase text-[#00B8E7] font-bold text-[12px] px-7 py-3 rounded-full shadow-xl">
            {{ t('parents') }}
          </div>
        </div>
        <img src="/images/svg/parents-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="parents icon" />
        <div class="text-white text-[12px] font-bold leading-[1.5] mt-3 max-w-[290px] absolute">
          <p>{{ t('the_platform_helps') }}</p>
        </div>
      </div>

      <!-- Government (Desktop) -->
      <div class="relative bg-[url('/images/svg/gos.svg')] bg-no-repeat bg-contain w-full max-w-[552px] h-[156px] p-6 hidden md:flex mx-auto">
        <div class="absolute bottom-1 right-3 z-30">
          <div class="bg-white uppercase text-black font-bold text-[20px] px-6 py-2 rounded-full shadow-xl">
            {{ t('government_institutions') }}
          </div>
        </div>
        <img src="/images/svg/gos-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="gos icon" />
        <div class="text-black text-[14px]  font-bold leading-[1.5] max-w-[504px] absolute top-7">
          <p>{{ t('manage_teacher') }}</p>
        </div>
      </div>

      <!-- Government (Mobile) -->
      <div class="relative bg-[url('/images/svg/gos-sm.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[156px] p-6 flex md:hidden mx-auto">
        <div class="absolute bottom-4 right-[5px] z-30">
          <div class="bg-white uppercase text-black font-bold text-[12px] px-6 py-2 rounded-full shadow-xl">
            {{ t('government_institutions') }}
          </div>
        </div>
        <img src="/images/svg/gos-icon.svg" class="absolute top-4 w-[100px] h-[100px] opacity-60" alt="gos icon" />
        <div class="text-black text-[12px] font-bold leading-[1.5]  max-w-[300px] absolute">
          <p>{{ t('manage_teacher') }}</p>
        </div>
      </div>
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
    "for_who": "Who can use our",
    "platform": "platform",
    "schools": "schools",
    "functions_for_managing": "Functions for managing networks of educational institutions across districts and prefectures.",
    "functions_designed": "Tools designed to streamline the educational process for departmental and municipal authorities.",
    "teachers":"teachers",
    "the_system_offers": "The system provides a comprehensive set of features to support educators’ efficient and convenient work in educational institutions.",
    "enhanced_tools": "Advanced tools for monitoring learning progress and planning, personalization of teaching processes, and enhanced opportunities for collaboration with parents.",
    "parents": "parents",
    "the_platform_helps": "The platform helps track children's progress, identify weak areas, and provide timely guidance, support, and assistance through parental involvement and continuous monitoring of all key processes.",
    "government_institutions": "government institutions",
    "manage_teacher": "Manage teacher workflows, the educational process, and the full student lifecycle through administrative rights granted to school leadership — with flexible configuration of all core and optional features."

  },
  "ru": {
    "for_who": "Для кого наша",
    "platform": "платформа",
    "schools": "ШКОЛЫ",
    "functions_for_managing": "Единое решение для управления сетью школ — будь то регион, область или отдельное учебное заведение. ",
    "functions_designed": "Помогает организовать обучение на уровне муниципалитета или ведомства..",
    "teachers":"УЧИТЕЛЯ",
    "the_system_offers": "Удобные инструменты для планирования, контроля и персонализации обучения.",
    "enhanced_tools": "Всё, чтобы облегчить работу и наладить взаимодействие с родителями.",
    "parents": "РОДИТЕЛИ",
    "the_platform_helps": "Следите за успеваемостью ребёнка, вовремя замечайте трудности и помогайте. Платформа даёт прозрачный доступ ко всему, что важно.",
    "government_institutions": "ГОСУДАРСТВЕННЫЕ УЧРЕЖДЕНИЯ",
    "manage_teacher": "Полный контроль над учебным процессом, кадрами и всей системой образования. Гибкие настройки под любые задачи."

  },
  "tj": {
    "for_who": "Низоми электронии мо барои ки",
    "platform": "пешниҳод шудааст?",
    "schools": "Мактабҳо",
    "functions_for_managing": "Амалҳо барои идоракунии шабакаи намояндагиҳои муассисаҳои таълимӣ, ноҳияҳо ё ҷамоатҳое ки дар онҳо мактабҳо қарор доранд.",
    "functions_designed": "Амалҳое ки аз тарафи сохторҳои таълимии идоравӣ ва шаҳрӣ барои ташкили раванди таълим пешбинӣ карда шудаанд",
    "teachers":"Муаллимон",
    "the_system_offers": "Низом барои кори мувофиқ ва самараноки муаллимон дар муассисаҳои таълимӣ  маҷмӯи васеи амалҳоро пешниҳод менамояд. ",
    "enhanced_tools": "Абзори такмилшудаи назорат ва банақшагирии таълим, инфиродикунонии як ҷузъи қоидаҳои таълим, имкониятҳои кори якҷоя бо падару модарон ",
    "parents": "Падару модарон",
    "the_platform_helps": "Платформа барои пайгирии муваффақиятҳои талабагон, дидани ҷойҳои суст ва саривақт роҳнамоӣ кардан, дастгирӣ ва пешниҳоди ёрӣ ба тифл тавассути ҷалби падару модарон ва имконияти мониторинги доимии ҳамаи равандҳои муҳим ёрӣ мерасонад.",
    "government_institutions": "Муассисаҳои давлатӣ",
    "manage_teacher": "Идоракунии раванди кори муаллимон, раванди таълим ва маҷмӯи сиклҳои ҳаётии талабагон тавассути ҳуқуқҳои маъмурӣ барои роҳбарияти муассисаи таълимӣ бо имконияти танзими ҳамаи амалҳои мавҷуда ва иловагӣ"

  }
}
</i18n>