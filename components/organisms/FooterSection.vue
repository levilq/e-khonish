<template>
  <footer class="text-[#1E1E1E] px-4 pt-12 pb-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
      <!-- Left: Logo and Description -->
      <div class="text-center md:text-left">
        <img src="/images/png/logo.png" alt="Khonish Logo" class="w-32 mx-auto md:mx-0 mb-4" />
        <p class="text-sm w-1/4 text-center ">{{ t("footer.tagline") }}</p>
      </div>

      <!-- Center: Social Media -->
      <div class="flex justify-center md:justify-end space-x-6">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <img src="/images/svg/facebook.svg" alt="facebook">
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <img src="/images/svg/instagram.svg" alt="instagram">
        </a>
        <a href="https://t.me" target="_blank" aria-label="Telegram">
          <img src="/images/svg/telegram.svg" alt="telegram">
        </a>
      </div>
    </div>

    <hr class="my-6 border-t border-gray-300" />

    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
      <p>© 2025, {{ t("footer.all_rights") }}</p>

      <!-- Language Switcher -->
      <div class="flex space-x-4 items-center">
        <button
            v-for="option in languageOptions"
            :key="option.code"
            @click="switchLanguage(option.code)"
        >
          <img :src="option.flag" :alt="option.label" class="w-6 h-6 rounded-full" />
        </button>
      </div>

      <!-- Right: Privacy Policy -->
      <button @click="showModal = true" class="text-sm hover:underline hover:text-blue-400 cursor-pointer">
        {{ t("footer.privacy_policy") }}
      </button>


      <!-- Privacy Modal -->
      <Transition name="fade">
        <div
            v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50  "
        >
          <div class="bg-white max-w-3xl w-full rounded-xl p-6 inset-shadow-lg  shadow relative overflow-y-auto max-h-[90vh border]">
            <button
                class="absolute top-4 right-4 text-black text-2xl font-bold cursor-pointer hover:text-blue-400"
                @click="showModal = false"
            >
              ✕
            </button>

            <h2 class="text-center font-bold text-lg md:text-xl mb-6">
              {{ t("footer.privacy_title") }}
            </h2>

            <div class="text-sm text-black space-y-4 leading-relaxed px-2">
              <p>{{ t("privacy_content_1") }}</p>
              <p>{{ t("privacy_content_2") }}</p>
              <p>{{ t("privacy_content_3") }}</p>
              <!-- Add more paragraphs as needed -->
            </div>
          </div>
        </div>
      </Transition>

    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale, locales, setLocale } = useI18n()

const flags = {
  en: '/flags/gb.svg',
  ru: '/flags/ru.svg',
  tj: '/flags/tj.svg',
}

const labels = {
  en: 'English',
  ru: 'Русский',
  tj: 'Тоҷикӣ',
}

const languageOptions = computed(() =>
    (locales.value || []).map(l => ({
      code: l.code,
      flag: flags[l.code] || '',
      label: labels[l.code] || '',
    }))
)

const switchLanguage = (code) => {
  setLocale(code)
}

const showModal = ref(false)
</script>

