<template>
  <div class="max-w-[1128px] mx-auto p-4">
    <h2 class="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] md:text-left mb-6 md:mb-0">
      {{ t('possibilities') }} <br />
      <span class="text-[#0077A3]">{{ t('platforms') }}?</span>
    </h2>

    <div class="space-y-4 mt-10">
      <!-- Row 1 -->
      <div class="flex flex-col lg:flex-row gap-4 transition-all duration-500">
        <!-- Card 0 -->
        <div
            :class="[
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer',
            getCardSize(0),
            'bg-gradient-to-tr from-[#005A83] to-[#3F6171] text-white'
          ]"
            @mouseenter="expandCard(0)"
        >
          <Transition name="fade" mode="out-in">
            <div key="card-0">
              <h2 class="text-3xl font-bold mt-5">{{ t('e_gradebook') }}</h2>
              <img class="absolute" src="/images/webp/2-card-blue.webp" alt="gradebook-bg" />

              <div v-if="isExpanded(0) || !isLargeScreen" class="flex flex-col lg:flex-row">
                <div class="md:mt-[90px]">
                  <p class="text-md mt-4 font-bold">
                    {{ t('landing_page_paragraph_14') }}
                  </p>
                  <p class="text-xs mt-2">
                    {{ t('landing_page_paragraph_15') }}
                  </p>
                </div>

                <img
                    v-if="isExpanded(0) || !isLargeScreen"
                    class="h-[280px] -mr-9"
                    src="/images/webp/electronic-gradebook.webp"
                    alt="gradebook-img"
                />
              </div>
            </div>
          </Transition>
        </div>

        <!-- Card 1 -->
        <div
            :class="[
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer',
            getCardSize(1),
            'bg-gradient-to-br from-[#B9F250] to-[#D3F691] text-black'
          ]"
            @mouseenter="expandCard(1)"
        >
          <Transition name="fade" mode="out-in">
            <div key="card-1">
              <h2 class="text-3xl font-bold mt-5 text-right">{{ t('parents_visibility') }}</h2>
              <img class="absolute right-0" src="/images/webp/2-card-blue.webp" alt="parents-bg" />

              <div v-if="isExpanded(1) || !isLargeScreen" class="flex flex-col lg:flex-row">

                <img
                    v-if="isExpanded(1) || !isLargeScreen"
                    class="h-[280px] md:-ml-[70px]"
                    src="/images/webp/communication_parents.webp"
                    alt="parents-img"
                />

                <div class="md:mt-[140px]">
                  <p class="text-md mt-4 font-extrabold">
                    {{ t('landing_page_paragraph_18') }}
                  </p>
                  <p class="text-xs mt-4">
                    {{ t('landing_page_paragraph_19') }}
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
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer',
            getCardSize(2),
            'bg-gradient-to-br from-[#FF9D00] to-[#EEBB6A] text-black'
          ]"
            @mouseenter="expandCard(2)"
        >
          <Transition name="fade" mode="out-in">
            <div key="card-2">
              <h2 class="text-3xl font-bold mt-5">{{ t('e_library') }}</h2>
              <img class="absolute opacity-30" src="/images/webp/3-card-orange.webp" alt="lib-bg" />

              <div v-if="isExpanded(2) || !isLargeScreen" class="flex flex-col lg:flex-row z-10">

                <div class="md:mt-[100px]">
                  <p class="text-md mt-4 font-bold">
                    {{ t('landing_page_paragraph_16') }}
                  </p>
                  <p class="text-xs mt-4">
                    {{ t('landing_page_paragraph_17') }}
                  </p>
                </div>

                <img
                    v-if="isExpanded(2) || !isLargeScreen"
                    class="h-[280px] -mr-9"
                    src="/images/webp/e-library.webp"
                    alt="library-img"
                />
              </div>
            </div>
          </Transition>
        </div>

        <!-- Card 3 -->
        <div
            :class="[
            'relative rounded-[20px] shadow-md overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer',
            getCardSize(3),
            'bg-gradient-to-br from-[#00B8E7] to-[#006781] text-white'
          ]"
            @mouseenter="expandCard(3)"
        >
          <Transition name="fade" mode="out-in">
            <div key="card-3">
              <h2 class="text-3xl font-bold mt-5 text-right">{{ t('integration_app') }}</h2>
              <img class="absolute right-0 opacity-40" src="/images/webp/4-card-blue.webp" alt="apps-bg" />

              <div v-if="isExpanded(3) || !isLargeScreen" class="flex flex-col lg:flex-row">

                <img
                    v-if="isExpanded(3) || !isLargeScreen"
                    class="h-[280px] pr-[20px]"
                    src="/images/webp/apps_img.webp"
                    alt="apps-img"
                />

                <div class="md:mt-[140px]">
                  <p class="text-md mt-4 font-extrabold">
                    {{ t('landing_page_paragraph_20') }}
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
import { globalTranslate as t } from 'assets/js/language'
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
