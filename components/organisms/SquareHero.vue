<template>
  <section class="flex flex-col  gap-y-6 relative mt-10 mx-auto -ml-4 md:-ml-0">
    <!-- Top Row -->
    <div class=" px-4 pt-12 justify-between flex">
      <h2 class="text-2xl md:text-5xl font-bold text-[#1E1E1E] text-left mb-6">
        Для кого наша <br/> <span class="text-[#0077A3]">платформа?</span>
      </h2>
      <img
          src="/images/svg/swirly-arrow.svg"
          alt="arrow"
          class="hidden md:block absolute top-[-100px] right-[100px] w-[250px]"
      />
    </div>
    <!-- Decorative Arrow -->

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-[170px]">
      <!-- ШКОЛЫ CARD -->
      <div class="relative bg-[url('/images/svg/schools.svg')] bg-no-repeat bg-contain w-[375px] h-[250px] p-6">
        <!-- Floating Label -->
        <div class="absolute -top-4 left-3 z-30">
          <div class="bg-white text-[#FFA41B] font-bold md:*:
          text-[20px] px-8 py-2 rounded-full inset-shadow-sm shadow-xl">
            ШКОЛЫ
          </div>
        </div>

        <!-- School Icon -->
        <img
            src="/images/svg/school-icon.svg"
            class="absolute top-4 right-4 w-[100px] h-[100px] opacity-60"
            alt="school icon"
        />

        <!-- Text Content -->
        <div class="text-[#1E1E1E] text-[16px] font-bold leading-[1.5] mt-9 max-w-[300px] absolute">
          <p>
            Единое решение для управления сетью школ — будь то регион, область
            или отдельное учебное заведение.
          </p>
          <p class="mt-2">
            Помогает организовать обучение на уровне муниципалитета или ведомства.
          </p>
        </div>
      </div>

      <!-- Girl Image CARD -->
      <div class="ml-2 md:ml-0 mt-[150px] md:mt-0 relative bg-[url('/images/svg/girl-box.svg')] bg-no-repeat bg-contain w-[375px] h-[250px] p-[9px] flex items-end justify-center">
        <img
            src="/images/png/girl_book.png"
            class="w-[375px]"
            alt="girlBook"
        />
      </div>

      <!-- УЧИТЕЛЯ CARD -->
      <div class="ml-3 md:ml-0 relative bg-[url('/images/svg/instructors.svg')] bg-no-repeat bg-contain w-full md:w-[375px] h-[250px] p-6 ">
        <!-- Floating Label -->
        <div class="absolute -top-3  md:-top-3 right-3 z-30">
          <div class="bg-white text-[#085b80] font-bold text-[12px] md:text-[20px] px-10 py-3 md:px-9 md:py-2 rounded-full inset-shadow-sm shadow-xl">
            УЧИТЕЛЯ
          </div>
        </div>

        <!-- Icon -->
        <img
            src="/images/svg/teacher-icon.svg"
            class="absolute top-4  w-[100px] h-[100px] opacity-60"
            alt="teacher icon"
        />

        <!-- Text Content -->
        <div class="text-white text-[16px] font-bold leading-[1.5] mt-9 max-w-[310px] absolute">
          <p>
            Удобные инструменты для планирования, контроля и персонализации обучения.
          </p>
          <p class="mt-2">
            Всё, чтобы упростить работу и наладить взаимодействие с родителями.
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- РОДИТЕЛИ CARD -->
      <div class="relative bg-[url('/images/svg/parents-box.svg')] bg-no-repeat bg-contain w-[552px] h-[156px] p-6 hidden md:flex">
        <!-- Floating Label -->
        <div class="absolute -top-4 right-10 z-30">
          <div class="bg-white text-[#00B8E7] font-bold text-[20px] px-5 py-2 rounded-full inset-shadow-sm shadow-xl">
            РОДИТЕЛИ
          </div>
        </div>

        <!-- Icon -->
        <img
            src="/images/svg/parents-icon.svg"
            class="absolute top-4  w-[100px] h-[100px] opacity-60"
            alt="parents icon"
        />

        <!-- Text Content -->
        <div class="text-white text-[16px] font-bold leading-[1.5] mt-8 max-w-[450px] absolute">
          <p>
            Следите за успеваемостью ребёнка, вовремя замечайте трудности и помогайте. Платформа даёт прозрачный доступ ко всему, что важно.
          </p>
        </div>
      </div>
      <div class="ml-4 -mt-6 relative bg-[url('/images/svg/parents-sm.svg')] bg-no-repeat bg-contain w-[350px] h-[156px] p-6 mx- flex md:hidden">
        <!-- Floating Label -->
        <div class="absolute -top-4 right-[12px] z-30">
          <div class="bg-white text-[#00B8E7] font-bold text-[12px] px-7 py-3 rounded-full inset-shadow-sm shadow-xl">
            РОДИТЕЛИ
          </div>
        </div>

        <!-- Icon -->
        <img
            src="/images/svg/parents-icon.svg"
            class="absolute top-4  w-[100px] h-[100px] opacity-60"
            alt="parents icon"
        />

        <!-- Text Content -->
        <div class="text-white text-[15px] font-bold leading-[1.5] mt-2 max-w-[300px] absolute">
          <p>
            Следите за успеваемостью ребёнка, вовремя замечайте трудности и помогайте. Платформа даёт прозрачный доступ ко всему, что важно.
          </p>
        </div>
      </div>

      <!-- ГОСУДАРСТВЕННЫЕ УЧРЕЖДЕНИЯ CARD -->
      <div class="relative bg-[url('/images/svg/gos.svg')] bg-no-repeat bg-contain w-[552px] h-[156px] p-6 hidden md:flex">
        <!-- Floating Label -->
        <div class="absolute bottom-1 right-3 z-30">
          <div class="bg-white text-[#A4CD39] font-bold text-[16px] px-6 py-2 rounded-full inset-shadow-sm shadow-xl">
            ГОСУДАРСТВЕННЫЕ УЧРЕЖДЕНИЯ
          </div>
        </div>

        <!-- Icon -->
        <img
            src="/images/svg/gos-icon.svg"
            class="absolute top-4  w-[100px] h-[100px] opacity-60"
            alt="gos icon"
        />

        <!-- Text Content -->
        <div class="text-black text-[16px] font-bold leading-[1.5]  max-w-[504px] absolute">
          <p>
            Полный контроль над учебным процессом, кадрами и всей системой образования. Гибкие настройки под любые задачи.
          </p>
        </div>
      </div>
      <div class="ml-4 -mt-6 relative bg-[url('/images/svg/gos-sm.svg')] bg-no-repeat bg-contain w-[350px] h-[156px] p-6 flex md:hidden">
        <!-- Floating Label -->
        <div class="absolute bottom-4 right-[5px] z-30">
          <div class="bg-white text-[#A4CD39] font-bold text-[12px] px-6 py-2 rounded-full inset-shadow-sm shadow-xl">
            ГОСУДАРСТВЕННЫЕ УЧРЕЖДЕНИЯ
          </div>
        </div>

        <!-- Icon -->
        <img
            src="/images/svg/gos-icon.svg"
            class="absolute top-4  w-[100px] h-[100px] opacity-60"
            alt="gos icon"
        />

        <!-- Text Content -->
        <div class="text-black text-[16px] font-bold leading-[1.5] -mt-3 max-w-[300px] absolute">
          <p>
            Полный контроль над учебным процессом, кадрами и всей системой образования. Гибкие настройки под любые задачи.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
</script>