<i18n lang="json">
{
  "en": {
    "footer": {
      "tagline": "A smart digital platform for schools",
      "privacy_policy": "Privacy Policy",
      "all_rights": "All rights reserved"
    },
    "privacy_content_1": "This Privacy Policy (hereinafter referred to as the 'Policy') describes the procedures for collecting, processing, and storing personal information that the Public Organization “Jurat,” represented on the website www.ekhonish.tj, may receive from users while using the eKhonish Mobile Application and Website. By using the eKhonish Mobile Application and Website, you acknowledge and agree to the terms of this Policy and the processing of your personal data as described herein. If you do not agree with any part of this Policy, you should refrain from using the eKhonish Mobile Application and Website. eKhonish Administration does not control or take responsibility for the content and functionality of third-party websites that may be linked from the Website or Mobile Application, nor for any consequences arising from their use. Furthermore, the eKhonish Administration is under no obligation to verify the accuracy of the personal data provided by users.",
    "definitions": "Definitions",
    "privacy_content_2": "For the purposes of this Policy, the following terms shall have the meanings set out below: 'eKhonish Administration' — The Public Organization “Jurat,” whose authorized personnel are responsible for managing the Website and Mobile Application, processing users’ personal data, defining processing purposes and methods, and ensuring compliance with applicable laws and security standards.'Website' — A multifunctional educational ERP system designed to automate and optimize administrative and academic processes in educational institutions to improve efficiency, decision-making speed, and oversight. 'Mobile Application' or 'eKhonish Mobile Application' — A mobile application compatible with iOS and Android platforms that provides users with access to the eKhonish services. 'Personal Data' — Any information, directly or indirectly related to an individual, such as name, surname, residential address, email address, phone number, or similar identifiers. 'Processing of Personal Data' — Any operation or set of operations performed with personal data, with or without automated means, including collection, recording, systematization, storage, updating, modification, retrieval, usage, transfer, dissemination, access restriction, or deletion. 'Confidentiality of Personal Data' — The obligation of the eKhonish Administration or any authorized individual with access to personal data not to disclose it to third parties without the user’s consent, unless otherwise required by law. 'User' — Any individual who accesses and uses the Website and/or Mobile Application via the internet for personal purposes. 'Learner' — An individual officially enrolled in an educational institution for general or professional training as part of an established educational program."
  },
  "ru": {
    "footer": {
      "tagline": "умная цифровая платформа для школ",
      "privacy_policy": "Политика конфиденциальности",
      "all_rights": "Все права защищены"
    },
    "privacy_content_1": "Политика конфиденциальности персональных данных Пользователей (далее — Политика) описывает порядок сбора, обработки и хранения информации, которую Общественная Организация «Джуръат», представленная на веб-сайте www.ekhonish.tj, может получать от пользователей при использовании Мобильного приложения и Сайта eKhonish.  Использование Мобильного приложения и Сайта eKhonish. означает согласие пользователя с настоящей политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями пользователь должен воздержаться от использования Мобильного приложения и Сайта «eKhonish». Администрация eKhonish не осуществляет контроль над содержимым и функционалом сторонних сайтов, ссылки на которые могут быть размещены на Сайте или Мобильном приложении, и не несет ответственности за их работу, а также за последствия их использования Пользователем. Администрация eKhonish не несет обязательств по проверке досетоверности персональных данных, предоставляемых Пользователем при использовании Сайта и Мобильного приложения.",
    "definitions": "Определения"
  },
  "tj": {
    "footer": {
      "tagline": "Платформаи рақамии муассисаҳои таълимӣ",
      "privacy_policy": "Сиёсати махфият",
      "all_rights": "Ҳамаи ҳуқуқҳо ҳифз шудаанд"
    },
    "privacy_content_1": "Ин Сиёсати Ҳифзи Маълумоти Шахсӣ (минбаъд “Сиёсат”) тартиби ҷамъоварӣ, коркард ва нигоҳдории маълумоти шахсиро, ки аз ҷониби Ташкилоти ҷамъиятии “Ҷӯръат”, тавассути вебсайти www.ekhonish.tj ҳангоми истифодаи Барномаи Мобилӣ ва Вебсайти eKhonish гирифта мешавад, муайян мекунад. Бо истифода аз Барномаи мобилӣ ва Вебсайти eKhonish, шумо розигии худро бо шартҳои пешбинишуда дар ин Сиёсат ва бо тарзи коркарди маълумоти шахсии худ тасдиқ мекунед. Агар шумо бо ягон қисми ин Сиёсат розӣ набошед, лутфан аз истифодаи Барномаи мобилӣ ва Вебсайти eKhonish худдорӣ намоед. Маъмурияти eKhonish назорат ё масъулияти мундариҷа ва фаъолияти сомонаҳои тарафи сеюмро, ки метавонанд аз тариқи Вебсайт ё Барномаи мобилӣ пайванд дошта бошанд, ба уҳда намегирад ва барои истифодаи онҳо аз ҷониби корбар низ ҷавобгар нест. Илова бар ин, Маъмурияти eKhonish уҳдадор нест, ки дурустии маълумоти шахсии пешниҳодкардаи корбаронро тасдиқ намояд.",
    "definitions": "Мафҳумҳо"
  }
}
</i18n>

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
