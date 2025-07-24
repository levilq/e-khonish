<template>
  <div class="max-w-[1128px] mx-auto p-4">
    <h2 class="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] md:text-left mb-6 md:mb-0">
      {{ t('possibilities') }} <br />
      <span class="text-[#0077A3]">{{ t('platformss') }}?</span>
    </h2>
    <div class="space-y-4 mt-10">
      <!-- Row 1 -->
      <div class="flex flex-col lg:flex-row gap-4 transition-all duration-500">
        <!-- Card 0 -->
        <div
            :class="[
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500',
            getCardSize(0),
            'bg-gradient-to-tr from-[#005A83] to-[#3F6171] text-white'
          ]"
        >
          <button
              v-if="isLargeScreen && expandedCard !== 0"
              class="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow"
              @click.stop="expandCard(0)"
          >↗</button>

          <Transition name="fade" mode="out-in">
            <div key="card-0">
              <h2 class="text-3xl font-bold mt-5 ">{{t('e_gradebook')}}</h2>
              <img class="absolute" src="/images/png/2-card-blue.png" alt="as">

              <div v-if="isExpanded(0) || !isLargeScreen" class="flex flex-col lg:flex-row">
                <div class="md:mt-[90px]">
                  <p class="text-md mt-4 font-bold">
                    {{t('e_gradebook_desc1')}}
                  </p>
                  <p class="text-xs mt-2">
                    {{t('e_gradebook_desc2')}}
                  </p>
                </div>
                <img v-if="isExpanded(0) || !isLargeScreen" class="h-[280px] -mr-9" src="/images/png/electronic-gradebook.png" alt="as">
              </div>
            </div>
          </Transition>
        </div>

        <!-- Card 1 -->
        <div
            :class="[
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500',
            getCardSize(1),
            'bg-gradient-to-br from-[#B9F250] to-[#D3F691] text-black'
          ]"
        >
          <button
              v-if="isLargeScreen && expandedCard !== 1"
              class="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow"
              @click.stop="expandCard(1)"
          >↗</button>
          <Transition name="fade" mode="out-in">
            <div key="card-1">
              <h2 class="text-3xl font-bold mt-5 text-right">{{t('commun_parents')}}</h2>
              <img class="absolute right-0" src="/images/png/2-card-blue.png" alt="as">
              <div v-if="isExpanded(1) || !isLargeScreen" class="flex flex-col lg:flex-row">
                <img v-if="isExpanded(1) || !isLargeScreen" class="h-[280px]  md:-ml-[70px]" src="/images/png/communication_parents.png" alt="as">
                <div class="md:mt-[140px]">
                  <p class="text-md mt-4 font-extrabold">
                    {{t('commun_parents_desc1')}}
                  </p>
                  <p class="text-xs mt-4">
                    {{t('commun_parents_desc2')}}
                  </p>
                </div>

              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="flex flex-col lg:flex-row gap-4 transition-all duration-500">
        <!-- Card 2 -->
        <div
            :class="[
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500',
            getCardSize(2),
            'bg-gradient-to-br from-[#FF9D00] to-[#EEBB6A] text-black'
          ]"
        >
          <button
              v-if="isLargeScreen && expandedCard !== 2"
              class="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow"
              @click.stop="expandCard(2)"
          >↗</button>
          <Transition name="fade" mode="out-in">
            <div key="card-2">
              <h2 class="text-3xl font-bold mt-5 ">{{t('e_library')}}</h2>
              <img class="absolute opacity-30" src="/images/png/3-card-orange.png" alt="as">

              <div v-if="isExpanded(2) || !isLargeScreen" class="flex flex-col lg:flex-row z-10">
                <div class="md:mt-[100px]">
                  <p class="text-md mt-4 font-bold">
                    {{t('e_library_desc1')}}
                  </p>
                  <p class="text-xs mt-4">
                    {{t('e_library_desc2')}}
                  </p>
                </div>
                <img v-if="isExpanded(2) || !isLargeScreen" class="h-[280px] -mr-9" src="/images/png/e-library.png" alt="as">
              </div>
            </div>
          </Transition>
        </div>

        <!-- Card 3 -->
        <div
            :class="[
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500',
            getCardSize(3),
            'bg-gradient-to-br from-[#00B8E7] to-[#006781] text-white'
          ]"
        >
          <button
              v-if="isLargeScreen && expandedCard !== 3"
              class="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow"
              @click.stop="expandCard(3)"
          >↗</button>
          <Transition name="fade" mode="out-in">
            <div key="card-3">
              <h2 class="text-3xl font-bold mt-5 text-right">{{t('integration_app')}}</h2>
              <img class="absolute right-0 opacity-40" src="/images/png/4-card-blue.png" alt="as">
              <div v-if="isExpanded(3) || !isLargeScreen" class="flex flex-col lg:flex-row">
                <img v-if="isExpanded(3) || !isLargeScreen" class="h-[280px] pr-[20px]" src="/images/png/apps_img.png" alt="as">
                <div class="md:mt-[140px]">
                  <p class="text-md mt-4 font-extrabold">
                    {{t('integration_app_desc1')}}
                  </p>
                  <p class="text-xs mt-4">
                    {{t('integration_app_desc2')}}
                  </p>
                </div>

              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const { t } = useI18n()
