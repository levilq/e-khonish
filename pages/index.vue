<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="w-full px-4 py-12">
    <div class="md:max-w-[1128px]  flex flex-col md:flex-row items-start justify-between mx-auto">
      <!-- Right Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-0 mt-8 md:mt-0 lg:order-2 mx-auto">
        <!-- Top Row -->
        <div class="w-[184px] h-[184px] bg-gradient-to-br from-[#FFA41B] to-[#B8E986] rounded-tr-[100px] flex items-center justify-center">
          <img src="/images/svg/play.svg" alt="Play icon" class="w-[40px] h-[40px]" />
        </div>

        <!-- ✅ Always visible on all screens (Blue box) -->
        <div class="w-[184px] h-[184px] bg-[#004F7C] rounded-br-[100px]"></div>

        <!-- ❌ Hidden on mobile: Цифровизация -->
        <div class="w-[184px] h-[184px] bg-[#B9F250] rounded-tl-[100px] flex-col items-center justify-center p-2 text-sm font-bold text-[#003049] hidden md:flex">
          <img src="/images/svg/flower.svg" alt="Цифровизация" class="w-[70px] h-[70px] mb-2" />
          Цифровизация
        </div>

        <!-- Middle Row -->
        <div class="w-[368px] h-[184px] col-span-2 md:col-span-2 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">

          <img src="/images/png/platform-preview.png" alt="Platform" class="object-cover w-full h-full" />
        </div>

        <!-- ❌ Hidden on mobile: Инновации -->
        <div class="w-[184px] h-[184px] bg-gradient-to-br from-[#00CFFF] to-[#006080] rounded-bl-[100px] flex-col items-center justify-center p-2 text-white text-sm font-bold hidden md:flex">
          <img src="/images/svg/lightbulb.svg" alt="Инновации" class="w-[70px] h-[70px] mb-2" />
          Инновации
        </div>

        <!-- Bottom Row -->
        <div class="w-[184px] h-[184px] bg-gradient-to-br from-[#B8E986] to-[#FFA41B] rounded-bl-[100px]"></div>

        <!-- ✅ Always visible: Трансформация -->
        <div class="w-[184px] h-[184px] bg-gradient-to-br from-[#C8F26D] to-[#FFA41B] rounded-tr-[100px] rounded-bl-[100px] relative flex items-center justify-center text-white text-sm font-bold">
          <span class="text-center">Трансформация</span>
          <div class="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-white flex items-center justify-center">
            <img src="/images/svg/arrow.svg" class="w-4 h-4" alt="arrow" />
          </div>
        </div>

        <!-- ❌ Hidden on mobile: Girl image -->
        <div class="w-[184px] h-[184px] rounded-full overflow-hidden hidden md:block">
          <img src="/images/png/girl.png" alt="girl" class="object-cover w-full h-full" />
        </div>
      </div>



      <!-- Left Side -->
      <div class="w-full md:w-[50%] space-y-3 lg:order-1 mx-auto">
        <h1 class="text-[#005B88] mx-auto text-6xl md:text-[65px] font-extrabold leading-tight font-mont text-center md:text-left" style="font-family: 'Montserrat', sans-serif;">
          E-KHONISH
        </h1>
        <div class="flex">
          <div class="flex gap-4 text-9xl text-[#FF9900] font-extrabold items-center mx-auto md:mx-0">
            <span style="font-family: 'Montserrat', sans-serif;">*</span>
            <span style="font-family: 'Montserrat', sans-serif;">*</span>
            <span style="font-family: 'Montserrat', sans-serif;">*</span>
            <p class="text-5xl text-black  font-bold -mt-10 hidden md:flex">умная</p>
          </div>
        </div>
        <div class="text-[40px] font-bold text-black -mt-10 leading-snug hidden md:flex">
          <div>
            <p>цифровая платформа</p>
            <p>для школ</p>
          </div>

        </div>
        <div class="text-[40px] font-bold text-black -mt-10 leading-snug md:hidden text-center ">
          <p>умная цифровая платформа для школ</p>
        </div>


        <img src="/images/svg/underline.svg" alt="underline" class="w-[300px] mx-auto md:mx-0 md:-ml-[65px]" />

        <p class="text-base text-[#222] max-w-md">
          Автоматизируйте управление, ускорьте процессы, вовлекайте учеников и родителей
        </p>

        <img src="/images/svg/green-curve.svg" alt="curve" class="relative left-[350px] bottom-10 w-[180px] mt-4 hidden md:flex" />

        <button class="mx-auto md:mx-0 mt-5 md:mt-0 relative md:bottom-24 bg-[#005B88] text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 shadow-md">
          Попробовать платформу
          <span class="text-2xl my-auto">→</span>
        </button>


      </div>



    </div>
  </div>

</template>

<style scoped>
/* Matching exact spacing and layout refinements */
</style>
