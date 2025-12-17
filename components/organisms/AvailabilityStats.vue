<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { globalTranslate as translate } from 'assets/js/language'

const sectionRef = ref<HTMLElement | null>(null)
const animated = ref(false)

const schoolCount = ref(0)
const userCount = ref(0)

const schools = 300
const users = 250500

const animateCount = (refValue: any, target: number) => {
  const duration = 3000
  const steps = 100
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

  if (sectionRef.value) observer.observe(sectionRef.value)
}

onMounted(() => {
  observeSection()
})
</script>

<template>
  <section ref="sectionRef" class="availability-section">
    <div class="availability-container">
      <div class="availability-item">
        <div class="icon-circle">
          <img src="/images/svg/availability.svg" alt="availability" class="icon" />
        </div>
        <h3 class="item-title">{{ translate('availability') }}</h3>
        <p class="item-desc" style="margin-top: 25px">{{ translate('landing_page_paragraph_22') }}</p>
      </div>

      <div class="availability-item">
        <div class="icon-circle">
          <img src="/images/svg/school.svg" alt="schools" class="icon" />
        </div>
        <div class="item-number">
          {{ animated && schoolCount < schools ? schoolCount : schools }}
        </div>
        <p class="item-desc">{{ translate('connected_schools') }}</p>
      </div>

      <div class="availability-item">
        <div class="icon-circle">
          <img src="/images/svg/user.svg" alt="accounts" class="icon" />
        </div>
        <div class="item-number">
          {{ animated && userCount < users ? userCount : users }}
        </div>
        <p class="item-desc">{{ translate('registered_accounts') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.availability-section {
  padding: 5rem 1rem;
  background: transparent;
}

.availability-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

@media (min-width: 768px) {
  .availability-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

.availability-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-circle {
  background-color: #ffa41b;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  width: 38px;
  height: 38px;
}

.item-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2e2e2e;
  margin-top: 10px;
}

.item-number {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2e2e2e;
}

.item-desc {
  font-size: 0.95rem;
  font-weight: 600;
  color: #6b7280;
  margin-top: 0.75rem;
  line-height: 1.6;
  text-align: center;
  max-width: 280px;
  white-space: normal;
}

@media (min-width: 1024px) {
  .item-number {
    font-size: 2.5rem;
  }
  .item-title {
    font-size: 1.75rem;
  }
}
</style>