const expandedCard = ref(0)
const isLargeScreen = ref(false)

const expandCard = (index: number) => {
  expandedCard.value = index
}

const isExpanded = (index: number) => expandedCard.value === index

const getCardSize = (index: number) => {
  const isTopRow = index === 0 || index === 1
  const isBottomRow = index === 2 || index === 3
  const isCurrentRow =
      (isTopRow && expandedCard.value <= 1) ||
      (isBottomRow && expandedCard.value >= 2)

  if (!isLargeScreen.value) return 'w-full h-auto'
  if (isExpanded(index)) return 'w-[744px] h-[381px]'
  return isCurrentRow ? 'w-[552px] h-[381px]' : 'w-[552px] h-[220px]'
}

const updateScreen = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  updateScreen()
  window.addEventListener('resize', updateScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreen)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<i18n lang="json">
{
  "en": {
    "possibilities": "Platform",
    "platformss": "capabilities",
    "e_gradebook": "Electronic gradebook and diary. Online homework assignments",
    "e_gradebook_desc1": "Everything at your fingertips — grades, assignments, teacher comments.",
    "e_gradebook_desc2": "No more searching for the paper diary or trying to remember what was assigned. All grades and tasks are just one click away.",
    "e_library": "Electronic library",
    "e_library_desc1": "Textbooks and books always at hand",
    "e_library_desc2": "No more searching for the paper diary or trying to remember assignments. All grades and tasks are just one click away",
    "commun_parents": "Communication with parents",
    "commun_parents_desc1": "Parents stay informed about everything",
    "commun_parents_desc2": "Attendance, behavior, and performance — parents receive real-time notifications. No surprises at parent meetings",
    "integration_app": "Integration with Ministry of Education systems",
    "integration_app_desc1": "Mobile app for parents and students",
    "integration_app_desc2": ""
  },
  "ru": {
    "possibilities": "Возможности",
    "platformss": "платформы",
    "e_gradebook": "Электронный журнал и дневник. Домашние задания онлайн",
    "e_gradebook_desc1": "Все под рукой - оценки, задания, комментарии учителей",
    "e_gradebook_desc2": "Больше не нужно искать бумажный дневник или вспоминать, что задали. Все оценки и задания - в одном клике.",
    "e_library": "Электронная библиотека",
    "e_library_desc1": "Учебники и книги - всегда с собой",
    "e_library_desc2": "Цифровая библиотека позволяет получать доступ к нужным материалам из любого устройства. Не нужно таскать тяжелый рюкзак!",
    "commun_parents": "Коммуникация с родителями",
    "commun_parents_desc1": "Родители в курсе всего",
    "commun_parents_desc2": "Посещаемость, поведение, успеваемость - родители получают уведомления в реальном времени. Без сюрпризов на родительском собрании.",
    "integration_app": "Интеграция с системами Министерства Образования",
    "integration_app_desc1": "Мобильное приложение для родителей/учеников",
    "integration_app_desc2": ""
  },
  "tj": {
    "possibilities": "Имкониятҳои асосии",
    "platformss": "низоми электронӣ",
    "e_gradebook": "Журнали электронӣ ва вазифаҳои хонагӣ ба тариқи фосилавӣ",
    "e_gradebook_desc1": "Баҳоҳо, вазифаҳо ва шарҳҳои омӯзгор – ҳама дар як низоми идоракунӣ",
    "e_gradebook_desc2": "Дигар ниёзе ба дафтари коғазӣ нест. Ҳамаи маълумоти таълим, аз ҷумла натиҷаҳои дарс ва супоришҳои хонагӣ бо як пахш дастрас мебошанд. Ин усул шаффофиятро таъмин намуда, ҳамкории муассир байни омӯзгор, хонанда ва волидайнро фароҳам месозад",
    "e_library": "Китобхонаи электронӣ",
    "e_library_desc1": "Китобҳои таълимӣ ҳамешасабз дастрас ҳастанд",
    "e_library_desc2": "Бо китобхонаи рақамӣ аз ҳар дастгоҳ ба маводи таълимӣ дастрасӣ пайдо мекунед ва дигар зарурат ба бурдану кашодани ҷузвдонҳои вазнин нест!",
    "commun_parents": "Муошират бо волидайн",
    "commun_parents_desc1": "Волидайн ҳамеша дар раванди таълим дар ҷараён ҳастанд",
    "commun_parents_desc2": "Маълумот дар бораи қайди давомот, рафтор ва натиҷаҳои таълим ба волидайн дар вақти воқеӣ мерасад ва шакку шубҳаро дар волидайн оиди пешравии фарзанд барҳам медиҳад",
    "integration_app": "Ҳамгироӣ бо низомҳои Вазорати маориф.",
    "integration_app_desc1": "Пайвастшавии мустақим бо низоми ягонаи давлатӣ ва дастрасии осон тавассути замимаи мобилӣ",
    "integration_app_desc2": ""
  }
}
</i18n>