<script setup>
definePageMeta({
  layout: 'default'
})
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="w-full px-4 md:py-20">
    <div class="md:max-w-[1128px]  flex flex-col md:flex-row items-start justify-between mx-auto">
      <!-- Right Grid -->
      <OrganismsAnimatedSq/>
      <!-- Left Side -->
      <div class="w-full md:w-[50%] space-y-3 lg:order-1 mx-auto ">
        <h1 class="text-[#005B88] mt-10 md:mt-0 mx-auto text-4xl md:text-[48px] font-extrabold leading-tight font-mont text-center md:text-left" style="font-family: 'Montserrat', sans-serif;">
          E-KHONISH
        </h1>
        <div class="flex">
          <div class="flex gap-4 text-8xl text-[#FF9900] font-extrabold items-center mx-auto md:mx-0">
            <span style="font-family: 'Montserrat', sans-serif;">*</span>
            <span style="font-family: 'Montserrat', sans-serif;">*</span>
            <span style="font-family: 'Montserrat', sans-serif;">*</span>
            <p class="text-3xl text-black  font-bold -mt-10 hidden md:flex">{{t('smart')}}</p>
          </div>
        </div>
        <div class="text-3xl font-bold text-black -mt-10 leading-snug hidden md:flex">
          <div>
            <p>{{t('digital_platform')}}</p>
            <p>{{t('for_school')}}</p>
          </div>

        </div>
        <div class="text-[40px] font-bold text-black -mt-10 leading-snug md:hidden text-center ">
          <p>{{t('digital_platform')}} {{t('for_school')}}</p>
        </div>


        <img src="/images/svg/underline.svg" alt="underline" class="w-[300px] mx-auto md:mx-0 md:-ml-[65px]" />

        <p class="text-base text-[#222] max-w-md text-center md:text-left">
          {{t('automate_management')}}
        </p>

        <img src="/images/svg/green-curve.svg" alt="curve" class="relative left-[350px] bottom-10 w-[180px] mt-4 hidden md:flex" />

        <button class="mx-auto md:mx-0 mt-5 md:mt-0 relative md:bottom-36 bg-[#005B88] text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md">
          {{t('let_try')}}
          <span class="text-2xl my-auto">→</span>
        </button>


      </div>
    </div>



    <!-- ШКОЛЫ CARD EXACT DESIGN -->
    <OrganismsSquareHero/>


    <OrganismsPurposeSection/>
    <OrganismsPlatformFeatures/>

    <OrganismsAbout/>

    <OrganismsAvailabilityStats/>

    <OrganismsOurValues/>

    <OrganismsTestimonialsSlider/>

    <OrganismsSupportedBy/>

    <OrganismsContactSection/>



  </div>

</template>

<style scoped>

</style>

<i18n lang="json">
{
  "en": {
    "digitalization": "digitalization",
    "innovation": "innovation",
    "transformation": "transformation",
    "smart": "smart",
    "digital_platform": "digital platform",
    "for_school": "for schools",
    "automate_management": "Automate management, accelerate processes, engage students and parents",
    "let_try": "Let’s try"
  },
  "ru": {
    "digitalization": "Цифровизация",
    "innovation": "Инновации",
    "transformation": "Трансформация",
    "smart": "умная",
    "digital_platform": "цифровая платформа",
    "for_school": "для школ",
    "automate_management": "Автоматизируйте управление, ускорьте процессы, вовлекайте учеников и родителей",
    "let_try": "Попробовать платформу"
  },
  "tj": {
    "digitalization": "Рақамизатсия",
    "innovation": "Навоварй",
    "transformation": "Трансформатсия",
    "smart": "платформаи",
    "digital_platform": "рақамии самаранок",
    "for_school": "барои мактабҳо мебошад",
    "automate_management": "Идоракунии мактабро ба таври худкор ба роҳ монда, суръати раванди таълимро тезтар мекунад ва хонандагону волидайнро фаъолона ҷалб менамояд.",
    "let_try": "Санҷиши низоми электронӣ"
  }
}
</i18n>
