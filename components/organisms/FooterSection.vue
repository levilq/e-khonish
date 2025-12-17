<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { actions, state } from "@/assets/js/language.js";
import TJ from '@/assets/images/flags/tj.svg'
import RU from '@/assets/images/flags/ru.svg'
import GB from '@/assets/images/flags/gb.svg'

const showModal = ref(false);

function translate(key: string) {
  return actions.globalTranslate(key);
}

const labels = {
  tj: "Тоҷикӣ",
  ru: "Русский",
  en: "English",
};

const languageOptions = computed(() => [
  { code: "tj", flag: TJ, label: labels.tj },
  { code: "ru", flag: RU, label: labels.ru },
  { code: "en", flag: GB, label: labels.en },
]);

const switchLanguage = (code: string) => {
  actions.setLanguage(code);
};

function clickModal (event){
  const myDiv = document.getElementById('policy_modal');
  const footer = document.getElementById('footer_policy');
  if (!myDiv?.contains(event.target) && !footer.contains(event.target)) {
    showModal.value = false
  }
}

onMounted(() => window.addEventListener('click', clickModal))
onUnmounted(() => window.removeEventListener('click', clickModal))
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-left">
        <img src="/images/webp/logo.webp" alt="eKhonish logo" class="footer-logo" />
        <p class="footer-tagline">{{ translate("transformation_of_the_education_system") }}</p>
      </div>

      <div class="footer-social">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <img src="/images/svg/facebook.svg" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/ekhonish?igsh=MTE0cGg1NnU4aTg4cQ%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram">
          <img src="/images/svg/instagram.svg" alt="instagram" />
        </a>
        <a href="https://t.me" target="_blank" aria-label="Telegram">
          <img src="/images/svg/telegram.svg" alt="telegram" />
        </a>
      </div>
    </div>

    <hr class="footer-divider" />
    <div class="footer-bottom">
      <p class="footer-rights">© 2025, {{ translate("all_rights_reserved") }}</p>

      <div class="footer-lang" style="visibility: hidden;">
        <button
            v-for="option in languageOptions"
            :key="option.code"
            @click="switchLanguage(option.code)"
        >
          <img :src="option.flag" :alt="option.label" />
        </button>
      </div>

      <div id="footer_policy">
        <div @click="showModal = !showModal" class="cursor-pointer bh" v-if="state.selectLang === 'lang_32'">
          <span>Сиёсати Ҳифзи Маълумоти Шахсӣ</span>
        </div>
        <div @click="showModal = !showModal" class="cursor-pointer bh" v-else-if="state.selectLang === 'lang_33'">
          <span>Политика конфиденциальности</span>
        </div>
        <div @click="showModal = !showModal" class="cursor-pointer bh" v-else-if="state.selectLang === 'english'">
          <span>{{ translate('privacy_policy') }}</span>
        </div>

        <div id="policy_modal" class="policy-modal" v-if="showModal" >
          <div class="modal-solving-test-close color-secondary" @click="showModal = false">
            <i class="fa fa-times"></i>
          </div>
          <div class="block-policy txt-black">
            <div class="text-sm mt-4" style="padding: 0 40px 0 20px" v-if="state.selectLang === 'lang_33'">

              <LazyOrganismsPolicyLangRU/>
            </div>
            <div class="text-sm mt-4" style="padding: 0 40px 0 20px" v-else-if="state.selectLang === 'lang_32'">
              <LazyOrganismsPolicyLangTJ/>
            </div>
            <div class="text-sm mt-4" style="padding: 0 40px 0 20px" v-else-if="state.selectLang === 'english'">
              <LazyOrganismsPolicyLangEN/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #1e1e1e;
  padding: 3rem 1rem 1.5rem;
  font-family: "GTWalsheimPro", sans-serif;
}

.footer-top {
  max-width: 1328px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    align-items: flex-start;
  }
}

.footer-left {
  text-align: center;
}

@media (min-width: 768px) {
  .footer-left {
    text-align: left;
  }
}

.footer-logo {
  width: 200px;
  margin-bottom: 1rem;
}

.footer-tagline {
  font-size: 1rem;
  max-width: 260px;
  line-height: 1.6;
}

.footer-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
}

.footer-social img {
  width: 60px;
  height: 60px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  opacity: 0.9;
}

.footer-social img:hover {
  transform: scale(1.1);
  opacity: 1;
}

.footer-divider {
  margin: 2rem auto 1.5rem;
  border: none;
  border-top: 1px solid #ccc;
  max-width: 1328px;
}

.footer-bottom {
  max-width: 1328px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  text-align: center;
  font-size: 0.95rem;
}

.footer-rights {
  justify-self: start;
}

.footer-lang {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.footer-lang img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.footer-lang img:hover {
  transform: scale(1.15);
}

.footer-privacy {
  justify-self: end;
  background: none;
  border: none;
  color: #1e1e1e;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.footer-privacy:hover {
  color: #00cfff;
  text-decoration: underline;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal {
  background: white;
  width: 90%;
  max-width: 800px;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: #000;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: #00cfff;
}

.modal-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

/* ===== TRANSITION ===== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.modal-p{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
  z-index: 100;
}
.policy-modal {
  position: fixed;
  top: 12vh;
  left: 5%;
  right: 5%;
  margin: auto;
  max-width: 800px;
  z-index: 100;
  overflow: hidden;
  border-radius: 24px;
}

.block-policy {
  position: relative;
  right: -17px;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  max-height: 75vh;
  overflow: auto;
}

.bh:hover {
  cursor: pointer;
}
.bh:hover span{
  text-decoration: underline;
}
.txt-black{
  color: #151515;
}

.modal-solving-test-close i:hover {
  color: #c1c1c1;
}

.modal-solving-test-close {
  right: 10px;
  z-index: 10;
}
</style>
