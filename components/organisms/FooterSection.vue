<template>
  <footer class="text-[#1E1E1E] px-4 pt-12 pb-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
      <!-- Left: Logo and Description -->
      <div class="text-center md:text-left">
        <img src="/images/png/logo.png" alt="Khonish Logo" class="w-32 mx-auto md:mx-0 mb-4 md:ml-9" />
        <p class="text-sm w-[200px] text-center mx-auto md:mx-0 ">{{ t("footer.tagline") }}</p>
      </div>

      <!-- Center: Social Media -->
      <div class="flex justify-center md:justify-end space-x-3 md:space-x-2 my-auto cursor-pointer">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <img src="/images/svg/facebook.svg" alt="facebook">
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <img src="/images/svg/instagram.svg" alt="instagram">
        </a>
        <a href="https://t.me" target="_blank" aria-label="Telegram">
          <img src="/images/svg/telegram.svg" class="mt-[3px]" alt="telegram">
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
          <img :src="option.flag" :alt="option.label" class="w-6 h-6 rounded-full cursor-pointer" />
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

            <div class="text-sm text-black space-y-4 leading-relaxed px-2 h-[400px] overflow-y-auto">
              <p  class="whitespace-pre-line">{{ t("privacy_content_1") }}</p>
              <span class="font-bold text-lg">{{ t("definitions") }}</span>
              <p>{{ t("for_the_purposes") }}</p>
              <ul class="list-disc pl-6">
                <li>{{ t("administration") }}</li>
                <li>{{ t("website") }}</li>
                <li>{{ t("mobile_application") }}</li>
                <li>{{ t("personal_data") }}</li>
                <li>{{ t("processing_personal_data") }}</li>
                <li>{{ t("confidentiality_personal_data") }}</li>
                <li>{{ t("user") }}</li>
                <li>{{ t("learner") }}</li>
              </ul>
              <span class="font-bold text-lg">{{ t("scope_of_policy") }}</span>
              <p>{{ t("policy_obligations") }}</p>
              <p>{{ t("personal_data_intro") }}</p>
              <p class="whitespace-pre-line">{{ t("personal_data_list") }}</p>
              <span class="font-bold text-lg">{{ t("purposes_of_personal_data") }}</span>
              <p class="whitespace-pre-line">{{ t("purposes_of_personal_data_list") }}</p>
              <span class="font-bold text-lg">{{ t("methods_and_duration_title") }}</span>
              <p class="whitespace-pre-line">{{ t("methods_and_duration_content") }}</p>
              <span class="font-bold text-lg">{{ t("responsibilities_title") }}</span>
              <p class="whitespace-pre-line">{{ t("responsibilities_content") }}</p>
              <span class="font-bold text-lg">{{ t("dispute_resolution_title") }}</span>
              <p class="whitespace-pre-line">{{ t("dispute_resolution_content") }}</p>
<!--              <span class="font-bold text-lg whitespace-pre-line">{{ t("additional_provisions_title") }}</span>-->
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
  tj: '/flags/tj.svg',
  ru: '/flags/ru.svg',
  en: '/flags/gb.svg',

}

