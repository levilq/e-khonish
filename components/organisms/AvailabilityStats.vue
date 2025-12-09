<template>
  <section ref="sectionRef" class="py-16 px-4 ">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-start">
      <!-- AVAILABILITY BOX -->
      <div class="flex flex-col items-center">
        <div class="bg-[#FFA41B] w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <img src="/images/svg/availability.svg" alt="availability" class="w-8 h-8" />
        </div>
        <h3 class="text-2xl font-extrabold text-[#2E2E2E]">{{ t("availability") }}</h3>
        <p class="text-gray-500 mt-2 text-sm font-bold px-4">
          {{ t("landing_page_paragraph_22") }}
        </p>
      </div>

      <!-- SCHOOLS BOX -->
      <div class="flex flex-col items-center">
        <div class="bg-[#FFA41B] w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <img src="/images/svg/school.svg" alt="schools" class="w-8 h-8" />
        </div>
        <div class="text-4xl font-bold text-[#2E2E2E]">
          {{ animated && schoolCount < schools ? (schoolCount + '+') : schools }}
        </div>
        <p class="text-gray-500 mt-2 font-bold">{{ t("connected_schools") }}</p>
      </div>

      <!-- USERS BOX -->
      <div class="flex flex-col items-center">
        <div class="bg-[#FFA41B] w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <img src="/images/svg/user.svg" alt="accounts" class="w-8 h-8" />
        </div>
        <div class="text-4xl font-bold text-[#2E2E2E]">
          {{ animated && userCount < users ? (userCount + '+') : users }}
        </div>
        <p class="text-gray-500 mt-2 font-bold">{{ t("registered_accounts") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { globalTranslate as t } from 'assets/js/language'

import { onMounted, ref } from 'vue'

const sectionRef = ref(null)
const animated = ref(false)

const schoolCount = ref(0)
const userCount = ref(0)

const schools = 300  // Replace with real data if needed
const users = 250500   // Replace with real data if needed

const animateCount = (refValue, target) => {
  const duration = 3000 // 3 seconds
  const steps = 60      // Total animation steps (you can increase for smoother)
  const increment = Math.ceil(target / steps)
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      refValue.value = target
      clearInterval(timer)
    } else {
      refValue.value = current
    }
  }, duration / steps)
}


const observeSection = () => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.value) {
          animated.value = true
          animateCount(schoolCount, schools)
          animateCount(userCount, users)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
}

onMounted(() => {
  observeSection()
})
</script>

