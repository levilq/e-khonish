<template>
  <section class="flex flex-col gap-y-6 relative mt-10 mx-auto ">
    <!-- Top Row -->
    <div class="pt-12 flex flex-col md:flex-row justify-between items-center">
      <h2 class="text-center text-4xl md:text-5xl font-bold text-[#1E1E1E] md:text-left mb-6 md:mb-0">
        {{t('for_who')}} <br /> <span class="text-[#0077A3]">{{ t('platform') }}?</span>
      </h2>
      <img
          src="/images/svg/swirly-arrow.svg"
          alt="arrow"
          class="hidden md:block absolute top-[-100px] right-[100px] w-[250px]"
      />
    </div>

    <!-- Cards Top Row -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-[170px]">
      <!-- ШКОЛЫ CARD -->
      <div class="relative bg-[url('/images/svg/schools.svg')] bg-no-repeat bg-contain w-[375px] h-[250px] p-6 mx-auto">
        <div class="absolute -top-4 left-3 z-30">
          <div class="bg-white uppercase text-[#FFA41B] font-bold text-[20px] px-8 py-2 rounded-full inset-shadow-sm shadow-xl">
            {{t('schools')}}
          </div>
        </div>
        <img
            src="/images/svg/school-icon.svg"
            class="absolute top-4 right-4 w-[100px] h-[100px] opacity-60"
            alt="school icon"
        />
        <div class="text-[#1E1E1E] text-[16px] font-bold leading-[1.5] mt-9 max-w-[300px] absolute">
          <p>
            {{t('functions_for_managing')}}
          </p>
          <p class="mt-2">
            {{t('functions_designed')}}
          </p>
        </div>
      </div>

      <!-- Girl Image CARD -->
      <div class="relative bg-[url('/images/svg/girl-box.svg')] bg-no-repeat bg-contain w-[375px] h-[250px] p-[9px] flex items-end justify-center mx-auto mt-[150px] md:mt-0">
        <img src="/images/png/girl_book.png" class="w-[375px]" alt="girlBook" />
      </div>

      <!-- УЧИТЕЛЯ CARD -->
      <div class="relative bg-[url('/images/svg/instructors.svg')] bg-no-repeat bg-contain w-full md:w-[375px] h-[250px] p-6 mx-auto">
        <div class="absolute -top-3 right-3 z-30">
          <div class="bg-white uppercase text-[#085b80] font-bold text-[12px] md:text-[20px] px-10 py-3 md:px-9 md:py-2 rounded-full inset-shadow-sm shadow-xl">
            {{t('teachers')}}
          </div>
        </div>
        <img
            src="/images/svg/teacher-icon.svg"
            class="absolute top-4  w-[100px] h-[100px] opacity-60"
            alt="teacher icon"
        />
        <div class="text-white text-[16px] font-bold leading-[1.5] mt-7 max-w-[310px] absolute">
          <p>
            {{t('the_system_offers')}}
          </p>
          <p class="mt-2">
            {{t('enhanced_tools')}}
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- РОДИТЕЛИ DESKTOP -->
      <div class="relative bg-[url('/images/svg/parents-box.svg')] bg-no-repeat bg-contain w-[552px] h-[156px] p-6 hidden md:flex mx-auto">
        <div class="absolute -top-4 right-10 z-30">
          <div class="bg-white uppercase text-[#00B8E7] font-bold text-[20px] px-5 py-2 rounded-full inset-shadow-sm shadow-xl">
            {{t('parents')}}
          </div>
        </div>
        <img
            src="/images/svg/parents-icon.svg"
            class="absolute top-4 w-[100px] h-[100px] opacity-60"
            alt="parents icon"
        />
        <div class="text-white text-[16px] font-bold leading-[1.5] mt-4 max-w-[450px] absolute">
          <p>
            {{t('the_platform_helps')}}
          </p>
        </div>
      </div>

      <!-- РОДИТЕЛИ MOBILE -->
      <div class="relative bg-[url('/images/svg/parents-sm.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[156px] p-6 flex md:hidden mx-auto">
        <div class="absolute -top-4 right-[12px] z-30">
          <div class="bg-white uppercase text-[#00B8E7] font-bold text-[12px] px-7 py-3 rounded-full inset-shadow-sm shadow-xl">
            {{t('parents')}}
          </div>
        </div>
        <img
            src="/images/svg/parents-icon.svg"
            class="absolute top-4 w-[100px] h-[100px] opacity-60"
            alt="parents icon"
        />
        <div class="text-white text-[15px] font-bold leading-[1.5] mt-1 max-w-[300px] absolute">
          <p>
            {{t('the_platform_helps')}}
          </p>
        </div>
      </div>

      <!-- ГОСУДАРСТВЕННЫЕ УЧРЕЖДЕНИЯ DESKTOP -->
      <div class="relative bg-[url('/images/svg/gos.svg')] bg-no-repeat bg-contain w-[552px] h-[156px] p-6 hidden md:flex mx-auto">
        <div class="absolute bottom-1 right-3 z-30">
          <div class="uppercase bg-white text-black font-bold text-[20px] px-6 py-2 rounded-full inset-shadow-sm shadow-xl">
            {{t('government_institutions')}}
          </div>
        </div>
        <img
            src="/images/svg/gos-icon.svg"
            class="absolute top-4 w-[100px] h-[100px] opacity-60"
            alt="gos icon"
        />
        <div class="text-black text-[16px] font-bold leading-[1.5] max-w-[504px] absolute">
          <p>
              {{t('manage_teacher')}}
          </p>
        </div>
      </div>

      <!-- ГОСУДАРСТВЕННЫЕ УЧРЕЖДЕНИЯ MOBILE -->
      <div class="relative bg-[url('/images/svg/gos-sm.svg')] bg-no-repeat bg-contain w-full max-w-[375px] h-[156px] p-6 flex md:hidden mx-auto">
        <div class="absolute bottom-4 right-[5px] z-30">
          <div class="uppercase bg-white text-black font-bold text-[12px] px-6 py-2 rounded-full inset-shadow-sm shadow-xl">
            {{t('government_institutions')}}
          </div>
        </div>
        <img
            src="/images/svg/gos-icon.svg"
            class="absolute top-4 w-[100px] h-[100px] opacity-60"
            alt="gos icon"
        />
        <div class="text-black text-[16px] font-bold leading-[1.5] -mt-5 max-w-[300px] absolute">
          <p>
            {{t('manage_teacher')}}
          </p>
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
    "for_who": "For who our",
    "platform": "platform",
    "schools": "schools",
    "functions_for_managing": "Functions for managing a network of educational institutions, districts, or prefectures where schools are located.",
    "functions_designed": "Functions designed to organize the educational process by departmental and municipal educational authorities.",
    "teachers":"teachers",
    "the_system_offers": "The system offers a comprehensive set of features for convenient and efficient work of educators in educational institutions.",
    "enhanced_tools": "Enhanced tools for learning control and planning, personalization of certain teaching processes, and opportunities for collaboration with parents.",
    "parents": "parents",
    "the_platform_helps": "The platform helps track children's progress, identify weak areas, and provide timely guidance, support, and assistance through parental involvement and continuous monitoring of all key processes.",
    "government_institutions": "government institutions",
    "manage_teacher": "Manage teacher workflows, the educational process, and the entire student lifecycle through administrative rights granted to school leadership, with the ability to configure all available and additional features."

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
    "for_who": "Низоми электронии мо барои кӣ ",
    "platform": "пешбинӣ шудааст",
    "schools": "Мактабҳо",
    "functions_for_managing": "Ҳалли ягона барои идоракунии шабакаи мактабҳо — новобаста аз он ки он минтақа, вилоят ё як муассисаи алоҳидаи таълимӣ бошад.",
    "functions_designed": "Ба ташкил ва ҳамоҳангсозии раванди таълим дар сатҳи маҳаллӣ ва давлатӣ мусоидат мекунад",
    "teachers":"Муаллимон",
    "the_system_offers": "Воситаи қулай барои банақшагирӣ, назорат ва фардикунонии таълим.",
    "enhanced_tools": "Ҳама чиз барои осон кардани кор ва беҳтар кардани ҳамкорӣ бо волидайн муҳайё шудааст.",
    "parents": "Волидайн",
    "the_platform_helps": "Назорати мунтазам аз болои муваффақияти фарзанд, сари вақт дарёфти мушкилиҳо ва мусоидат дар ҳалли онҳо.",
    "government_institutions": "Мақомот ва муассисаҳои давлатӣ",
    "manage_teacher": "Назорати ҳамаҷониба аз болои раванди таълим, захираҳои инсонӣ ва низоми таҳсилот. Танзимоти фарогир барои иҷрои ҳар гуна супоришҳо"

  }
}
</i18n>