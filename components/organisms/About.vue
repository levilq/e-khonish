<template>
  <section class="relative px-6 py-16 md:py-24 md:mt-14">
    <!-- Decorative Arrow -->
    <img
        src="/images/svg/green-arrow.svg"
        alt="arrow"
        class="absolute top-0 md:top-[-40px] right-1/2 translate-x-1/2 w-[100px] md:flex hidden"
    />

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Text Section -->
      <div class="relative z-10">
        <div class="absolute top-0 left-0 w-full h-full  opacity-40 rounded-lg -z-10"></div>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#005B88] mb-6 uppercase text-center md:text-left" style="font-family: 'Montserrat', sans-serif;">
          {{ t('about_us') }}
        </h2>
        <p class="text-[15px] sm:text-base text-[#1E1E1E] leading-relaxed max-w-lg font-bold">
          {{ t('about_us_desc') }}
        </p>
      </div>

      <!-- Video Player Section -->
      <div class="flex justify-center">
        <div class="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg relative">
          <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n({ useScope: 'local' })
</script>

<i18n lang="json">
{
  "en": {
    "about_us": "About Us",
    "about_us_desc": "An effective ERP platform for digital transformation of education. It unites schools, teachers, government operators and students into a single ecosystem, ensuring process transparency, automation of routine tasks and convenient access to data. The solution is scalable for any tasks - from managing a single school to monitoring an entire region."
  },
  "ru": {
    "about_us": "О нас",
    "about_us_desc": "Эффективная ERP-платформа для цифровой трансформации образования. Объединяет школы, учителей, госоператоров и учащихся в единую экосистему, обеспечивая прозрачность процессов, автоматизацию рутинных задач и удобный доступ к данным. Решение масштабируемо под любые задачи – от управления одной школой до мониторинга целого региона."
  },
  "tj": {
    "about_us": "Дар бораи мо",
    "about_us_desc": "Платформаи ERP барои табдили рақамии таҳсилот. Мактабҳо, омӯзгорон, мақомот ва хонандагонро ба як экосистемаи ягона мепайвандад. Ин шаффофияти равандҳоро таъмин мекунад, вазифаҳои маъмуриро автоматӣ мекунад ва ба маълумот дастрасии осон фароҳам меорад. Ҳалли мазкур барои ҳар гуна кор – аз идораи як мактаб то назорати минтақаи калон мутобиқ мешавад."
  }
}
</i18n>
