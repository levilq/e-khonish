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
      <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-0 mt-8 md:mt-0 lg:order-2 mx-auto">
        <!-- Top Row -->
        <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#FFA41B] to-[#B8E986] rounded-tr-[100px] flex items-center justify-center">
          <img src="/images/svg/play.svg" alt="Play icon" class="w-[40px] h-[40px]" />
        </div>

        <!-- ✅ Always visible on all screens (Blue box) -->
        <div class="w-[150px] h-[150px] bg-[#004F7C] rounded-br-[100px]"></div>

        <!-- ❌ Hidden on mobile: Цифровизация -->
        <div class="capitalize w-[150px] h-[150px] bg-[#B9F250] rounded-tl-[100px] flex-col items-center justify-center p-2 text-sm font-bold text-[#003049] hidden md:flex">
          <img src="/images/svg/flower.svg" alt="Цифровизация" class="w-[70px] h-[70px] mb-2" />
          {{t('digitalization')}}
        </div>

        <!-- Middle Row -->
        <div class="w-[300px] h-[150px] col-span-2 md:col-span-2 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">

          <img src="/images/png/platform-preview.png" alt="Platform" class="object-cover w-full h-full" />
        </div>

        <!-- ❌ Hidden on mobile: Инновации -->
        <div class="capitalize w-[150px] h-[150px] bg-gradient-to-br from-[#00CFFF] to-[#006080] rounded-bl-[100px] flex-col items-center justify-center p-2 text-white text-sm font-bold hidden md:flex">
          <img src="/images/svg/lightbulb.svg" alt="Инновации" class="w-[70px] h-[70px] mb-2" />
          {{t('innovation')}}
        </div>

        <!-- Bottom Row -->
        <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#B8E986] to-[#FFA41B] rounded-bl-[100px]"></div>

        <!-- ✅ Always visible: Трансформация -->
        <div class="w-[150px] h-[150px] bg-gradient-to-br from-[#C8F26D] to-[#FFA41B] rounded-tr-[80px] rounded-bl-[80px] relative flex items-center justify-center text-white text-sm font-bold">
          <span class="text-center capitalize">{{t('transformation')}}</span>
          <div class="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-white flex items-center justify-center">
            <img src="/images/svg/arrow.svg" class="w-4 h-4" alt="arrow" />
          </div>
        </div>

        <!-- ❌ Hidden on mobile: Girl image -->
        <div class="w-[150px] h-[150px] rounded-full overflow-hidden hidden md:block">
          <img src="/images/png/girl.png" alt="girl" class="object-cover w-full h-full" />
        </div>
      </div>
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

        <button class="mx-auto md:mx-0 mt-5 md:mt-0 relative md:bottom-36 bg-[#005B88] text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 shadow-md">
          {{t('let_try')}}
          <span class="text-2xl my-auto">→</span>
        </button>


      </div>
    </div>



    <!-- ШКОЛЫ CARD EXACT DESIGN -->
    <OrganismsSquareHero/>


    <OrganismsPurposeSection/>
    <OrganismsPlatformFeatures/>


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
