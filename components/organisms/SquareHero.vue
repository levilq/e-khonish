<script setup lang="ts">
import { globalTranslate as translate } from 'assets/js/language'
</script>

<template>
  <section class="for-who-section">
    <div class="top-row">
      <h2 class="title">
        {{ translate('for_who') }} <br />
        <span>{{ translate('platform') }}?</span>
      </h2>
      <img src="/images/svg/swirly-arrow.svg" alt="arrow" class="arrow-img" />
    </div>

    <div class="top-cards">
      <div class="card schools">
        <div class="label label-orange">{{ translate('schools') }}</div>
        <img src="/images/svg/school-icon.svg" class="icon-schools" alt="school icon" />
        <div class="text-schools">
          <p>{{ translate('landing_page_paragraph_1') }}</p>
          <p class="mt">{{ translate('landing_page_paragraph_2') }}</p>
        </div>
      </div>

      <div class="card girl">
        <img src="/images/webp/girl_book.webp" class="girl-img" alt="girlBook" />
      </div>

      <div class="card teachers">
        <div class="label label-blue">{{ translate('teachers') }}</div>
        <img src="/images/svg/teacher-icon.svg" class="icon-teachers" alt="teacher icon" />
        <div class="text-teachers">
          <p>{{ translate('landing_page_paragraph_3') }}</p>
          <p class="mt">{{ translate('landing_page_paragraph_4') }}</p>
        </div>
      </div>
    </div>

    <div class="bottom-row">
      <div class="card parents desktop">
        <div class="label label-cyan">{{ translate('parents') }}</div>
        <img src="/images/svg/parents-icon.svg" class="icon-parents" alt="parents icon" />
        <div class="text-parents">
          <p>{{ translate('landing_page_paragraph_5') }}</p>
        </div>
      </div>

      <div class="card parents mobile">
        <div class="label label-cyan small">{{ translate('parents') }}</div>
        <img src="/images/svg/parents-icon.svg" class="icon-parents-mobile" alt="parents icon" />
        <div class="text-parents-mobile">
          <p>{{ translate('landing_page_paragraph_5') }}</p>
        </div>
      </div>

      <div class="card government desktop">
        <div class="label label-black">{{ translate('government_institutions') }}</div>
        <img src="/images/svg/gos-icon.svg" class="icon-government" alt="gos icon" />
        <div class="text-government">
          <p>{{ translate('landing_page_paragraph_6') }}</p>
        </div>
      </div>

      <div class="card government mobile">
        <div class="label label-black small">{{ translate('government_institutions') }}</div>
        <img src="/images/svg/gos-icon.svg" class="icon-government-mobile" alt="gos icon" />
        <div class="text-government-mobile">
          <p>{{ translate('landing_page_paragraph_6') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.for-who-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding: 0;
  background: transparent;
  max-width: 1128px;
  margin: 0 auto;
}

.top-row {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
}
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1E1E1E;
  margin-bottom: 1.5rem;
}
.title span {
  color: #0077A3;
}
.arrow-img {
  display: none;
  position: absolute;
  top: -100px;
  right: 50px;
  width: 250px;
}

.top-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.card {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 375px;
  height: 250px;
  padding: 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  z-index: 1;
}

.schools {
  background-image: url('/images/svg/schools.svg');
}

.girl {
  background-image: url('/images/svg/girl-box.svg');
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: visible;
  position: relative;
  margin-top: 5rem;
  z-index: 2;
}

.girl-img {
  position: absolute;
  bottom: 6px;
  width: 90%;
  max-width: 370px;
  height: auto;
  object-fit: contain;
  z-index: 3;
}

.teachers {
  background-image: url('/images/svg/instructors.svg');
}

.parents.desktop {
  background-image: url('/images/svg/parents-box.svg');
  max-width: 552px;
  height: 156px;
  display: none;
}
.parents.mobile {
  background-image: url('/images/svg/parents-sm.svg');
  max-width: 375px;
  height: 156px;
  display: flex;
}
.government.desktop {
  background-image: url('/images/svg/gos.svg');
  max-width: 552px;
  height: 156px;
  display: none;
}
.government.mobile {
  background-image: url('/images/svg/gos-sm.svg');
  max-width: 375px;
  height: 156px;
  display: flex;
}