const labels = {
  tj: 'Тоҷикӣ',
  ru: 'Русский',
  en: 'English',

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
      "privacy_title": "Privacy Policy",
      "tagline": "Transformation of the education system",
      "privacy_policy": "Privacy Policy",
      "all_rights": "All rights reserved"
    },
    "privacy_content_1": "This Privacy Policy (hereinafter referred to as the 'Policy') describes the procedures for collecting, processing, and storing personal information that the Public Organization “Jurat,” represented on the website www.ekhonish.tj, may receive from users while using the eKhonish Mobile Application and Website. By using the eKhonish Mobile Application and Website, you acknowledge and agree to the terms of this Policy and the processing of your personal data as described herein. If you do not agree with any part of this Policy, you should refrain from using the eKhonish Mobile Application and Website. eKhonish Administration does not control or take responsibility for the content and functionality of third-party websites that may be linked from the Website or Mobile Application, nor for any consequences arising from their use. Furthermore, the eKhonish Administration is under no obligation to verify the accuracy of the personal data provided by users.",
    "definitions": "Definitions",
    "for_the_purposes": "For the purposes of this Policy, the following terms shall have the meanings set out below",
    "administration": "'eKhonish Administration' — The Public Organization 'Jurat', whose authorized personnel are responsible for managing the Website and Mobile Application, processing users’ personal data, defining processing purposes and methods, and ensuring compliance with applicable laws and security standards.",
    "website": "'Website' — A multifunctional educational ERP system designed to automate and optimize administrative and academic processes in educational institutions to improve efficiency, decision-making speed, and oversight.",
    "mobile_application": "'Mobile Application' or 'eKhonish Mobile Application' — A mobile application compatible with iOS and Android platforms that provides users with access to the eKhonish services.",
    "personal_data": "'Personal Data' — Any information, directly or indirectly related to an individual, such as name, surname, residential address, email address, phone number, or similar identifiers.",
    "processing_personal_data": "'Processing of Personal Data' — Any operation or set of operations performed with personal data, with or without automated means, including collection, recording, systematization, storage, updating, modification, retrieval, usage, transfer, dissemination, access restriction, or deletion.",
    "confidentiality_personal_data": "'Confidentiality of Personal Data' — The obligation of the eKhonish Administration or any authorized individual with access to personal data not to disclose it to third parties without the user’s consent, unless otherwise required by law.",
    "user": "'User' — Any individual who accesses and uses the Website and/or Mobile Application via the internet for personal purposes.",
    "learner": "'Learner' — An individual officially enrolled in an educational institution for general or professional training as part of an established educational program.",
    "scope_of_policy": "Scope of the Policy",
    "policy_obligations": "This Policy outlines the obligations of the eKhonish Administration to protect users’ personal data and maintain its confidentiality. The data is provided by users during registration or through continued use of the Website and Mobile Application.",
    "personal_data_intro": "The personal data subject to processing includes, but is not limited to:",
    "personal_data_list": "• Full name of the User\n• Contact phone number\n• Email address (if available)\n\nThe system may also process additional data provided by educational institutions to support the ERP system’s functionality, including:\n• Learner’s photograph\n• Gender\n• Date of birth\n• Residential address and contact details\n• Academic records (admission date, academic performance, type of education, grade level, extracurricular activities, year-end evaluations)\n\nAdditionally, eKhonish Administration collects technical data during the use of the Website and Mobile Application, such as:\n• IP address of the device\n• Cookie data\n• Access timestamps\n• Visited URLs\n• Referrer data (previous page URL)\nPlease note that disabling cookies may restrict access to certain features of the Website or Mobile Application that require user authentication. IP address statistics may be collected for technical diagnostics and to ensure the security of financial transactions related to the services provided.\n All other personal data not explicitly listed will be kept strictly confidential and may only be disclosed when required by law or as specified in this Policy.",
    "purposes_of_personal_data": "Purposes of Personal Data Collection",
    "purposes_of_personal_data_list": "eKhonish Administration may use personal data for the following purposes:\n• Providing access to the Website and Mobile Application;\n• Identifying and authenticating the User;\n• Communicating with the User, including sending notifications, requests, or messages related to service use or contract fulfillment;\n• Verifying the accuracy and relevance of provided personal data;\n• Informing the User about the learner’s academic progress as per service agreements;\n• Processing and documenting financial transactions, resolving related disputes;\n• Offering technical and customer support;\n• Sending system updates, promotional offers, pricing details, news, and other materials — subject to the User’s consent;\n• Enabling access to third-party services or resources associated with the Website or Mobile Application.",
    "methods_and_duration_title": "Methods and Duration of Personal Data Processing",
    "methods_and_duration_content": "Personal data is processed in accordance with the laws of the Republic of Tajikistan, using all legally permitted methods, including automated and non-automated systems through the eKhonish platform.\nThe User agrees that eKhonish Administration may transfer personal data to third parties such as postal services or cloud storage providers (within the Republic of Tajikistan), as necessary for service delivery and legal compliance.\nTransfers of data to government bodies may occur strictly in accordance with the laws of the Republic of Tajikistan.\nIn the event of a data breach or loss, eKhonish Administration shall notify the affected User without undue delay.\n eKhonish Administration implements appropriate organizational and technical measures to protect personal data from unauthorized or accidental access, destruction, modification, copying, distribution, and other unlawful actions.\nBoth the Administration and the User are expected to cooperate to prevent damage or adverse consequences arising from such incidents.",
    "responsibilities_title": "Responsibilities of the Parties",
    "responsibilities_content": "User Responsibilities:\n• Provide accurate and complete personal data as required for using the Website and Mobile Application;\n• Promptly update personal data in case of changes;\n• Fulfill obligations as outlined by the laws of the Republic of Tajikistan regarding personal data subjects.\n\n eKhonish Administration Responsibilities:\n• Maintain the confidentiality of personal data and refrain from disclosing it without written consent, except as permitted by law or this Policy;\n• Implement security practices and protocols to safeguard personal data;\n• Limit the use of personal data upon request from the User, their legal representative, or relevant data protection authorities if inaccuracies or legal concerns arise;\n• Delete personal data upon formal request from the User, their representative, or relevant authorities.\n\nImportant: Deletion of personal data as described in this Policy will result in termination of the public service agreement between the User and eKhonish Administration. Such deletion requires joint written requests from both the User (or their representative) and the educational institution that originally submitted the data.",
    "dispute_resolution_title": "Dispute Resolution",
    "dispute_resolution_content": "Before initiating legal proceedings for any disputes arising between the User and eKhonish Administration, the parties must first attempt to resolve the issue amicably by submitting a written claim.\nThe party receiving the claim must respond in writing within 30 calendar days from the date of receipt.\nIf no resolution is achieved, the dispute shall be referred to court, in accordance with the laws of the Republic of Tajikistan.\nThis Policy, and all relations between the User and the eKhonish Administration, are governed by the legislation of the Republic of Tajikistan.",
    "additional_provisions_title": "Additional Provisions"
  },
  "ru": {
    "footer": {
      "privacy_title": "Политика конфиденциальности",
      "tagline": "Трансформация системы образования",
      "privacy_policy": "Политика конфиденциальности",
      "all_rights": "Все права защищены"
    },
    "privacy_content_1": "Политика конфиденциальности персональных данных Пользователей (далее — Политика) описывает порядок сбора, обработки и хранения информации, которую Общественная Организация «Джуръат», представленная на веб-сайте www.ekhonish.tj, может получать от пользователей при использовании Мобильного приложения и Сайта eKhonish.  Использование Мобильного приложения и Сайта eKhonish. означает согласие пользователя с настоящей политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями пользователь должен воздержаться от использования Мобильного приложения и Сайта «eKhonish». Администрация eKhonish не осуществляет контроль над содержимым и функционалом сторонних сайтов, ссылки на которые могут быть размещены на Сайте или Мобильном приложении, и не несет ответственности за их работу, а также за последствия их использования Пользователем. Администрация eKhonish не несет обязательств по проверке досетоверности персональных данных, предоставляемых Пользователем при использовании Сайта и Мобильного приложения.",
    "definitions": "Определения",
    "for_the_purposes": "Для целей настоящей Политики конфиденциальности используются следующие определения:",
    "administration": "'Администрация eKhonish' — Общественная Организация «Джуръат» (далее — Администрация eKhonish), сотрудники которой обладают полномочиями по управлению сайтом и мобильным приложением, а также занимаются обработкой персональных данных пользователей. Определяют цели, состав и методы обработки данных, обеспечивая безопасность и соблюдение законодательства.",
    "website": "“Сайт” - многоотраслевая ERP-система образования предназначенная для автоматизации и оптимизации административных и учебных процессов в образовательных учреждениях с целью повышения эффективности деятельности, ускорения принятия решений и усиления контроля за всеми процессами в сфере образования.",
    "mobile_application": "'Мобильное приложение eKhonish' (далее — Мобильное приложение) — это приложение, предназначенное для установки на мобильные устройства с операционными системами iOS и Android, которое позволяет Пользователю получать доступ к услугам eKhonish.",
    "personal_data": "'Персональные данные' — любая информация, относящаяся прямо или косвенно к физическому лицу, такая как фамилия, имя, адрес проживания, адрес электронной почты и подобная информация.",
    "processing_personal_data": "'Обработка персональных данных' — Любое действие, или набор действий,  осуществляемых с персональными данными с применением автоматизированных средств или без их использования, включая их сбор, регистрацию, систематизацию, хранение, обновление, изменение, извлечение, использование, передачу, распространение, ограничение доступа или удаление.",
    "confidentiality_personal_data": "'Конфиденциальность персональных данных' — обязательство Администрации eKhonish или иного уполномоченного лица, имеющего доступ к персональным данным, не раскрывать и не распространять персональные данные третьим лицам без согласия субъекта персональных данных, если иное не предусмотрено законодательством.",
    "user": "'Пользователь сайта и мобильного приложения eKhonish' (далее — Пользователь) — лицо, которому Сайт и/или Мобильное приложение доступны через сеть Интернет и которое использует их для личных целей.",
    "learner": "«Обучающийся» — это лицо, официально зачисленное в образовательное учреждение для прохождения общего или профессионального обучения в рамках установленной образовательной программы.",
    "scope_of_policy": "Предмет Политики конфиденциальности",
    "policy_obligations": "Настоящая Политика конфиденциальности определяет обязательства Администрации eKhonish по защите персональных данных Пользователей и соблюдению их конфиденциальности. Данные предоставляются Пользователями во время регистрации и использования Сайта и Мобильного приложения.",
    "personal_data_intro": "Персональная информация, которая подлежит обработке в рамках данной Политики, включает в себя данные, необходимые для регистрации и функционирования Сайта и Мобильного приложения:",
    "personal_data_list": "• Фамилия и имя Пользователя\n• Контактный номер телефона\n• Адрес электронной почты (если есть)\n\nДополнительно, система eKhonish может обрабатывать данные, предоставленные образовательными учреждениями, с целью обеспечения корректной работы ERP системы. К таким данным относятся:\n• Фотография обучающегося\n• Пол обучающегося\n• Дата рождения\n• Адрес проживания и контактная информация\n• Информация об учебном процессе (дата поступления, успеваемость, тип обучения, класс, дополнительные занятия, итоги года)\n\nАдминистрация eKhonish также собирает и защищает технические данные, полученные при использовании Сайта и Мобильного приложения, включая:\n• IP-адрес устройства\n• Данные о cookies\n• Время доступа\n• URL страницы, посещённой Пользователем\n• Реферер (адрес предыдущей страницы)\n Отключение Пользователем cookies может ограничить доступ к определённым функциям Сайта или Мобильного приложения, которые требуют авторизации. Администрация eKhonish собирает статистику по IP-адресам посетителей для диагностики технических проблем и обеспечения безопасности финансовых операций, связанных с предоставлением услуг.\n Любая другая персональная информация, не перечисленная выше, хранится в строгой конфиденциальности и может быть раскрыта только в случаях, предусмотренных законодательством Республики Таджикистан или данной Политикой.",
    "purposes_of_personal_data": "Цель сбора личных данных пользователя.",
    "purposes_of_personal_data_list": "Персональные данные Пользователя могут быть обработаны Администрацией eKhonish для следующих целей:\n• Обеспечение доступа пользователя к ресурсам Сайта и Мобильного приложения;\n• Идентификации Пользователя;\n• Установление обратной связи с Пользователем, включая отправку уведомлений, запросов и сообщений, связанных с использованием Сайта, Мобильного приложения, а также предоставлением услуг в рамках договоров.\n• Проверка точности и актуальности персональных данных, предоставленных Пользователем.\n• Информирование Пользователя о ходе образовательного процесса обучающегося в образовательном учреждении в рамках заключённых договоров на предоставление услуг системы.\n• Обработка и учёт финансовых операций, связанных с предоставлением услуг системы, а также рассмотрение и разрешение вопросов, связанных с возможными спорными платежами.\n• Предоставление Пользователю технической и клиентской поддержки в случае возникновения вопросов или затруднений при использовании Сайта и Мобильного приложения.\n• Предоставление обновлений, специальных предложений, информации о ценах, новостей и других материалов от имени Администрации eKhonish, если на это получено согласие Пользователя.\n• Обеспечение доступа к сторонним сервисам и ресурсам, связанным с работой Сайта или Мобильного приложения.",
    "methods_and_duration_title": "Способы и сроки обработки Персональных данных",
    "methods_and_duration_content": "Обработка личных данных пользователя осуществляется в сроки, установленные законодательством Республики Таджикистан, всеми законными методами, включая использование информационных систем ekhonish с использованием средств автоматизации или без использования таких средств.\nПользователь соглашается, что Администрация ekhonish имеет право передавать личные данные третьим лицам, включая почтовые службы и организации, если необходимо отправить корреспонденцию пользователю; для хранения данных в удаленных платформах с использованием облачных технологий на территории Республики Таджикистан и другим лицам в соответствии с законодательством Республики Таджикистан.\nЛичные данные пользователя могут быть переданы только на основании и в порядке, установленном законодательством Республики Таджикистан, государственным органам Республики Таджикистан.\nВ случае утраты или раскрытия личных данных, Администрация ekhonish уведомляет пользователя о потере или раскрытии личных данных.\nАдминистрация ekhonish принимает необходимые организационные и технические меры для защиты личных данных пользователя от несанкционированного или случайного доступа, уничтожения, изменения, копирования, распространения, а также от других противоправных действий со стороны третьих лиц.\nАдминистрация ekhonish совместно с пользователем предпринимает все необходимые меры, чтобы предотвратить ущерб или другие негативные последствия, возникшие в результате потери или раскрытия личных данных пользователя.",
    "responsibilities_title": "Обязанности сторон",
    "responsibilities_content": "Пользователь обязан:\n1. Предоставить личные данные, необходимые для использования Сайта и Мобильного приложения.\n2. При изменении личных данных обновить или дополнить их.\n3. Выполнять другие обязательства, установленные законодательством Республики Таджикистан в отношении субъекта личных данных.\n\nАдминистрация ekhonish обязана:\n• Обеспечить конфиденциальность личных данных, не раскрывать их без письменного согласия пользователя (за исключением случаев, предусмотренных законодательством Республики Таджикистан и Политикой конфиденциальности).\n• Принять необходимые меры для защиты конфиденциальности личных данных пользователя в соответствии с обычной практикой защиты такого рода информации.\n• Ограничить использование личных данных пользователя с момента запроса пользователя, его законного представителя или уполномоченных органов по защите личных данных на период проверки, в случае обнаружения неточных данных или противоправных действий.\n• По запросу пользователя или его законного представителя, а также уполномоченных органов по защите личных данных удалить личные данные, указанные в Политике конфиденциальности.\n\nУдаление любых личных данных, упомянутых в этой Политике конфиденциальности, будет основанием для расторжения публичного договора на предоставление услуг с пользователем или его законным представителем с момента удаления таких данных.\nУдаление личных данных осуществляется по соглашению между учебным заведением, в котором учится студент, и пользователем или его законным представителем. Администрация ekhonish удаляет личные данные только на основании письменного запроса учебного заведения, которое внесло соответствующие данные, и письменного запроса пользователя или его законного представителя.",
    "dispute_resolution_title": "Порядок разрешения споров",
    "dispute_resolution_content": "Перед подачей иска в суд по спорам, возникшим в результате взаимоотношений между Пользователем и Администрацией eKhonish, обязательным этапом является направление письменной претензии с предложением урегулировать спор мирным путём.\nСторона, получившая претензию, обязана в течение 30 календарных дней с момента её получения предоставить заявителю письменный ответ с результатами рассмотрения.\nЕсли соглашение между сторонами не достигнуто, спор подлежит рассмотрению в судебном порядке в соответствии с законодательством Республики Таджикистан.\nНа настоящую Политику конфиденциальности, а также на взаимоотношения между Пользователем и Администрацией eKhonish распространяется действие законодательства Республики Таджикистан.",
    "additional_provisions_title": "Дополнительные условия"
  },
  "tj": {
    "footer": {
      "privacy_title": "Сиёсати махфият",
      "tagline": "Рақамикунонии соҳаи маориф",
      "privacy_policy": "Сиёсати махфият",
      "all_rights": "Ҳамаи ҳуқуқҳо ҳифз шудаанд"
    },
    "privacy_content_1": "Сиёсати махфияти маълумоти шахсии Истифодакунанда (минбаъд – Сиёсат) тартиби ҷамъоварӣ, коркард ва муҳофизати маълумотро ки ташкилоти ҷамъиятии “Ҷуръат” (дар веб-сайти www.ekhonish.tj муаррифӣ шудааст) метавонад аз истифодакунандагон ҳангоми истифодаи замимаи мобилӣ ва сайти eKhonish ҷамъ оварад, муайян мекунад.\n Истифодаи замимаи мобилӣ ва сайти eKhonish маънои ризояти истифодакунанда бо сиёсати мазкур ва шартҳои дар он нишон додашудаи коркарди маълумоти шахсии ӯро дорад; истифодакунанда дар ҳолати норозӣ будан аз ин шартҳо бояд аз истифодаи замимаи мобилӣ ва сайти «eKhonish» худдорӣ намояд.\nМаъмурияти eKhonish назорати муҳтаво ва вазифаҳои сайтҳои бегонаро, ки ишораҳо ба онҳо метавонанд дар сайт ё замимаи мобилӣ ҷойгир карда шуда бошанд, амалӣ намекунанд ва ҷавобгарии корҳои онҳо, инчунин ҷавобгарии оқибатҳои истифодаи онҳо аз тарафи Истифодакунандаро ба ӯҳда надоранд.\nМаъмурияти eKhonish барои тафтиши эътимоднокии маълумоти шахсие ки Истифодакунанда ҳангоми истифодаи сайт ва замимаи мобилӣ пешниҳод менамояд, ҷавобгар нест.",
    "definitions": "Мафҳумҳо",
    "for_the_purposes": "Барои ҳадафҳои сиёсати махфият мафҳумҳои зерин истифода карда мешаванд:",
    "administration": "'Маъмурияти eKhonish' — ташкилоти ҷамъиятии «Ҷуръат» (минбаъд — Маъмурияти eKhonish), ки кормандонаш барои идоракунии сайт ва замимаи мобилӣ ваколат доранд, инчунин ба коркарди маълумоти шахсии истифодакунандагон машғуланд. Ҳадафҳо, таркиб ва методҳои коркарди маълумотро бо таъмини бехатарӣ ва риояи қонунгузорӣ муайян мекунанд.",
    "website": "“Сайт” - ERP-низоми бисёрсоҳаи таълим, ки барои автоматикунонӣ ва беҳтарсозии равандҳои маъмурӣ ва таълимӣ дар муассисаҳои таълимӣ бо мақсади баланд бардоштани самаранокии фаъолият, суръатбахшӣ ба қабули қарорҳо ва пурқувват намудани назорати ҳамаи равандҳо дар бахши таълим фаъолият мекунад ",
    "mobile_application": "'Замимаи мобилии eKhonish' (минбаъд — Замимаи мобилӣ) — замимае ки барои насб дар дастгоҳи мобилӣ бо низомҳои амалиётии iOS ва Android таъин шудааст ва барои дастрасии Истифодакунанда ба хизматрасониҳои eKhonish шароит фароҳам меоварад.",
    "personal_data": "'Маълумоти шахсӣ' — ҳар гуна маълумоте ки ба таври мустақим ё ғайримустақим ба шахси воқеӣ дахл дорад, ба мисли насаб, ном, суроғаи маҳали зист, суроғаи почтаи электронӣ ва маълумоти ба ҳамин монанд.",
    "processing_personal_data": "'Коркарди маълумоти шахсӣ' — ҳар гуна амал ё маҷмӯи амалҳое ки нисбат ба маълумоти шахсӣ бо истифодаи абзорӣ автоматикунонидашуда ё бе истифодаи онҳо, бо дар бар гирифтани ҷамъоварӣ, бақайдгирӣ, систембандӣ, нигоҳдорӣ, навкунӣ, тағйирдиҳӣ, иқтибосоварӣ, истифода, интиқолдиҳӣ, паҳнкунӣ, маҳдудкунии дастрасӣ ё дуркунӣ амалӣ карда мешаванд.",
    "confidentiality_personal_data": "'Махфияти маълумоти шахсӣ' — ӯҳдадории маъмурияти eKhonish ва ё шахси дигари ваколатдор, ки ба маълумоти шахсӣ дастрасӣ доранд, дар бораи ифшо ва паҳн накардани маълумоти шахсии шахсони сеюм бе ризояти субъекти маълумоти шахсӣ, агар қонунгузорӣ талаботи дигаре пешниҳод накарда бошад.",
    "user": "'Истифодакунандаи сайт ва замимаи мобилии  eKhonish' (минбаъд — Истифодакунанда) — шахсе ки ба сайт ва/ё замимаи мобилӣ тавассути шабакаи Интернет дастрасӣ дорад ва онҳоро барои ҳадафҳои шахсии худ истифода мекунад.",
    "learner": "«Таълимгиранда» — шахсе ки расман ба муассисаи таълимӣ барои гирифтани таълими умумӣ ё касбӣ дар доираи барномаи муқарраршудаи таълимӣ қабул карда шудааст.",
    "scope_of_policy": "Мавзӯи сиёсати махфият",
    "policy_obligations": "Сиёсати мазкури махфияти ӯҳдадориҳои маъмурияти eKhonish оид ба ҳимояи маълумоти шахсии истифодакунандагон ва риояи махфияти онҳоро муайян мекунад. Маълумот аз тарафи истифодакунандагон ҳангоми бақайдгирӣ ва истифодаи сайт ва замимаи мобилӣ  пешниҳод карда мешаванд.",
    "personal_data_intro": "Маълумоти шахсие ки бояд дар доираи сиёсати мазкур коркард шаванд, маълумоти зарурӣ барои бақайдгирӣ ва амалкарди сайт ва замимаи мобилиро дар бар мегиранд. ",
    "personal_data_list": "Насаб ва номи истифодакунанда;\nРақами телефони тамос;\nСуроғаи почтаи электронӣ (агар бошад).\n\nИловатан, низоми eKhonish метавонад маълумоти пешниҳодкардаи муассисаҳои таълимиро бо ҳадафи таъмини нозукии кори низоми ERP коркард намояд. Ба чунин маълумот мансуб дониста мешаванд:\n\nРасми таълимгиранда;\nҶинси таълимгиранда;\nСанаи таваллуд;\nСуроғаи маҳали зист ва маълумот дар бораи тамос;\nМаълумот дар бораи раванди таълим (санаи дохилшавӣ, азхудкунии дарсҳо, навъи таълим, синф, машғулиятҳои иловагӣ, ҷамъбасти сол).\n\nМаъмурияти eKhonish инчунин маълумоти техникии ҳангоми истифодаи сайт ва замимаи мобилӣ гирифташударо бо дар бар гирифтани маълумоти зерин ҷамъоварӣ ва муҳофизат мекунад:\n\nIP-суроғаи дастгоҳ;\nМаълумот дар бораи cookies;\nВақти дастрасӣ;\nURL-саҳифаҳое ки Истифодакунанда ба онҳо даромадааст;\nРеферер (суроғаи саҳифаи гузашта).\nҚатъ кардани cookies метавонад дастрасӣ ба амалҳои муайяни сайт ё замимаи мобилиро ки иҷозати муаллифро талаб менамоянд, маҳдуд созад. Маъмурияти  eKhonish оморро аз рӯи IP-суроғаҳои муштариён барои ташхиси мушкилоти техникӣ ва таъмини бехатарии амалиёти молиявии вобаста ба пешниҳоди хизматрасониҳо ҷамъоварӣ мекунад.\nҲар гуна маълумоти дигари шахсӣ, ки дар боло номбар нашудааст, дар махфияти пурра нигоҳ дошта мешавад ва мумкин аст танҳо дар ҳолатҳои пешбининамудаи қонунгузории Тоҷикистон ё сиёсати мазкур ифшо карда шавад.",
    "purposes_of_personal_data": "Ҳадафи ҷамъоварии маълумоти шахсии истифодакунандагон",
    "purposes_of_personal_data_list": "Маълумоти шахсии Истифодакунанда мумкин аст аз тарафи Маъмурияти eKhonish барои ҳадафҳои зерин коркард шаванд:\n• Таъмини дастрасии истифодакунанда ба захираҳои сайт ва замимаи мобилӣ;\n• Ҳаммонандкунии истифодакунанда;\n• Барқарор намудани алоқаи дутарафа бо истифодакунанда, бо дар бар гирифтани огоҳиномаҳо, дархостҳо ва хабарҳои вобаста ба истифодаи сайт, замимаи мобилӣ, инчунин пешниҳоди хизматрасониҳо дар доираи шартномаҳо;\n• Тафтиши дақиқият ва муҳимияти маълумоти шахсӣ, ки аз тарафи истифодакунанда пешниҳод карда шудааст;\n• Огоҳ намудани истифодакунанда аз рафти раванди таълими таълимгиранда дар муассисаи таълимӣ дар доираи шартномаҳои басташуда барои пешниҳоди хизматрасониҳои низом;\n• Коркард ва баҳисобгирии амалиёти молиявии вобаста ба пешниҳоди хизматрасониҳои низом, инчунин баррасӣ ва ҳаллу фасли масъалаҳои вобаста ба пардохтҳои эҳтимолии баҳснок;\n• Пешниҳоди дастгирии техникӣ ва мизоҷӣ ба истифодакунанда дар ҳолати пайдоиши мушкилот ва душвориҳо ҳангоми истифодаи сайт ё замимаи мобилӣ;\n• Пешниҳоди навкуниҳо, пешниҳодҳои махсус, маълумот дар бораи нархҳо, навигариҳо ва маводи дигар аз номи Маъмурияти eKhonish, агар барои ин ризояти истифодакунанда гирифта шуда бошад;\n• Таъмини дастрасӣ ба хизматрасониҳо ва захираҳои бегона, ки вобаста ба кори сайт ё замимаи мобилӣ мебошад.",
    "methods_and_duration_title": "Тарзҳо ва мӯҳлатҳои коркарди маълумоти шахсӣ",
    "methods_and_duration_content": "Коркарди маълумоти шахсӣ дар мӯҳлатҳои муқаррарнамудаии қонунгузории Ҷумҳурии Тоҷикистон, тавассути методҳои қонунӣ, бо дар бар гирифтани истифодаи низомҳои иттилоотии eKhonish бо истифодаи воситаҳои автоматикунонӣ ё бе истифодаи чунин воситаҳо амалӣ карда мешавад.\nИстифодакунанда розӣ мешавад, ки Маъмурияти eKhonish барои интиқол додани маълумоти шахсӣ ба шахсони сеюм, бо дар бар гирифтани хизматрасонии почта ва ташкилот, агар зарурати фиристодани мукотибот ба истифодакунанда пайдо шавад; барои нигоҳдории маълумот дар платформаҳои дур бо истифодаи технологияҳои муқаррарӣ дар ҳудуди Ҷумҳурии Тоҷикистон ва ба шахсони дигар дар мутобиқат бо қонунгузории Ҷумҳурии Тоҷикистон ҳақ дорад.\nМаълумоти шахсии истифодакунанда танҳо дар асос ва тартиби муқаррарнамудаи қонунгузории Ҷумҳурии Тоҷикистон метавонад ба мақомоти давлатии Ҷумҳурии Тоҷикистон интиқол дода шавад.\nДар ҳолати гум шудан ё ифшо шудани маълумоти шахсӣ, Маъмурияти eKhonish дар ин бора ба истифодакунанда хабар медиҳад.\nМаъмурияти eKhonish барои муҳофизати маълумоти шахсии истифодакунанда аз дастрасии ғайриқонунӣ ё тасодуфӣ, нобудкунӣ, тағйирдиҳӣ, нусхабардорӣ, паҳнкунӣ, инчунин аз амалҳои дигари зиддиқонунӣ аз тарафи шахсони сеюм тадбирҳо меандешад.\nМаъмурияти eKhonish бо ҳамроҳии истифодакунанда барои пешгирии зиён ё дигар оқибатҳои манфии дар натиҷаи гум ё ифшо шудани маълумоти шахсии истифодакунанда пайдошаванда тамоми тадбирҳои лозимиро меандешад.",
    "responsibilities_title": "Ӯҳдадориҳои тарафҳо",
    "responsibilities_content": "Истифодакунанда ӯҳдадор аст:\n4. Маълумоти шахсии барои истифодаи сайт ва замимаи мобилӣ заруриро пешниҳод намояд.\n5. Ҳангоми тағйир ёфтани маълумоти шахсӣ, онҳоро нав ё пурра кунад.\n6. Ӯҳдадориҳои дигари муқаррарнамудаи қонунгузории Ҷумҳурии Тоҷикистон нисбат ба субъекти маълумоти шахсиро иҷро намояд.\n\nМаъмурияти eKhonish ӯҳдадор аст:\n• Махфияти маълумоти шахсиро таъмин намояд, бе ризояти хаттии истифодакунанда онҳоро ифшо нанамояд (ба истиснои ҳолатҳои муқаррарнамудаи қонунгузории Ҷумҳурии Тоҷикистон ва Сиёсати махфият).\n• Барои муҳофизати махфияти маълумоти шахсии истифодакунанда, дар мутобиқат бо амали маъмулии ҳимояи чунин навъи маълумот тадбирҳои лозимӣ андешад.\n• Истифодаи маълумоти шахсии истифодакунандаро аз лаҳзаи дархости истифодакунанда, намояндаи қонунии ӯ ё мақомоти ваколатдор оид ба муҳофизати маълумоти шахсӣ дар давраи тафтишот, дар ҳолати ошкор намудани маълумоти носаҳеҳ ё амалҳои ғайриқонунӣ маҳдуд намояд.\n• Бо дархости истифодакунанда ё намояндаи қонунии ӯ, инчунин мақомоти ваколатдор оид ба муҳофизати маълумоти шахсӣ, маълумоти шахсии дар Сиёсати махфият нишон додашударо дур кунад. Дар ин маврид:\n  – Дур кардани ҳама гуна маълумоти шахсии дар Сиёсати махфият нишон додашуда, барои қатъи шартномаи оммавӣ оид ба пешниҳод намудани хизматрасониҳо бо истифодакунанда ё намояндаи қонунии ӯ аз лаҳзаи дур кардани чунин маълумот ҳамчун асос хидмат мекунад. Дар дархости истифодакунанда ё намояндаи қонунии ӯ бояд нишон дода шавад, ки истифодакунанда ё намояндаи ӯ шартномаи оммавӣ оид ба пешниҳоди хизматрасониро қатъ менамояд.\n  – Дур кардани маълумоти шахсии дар Сиёсати махфият нишон додашуда аз рӯи созишномаи байни муассисаи таълимӣ, ки донишҷӯ дар он таҳсил мекунад ва худи истифодакунанда ё намояндаи қонунии ӯ амалӣ карда мешавад. Маъмурияти eKhonish танҳо дар асоси дархости хаттии муассисаи таълимӣ, ки маълумоти лозимиро ворид намудааст ва дархости хаттии истифодакунанда ё намояндаи қонунии ӯ маълумоти шахсиро дур мекунад.",
    "dispute_resolution_title": "Тартиби ҳаллу фасли баҳсҳо",
    "dispute_resolution_content": "Пеш аз пешниҳод намудани даъво ба додгоҳ дар бораи баҳсҳое ки дар натиҷаи муносибатҳои байниҳамдигарии байни Истифодакунанда ва Маъмурияти eKhonish пайдо мешаванд, марҳалаи ҳатмӣ равона намудани эътирози хаттӣ бо пешниҳоди ҳаллу фасли баҳс бо роҳи мусолиматомез мебошад.\nТарафе ки эътирозро қабул мекунад, ӯҳдадор аст дар муддати 30 рӯзи тақвимӣ аз лаҳзаи гирифтани он ба даъвогар ҷавоби хаттӣ бо натиҷаҳои баррасиро пешниҳод намояд.\nАгар тарафҳо ба созиш нарасанд, баҳс бояд бо тартиботи додгоҳ дар мутобиқат бо қонунгузории Ҷумҳурии Тоҷикистон баррасӣ карда шавад.\nСиёсати мазкури махфият ва инчунин муносибатҳои байни Истифодакунанда ва Маъмурияти eKhonish тибқи қонунгузории Ҷумҳурии Тоҷикистон амалӣ карда мешаванд.",
    "additional_provisions_title": "Шартҳои Иловагӣ"

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
