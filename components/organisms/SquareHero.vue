<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3">
    <!-- Top row -->
    <div class="w-[130px] h-[130px] bg-gradient-to-br from-[#FFA41B] to-[#B8E986] rounded-tr-[60px] flex items-center justify-center">
      <img src="/images/svg/play.svg" alt="Play icon" class="w-[40px] h-[40px]" />
    </div>
    <div class="w-[130px] h-[130px] bg-[#004F7C] rounded-br-[60px]"></div>
    <div class="w-[130px] h-[130px] bg-[#B9F250] rounded-tl-[60px] flex flex-col items-center justify-center p-2 text-sm font-bold text-[#003049]">
      <img src="/images/svg/flower.svg" alt="Цифровизация" class="w-[70px] h-[70px] mb-1" />
      Цифровизация
    </div>

    <!-- Middle row -->
    <div class="w-[260px] h-[130px] rounded-bl-[60px] rounded-tr-[60px] col-span-2 overflow-hidden">
      <img src="/images/png/platform-preview.png" alt="Platform" class="object-cover w-full h-full" />
    </div>
    <div class="w-[130px] h-[130px] bg-gradient-to-br from-[#00CFFF] to-[#006080] rounded-bl-[60px]  flex flex-col items-center justify-center p-2 text-white text-sm font-bold">
      <img src="/images/svg/lightbulb.svg" alt="Инновации" class="w-[70px] h-[70px] mb-1" />
      Инновации
    </div>

    <!-- Bottom row -->
    <div class="w-[130px] h-[130px] bg-gradient-to-br from-[#B8E986] to-[#FFA41B] rounded-bl-[60px]"></div>
    <div class="w-[130px] h-[130px] bg-gradient-to-br from-[#C8F26D] to-[#FFA41B] rounded-tr-[60px] rounded-bl-[60px] relative flex items-center justify-center text-white text-sm font-bold">
      <span class="text-center">Трансформация</span>
      <div class="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white flex items-center justify-center">
        <img src="/images/svg/arrow.svg" class="w-4 h-4"  alt="arrow"/>
      </div>
    </div>
    <div class="w-[130px] h-[130px] rounded-full overflow-hidden">
      <img src="/images/png/girl.png" alt="girl" class="object-cover w-full h-full" />
    </div>
  </div>
</template>

<style scoped>

</style>