<template>
  <section class="py-9 px-4">
    <div class="grid gap-6 md:grid-cols-3 font-bold">
      <!-- Card 1 -->
      <div class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-1.svg" alt="icon 1" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('platform_enables')}}
        </p>
      </div>

      <!-- Card 2 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-2.svg" alt="icon 2" class="w-9 h-9"/>
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
            {{t('career')}}
        </p>
      </div>

      <!-- Card 3 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-3.svg" alt="icon 3" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('online')}}
        </p>
      </div>

      <!-- Card 4 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-4.svg" alt="icon 4" class="w-9 h-9"/>
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('platform_teacher')}}
        </p>
      </div>

      <!-- Card 5 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-5.svg" alt="icon 5" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('modules')}}
        </p>
      </div>

      <!-- Card 6 -->
      <div class="group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
        <div class="flex justify-center mb-4">
          <div class="bg-[#00587A] w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src="/images/svg/features/icon-6.svg" alt="icon 6" class="w-9 h-9" />
          </div>
        </div>
        <p class="text-sm text-[#1E1E1E] leading-relaxed">
          {{t('unified')}}
        </p>
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
    "platform_enables": "The platform enables the exchange of information between schools, parents and students, with a focus on transparency and efficiency.",
    "career": "Career guidance and an individual learning path for every student",
    "online": "Online access to video lessons, tests, library, schedule, and progress — anytime, anywhere",
    "platform_teacher": "Platform for teacher professional development — regular online training and certification",
    "modules": "Modules for students, parents, and teachers for more convenient and flexible management",
    "unified": "A unified digital ecosystem for all education participants"
  },
  "ru": {
    "platform_enables": "Платформа обеспечивает обмен информацией между школами, родителями и учениками, уделяя особое внимание прозрачности и оперативности",
    "career": "Профориентация и индивидуальная образовательная траектория каждого ученика",
    "online": "Онлайн доступ к видеоурокам, тестам, библиотеке, расписанию и прогрессу из любого места в любое время",
    "platform_teacher": "Платформа для повышения квалификации педагогов – регулярное онлайн-обучение и сертификация",
    "modules": "Модули для учащихся, родителей, учителей, для более удобного и гибкого управления",
    "unified": "Единая цифровая экосистема для всех участников образования"
  },
  "tj": {
    "platform_enables": "Он мубодилаи самараноки иттилоот байни мактабҳо, волидайн ва хонандагонро таъмин намуда, ба шаффофият ва сари вақт иҷро шудани ин ё он кор диққати хоса медиҳад",
    "career": "Мусоидат ба интихоби касб ва муайянсозии масири шахсии таълимии ҳар як донишомӯз",
    "online": "Дастрасии фосилавии фаврӣ ба дарсҳои видеоӣ, санҷишҳои тестӣ, китобхона ва ҷадвали дарсҳо",
    "platform_teacher": "Такмили ихтисоси омӯзгорон бо фароҳам овардани омӯзиши касбии фосилавӣ",
    "modules": "Дастрас намудани модулҳо барои хонандагон, волидайн ва муаллимон барои идоракунии осон",
    "unified": "Муҳити ягонаи рақамӣ барои ҳамкории хонандагон, омӯзгорон, волидайн ва маъмурият"
  }
}
</i18n>