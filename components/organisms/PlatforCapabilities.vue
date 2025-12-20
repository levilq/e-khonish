<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { globalTranslate as translate } from 'assets/js/language'

const expandedCard = ref(0)
const isLargeScreen = ref(false)

// Expand card on hover
const expandCard = (index: number) => {
  expandedCard.value = index
}

// Reset to default (card 0 expanded)
const collapseCards = () => {
  expandedCard.value = 0
}

const isExpanded = (index: number) => expandedCard.value === index

const getCardSize = (index: number) => {
  const isTopRow = index === 0 || index === 1
  const isBottomRow = index === 2 || index === 3
  const isCurrentRow =
      (isTopRow && expandedCard.value <= 1) ||
      (isBottomRow && expandedCard.value >= 2)

  if (!isLargeScreen.value) return 'card-full'
  if (isExpanded(index)) return 'card-expanded'
  return isCurrentRow ? 'card-medium' : 'card-small'
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

<template>
  <div class="possibilities-section">
    <div class="possibilities-container">
      <h2 class="title">
        {{ translate('possibilities') }} <br />
        <span class="highlight">{{ translate('platforms') }}?</span>
      </h2>

      <div class="cards-wrapper">
        <!-- TOP ROW -->
        <div class="cards-row top-row">

          <!-- CARD 0 -->
          <div
              :class="['card', 'card-blue', getCardSize(0)]"
              @mouseenter="isLargeScreen && expandCard(0)"
              @mouseleave="isLargeScreen && collapseCards()"
          >
            <Transition name="fade" mode="out-in">
              <div key="card-0" class="card-inner">
                <h2 class="card-title">{{ translate('e_gradebook') }}</h2>
                <img class="card-bg" src="/images/webp/2-card-blue.webp" alt="bg" />

                <div v-if="isExpanded(0) || !isLargeScreen" class="card-content">
                  <div class="card-text">
                    <p class="desc-strong">{{ translate('landing_page_paragraph_14') }}</p>
                    <p class="desc-small">{{ translate('landing_page_paragraph_15') }}</p>
                  </div>
                  <img class="card-img" src="/images/webp/electronic-gradebook.webp" alt="" />
                </div>
              </div>
            </Transition>
          </div>

          <!-- CARD 1 -->
          <div
              :class="['card', 'card-green', getCardSize(1)]"
              @mouseenter="isLargeScreen && expandCard(1)"
              @mouseleave="isLargeScreen && collapseCards()"
          >
            <Transition name="fade" mode="out-in">
              <div key="card-1" class="card-inner">
                <h2 class="card-title text-right">{{ translate('parents_visibility') }}</h2>
                <img class="card-bg right" src="/images/webp/2-card-blue.webp" alt="bg" />

                <div v-if="isExpanded(1) || !isLargeScreen" class="card-content">
                  <img class="card-img-left" src="/images/webp/communication_parents.webp" alt="" />
                  <div class="card-text">
                    <p class="desc-strong">{{ translate('landing_page_paragraph_18') }}</p>
                    <p class="desc-small">{{ translate('landing_page_paragraph_19') }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

        </div>

        <!-- BOTTOM ROW -->
        <div class="cards-row bottom-row">

          <!-- CARD 2 -->
          <div
              :class="['card', 'card-orange', getCardSize(2)]"
              @mouseenter="isLargeScreen && expandCard(2)"
              @mouseleave="isLargeScreen && collapseCards()"
          >
            <Transition name="fade" mode="out-in">
              <div key="card-2" class="card-inner">
                <h2 class="card-title">{{ translate('e_library') }}</h2>
                <img class="card-bg" src="/images/webp/3-card-orange.webp" alt="bg" />

                <div v-if="isExpanded(2) || !isLargeScreen" class="card-content">
                  <div class="card-text">
                    <p class="desc-strong">{{ translate('landing_page_paragraph_16') }}</p>
                    <p class="desc-small">{{ translate('landing_page_paragraph_17') }}</p>
                  </div>
                  <img class="card-img" src="/images/webp/e-library.webp" alt="" />
                </div>
              </div>
            </Transition>
          </div>

          <!-- CARD 3 -->
          <div
              :class="['card', 'card-cyan', getCardSize(3)]"
              @mouseenter="isLargeScreen && expandCard(3)"
              @mouseleave="isLargeScreen && collapseCards()"
          >
            <Transition name="fade" mode="out-in">
              <div key="card-3" class="card-inner">
                <h2 class="card-title text-right">{{ translate('integration_app') }}</h2>
                <img class="card-bg right" src="/images/webp/4-card-blue.webp" alt="bg" />

                <div v-if="isExpanded(3) || !isLargeScreen" class="card-content">
                  <img class="card-img-left" src="/images/webp/apps_img.webp" alt="" />
                  <div class="card-text">
                    <p class="desc-strong">{{ translate('landing_page_paragraph_20') }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.possibilities-section {
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

.possibilities-container {
  max-width: 1128px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1E1E1E;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}

.highlight {
  color: #0077A3;
}

.cards-wrapper {
  margin-top: 2.5rem;
  width: 100%;
  box-sizing: border-box;
}

.cards-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.5s ease;
  width: 100%;
  box-sizing: border-box;
}

.cards-row.bottom-row {
  margin-top: 1rem;
}

.card {
  position: relative;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s ease;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.card-inner {
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.card-blue {
  background: linear-gradient(to top right, #005A83, #3F6171);
}
.card-green {
  background: linear-gradient(to bottom right, #B9F250, #D3F691);
  color: #000;
}
.card-orange {
  background: linear-gradient(to bottom right, #FF9D00, #EEBB6A);
  color: #000;
}
.card-cyan {
  background: linear-gradient(to bottom right, #00B8E7, #006781);
}

.card-full {
  width: 100%;
  height: auto;
  min-height: 300px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  word-wrap: break-word;
}

.text-right {
  text-align: right;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.25;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.card-bg.right {
  right: 0;
  left: auto;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  margin-top: 1rem;
  width: 100%;
}

.card-text {
  margin-top: 1rem;
  width: 100%;
  word-wrap: break-word;
}

.desc-strong {
  font-weight: 700;
  font-size: 0.95rem;
  margin-top: 1rem;
  margin-bottom: 0;
  word-wrap: break-word;
}

.desc-small {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  line-height: 1.4;
  word-wrap: break-word;
}

.card-img,
.card-img-left {
  max-height: 220px;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 1rem auto 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Tablet */
@media (min-width: 768px) {
  .possibilities-container {
    padding: 0 32px;
  }

  .title {
    text-align: left;
    font-size: 2.5rem;
  }

  .card-inner {
    padding: 1.75rem;
  }

  .card-title {
    font-size: 1.75rem;
  }

  .desc-strong {
    font-size: 1rem;
  }

  .desc-small {
    font-size: 0.85rem;
  }

  .card-img,
  .card-img-left {
    max-height: 250px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .possibilities-container {
    padding: 0;
  }

  .title {
    font-size: 3rem;
  }

  .cards-row {
    flex-direction: row;
    gap: 1rem;
  }

  .card-expanded {
    width: 744px;
    height: 381px;
  }

  .card-medium {
    width: 552px;
    height: 381px;
  }

  .card-small {
    width: 552px;
    height: 220px;
  }

  .card-inner {
    padding: 1.5rem;
  }

  .card-content {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0;
  }

  .card-img {
    margin-right: -9px;
    margin-left: 0;
    margin-top: 0;
    max-height: 280px;
  }

  .card-img-left {
    margin-left: -70px;
    margin-right: 0;
    margin-top: 0;
    max-height: 280px;
  }
}

/* Mobile specific */
@media (max-width: 767px) {
  .possibilities-section {
    overflow-x: hidden;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .cards-wrapper {
    margin-top: 1.5rem;
  }

  .card {
    min-height: 280px;
    border-radius: 16px;
    margin: 0;
  }

  .card-inner {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .desc-strong {
    font-size: 0.85rem;
  }

  .desc-small {
    font-size: 0.75rem;
    line-height: 1.3;
  }

  .card-img,
  .card-img-left {
    max-height: 160px;
    max-width: 95%;
  }

  .card-text {
    margin-top: 0.5rem;
  }
}
</style>