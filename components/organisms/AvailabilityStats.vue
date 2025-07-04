<template>
  <section ref="sectionRef" class="py-16 px-4 ">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-start">
      <!-- AVAILABILITY BOX -->
      <div class="flex flex-col items-center">
        <div class="bg-[#FFA41B] w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <img src="/images/svg/availability.svg" alt="availability" class="w-8 h-8" />
        </div>
        <h3 class="text-2xl font-extrabold text-[#2E2E2E]">{{ t("availability") }}</h3>
        <p class="text-gray-500 mt-2 text-sm">
          {{ t("availability_desc") }}
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
        <p class="text-gray-500 mt-2">{{ t("connected_schools") }}</p>
      </div>

      <!-- USERS BOX -->
      <div class="flex flex-col items-center">
        <div class="bg-[#FFA41B] w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <img src="/images/svg/user.svg" alt="accounts" class="w-8 h-8" />
        </div>
        <div class="text-4xl font-bold text-[#2E2E2E]">
          {{ animated && userCount < users ? (userCount + '+') : users }}
        </div>
        <p class="text-gray-500 mt-2">{{ t("registered_accounts") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const sectionRef = ref(null)
const animated = ref(false)

const schoolCount = ref(0)
const userCount = ref(0)

const schools = 47  // Replace with real data if needed
const users = 123   // Replace with real data if needed

const animateCount = (refValue, target) => {
  let current = 0
  const duration = 1500
  const stepTime = Math.max(Math.floor(duration / target), 20)

  const timer = setInterval(() => {
    current++
    refValue.value = current
    if (current >= target) {
      clearInterval(timer)
    }
  }, stepTime)
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

const { t } = useI18n({ useScope: 'local' })
</script>

<i18n lang="json">
{
  "en": {
    "availability": "Availability",
    "availability_desc": "The platform is already available to residents of the Khatlon region",
    "connected_schools": "Connected schools",
    "registered_accounts": "Registered accounts"
  },
  "ru": {
    "availability": "Доступность",
    "availability_desc": "Платформа уже доступна жителям Хатлонской области",
    "connected_schools": "Подключенные школы",
    "registered_accounts": "Зарегистрированные аккаунты"
  },
  "tj": {
    "availability": "Дастрасӣ",
    "availability_desc": "Платформа аллакай барои сокинони вилояти Хатлон дастрас аст",
    "connected_schools": "Мактабҳои пайвастшуда",
    "registered_accounts": "Ҳисобҳои ба қайд гирифташуда"
  }
}
</i18n>