.label {
  position: absolute;
  background: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  font-size: 18px;
  letter-spacing: 0.5px;
  z-index: 5;
}
.label-orange {
  color: #FFA41B;
  top: -0.10rem;
  left: 0.75rem;
}
.label-blue {
  color: #085b80;
  top: -0.10rem;
  right: 0.75rem;
}
.label-cyan {
  color: #00B8E7;
  top: -1rem;
  right: 2.5rem;
}
.label-black {
  color: #000;
  bottom: 0.5rem;
  right: 0.75rem;
  text-transform: uppercase;
}
.label.small {
  font-size: 12px;
  padding: 0.75rem 1.5rem;
}

.icon-schools,
.icon-teachers,
.icon-parents,
.icon-parents-mobile,
.icon-government,
.icon-government-mobile {
  position: absolute;
  width: 85px;
  height: 85px;
  opacity: 0.6;
}

.icon-schools {
  top: 1.2rem;
  right: 1.2rem;
}

.icon-teachers {
  top: 4rem;
  right: 1.2rem;
}

.icon-parents {
  top: 3rem;
  right: 1rem;
}

.icon-parents-mobile {
  top: 1rem;
  right: 1rem;
}

.icon-government {
  top: 12px;
  right: 1rem;
}

.icon-government-mobile {
  top: 1rem;
  right: 1rem;
}

.text-schools {
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  color: #1E1E1E;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  max-width: 310px;
}
.text-schools .mt {
  margin-top: 0.5rem;
}

.text-teachers {
  position: absolute;
  margin-top: 30px;
  left: 1.2rem;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  max-width: 310px;
}
.text-teachers .mt {
  margin-top: 0.5rem;
}

.text-parents {
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  color: white;
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.5;
  max-width: 460px;
}
.text-parents-mobile {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  max-width: 300px;
}

.text-government {
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  color: #1E1E1E;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  max-width: 480px;
}
.text-government-mobile {
  position: absolute;
  top: 1.2rem;
  left: 1rem;
  color: #1E1E1E;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  max-width: 300px;
}

.bottom-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  position: relative;
  bottom: 1rem;
}

/* Tablet and Desktop */
@media (min-width: 768px) {
  .for-who-section {
    padding: 0 1rem;
  }

  .top-row {
    flex-direction: row;
    align-items: center;
  }

  .title {
    text-align: left;
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  .arrow-img {
    display: block;
  }

  .top-cards {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 6rem;
  }

  .girl {
    margin-top: 0;
  }

  .parents.desktop,
  .government.desktop {
    display: flex;
  }

  .parents.mobile,
  .government.mobile {
    display: none;
  }

  .bottom-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    bottom: 0;
  }
}

@media (min-width: 1024px) {
  .top-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile specific adjustments */
@media (max-width: 767px) {
  .for-who-section {
    padding: 0;
  }

  .top-row {
    padding-top: 2rem;
    margin-top: 3rem;
  }

  .title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .top-cards {
    gap: 1rem;
  }

  .card {
    max-width: 100%;
    height: 230px;
  }

  .card.schools {
    z-index: 1;
  }

  .girl {
    margin-top: 8rem;
    z-index: 2;
    overflow: visible;
  }

  .girl-img {
    z-index: 3;
  }

  .card.teachers {
    margin-top: 3rem;
    z-index: 1;
  }

  .label {
    font-size: 14px;
    padding: 0.4rem 1.2rem;
  }

  .label.small {
    font-size: 11px;
    padding: 0.5rem 1.2rem;
  }

  .text-schools,
  .text-teachers {
    font-size: 13px;
    max-width: 90%;
  }

  .text-parents-mobile,
  .text-government-mobile {
    font-size: 11px;
    max-width: 85%;
  }
}
</style>