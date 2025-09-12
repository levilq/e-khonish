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
              <p>{{ t("privacy_content_1") }}</p>
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
    "mobile_aplication": "'Mobile Application' or 'eKhonish Mobile Application' — A mobile application compatible with iOS and Android platforms that provides users with access to the eKhonish services.",
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
    "mobile_aplication": "'Мобильное приложение eKhonish' (далее — Мобильное приложение) — это приложение, предназначенное для установки на мобильные устройства с операционными системами iOS и Android, которое позволяет Пользователю получать доступ к услугам eKhonish.",
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
    "additional_provisions_title": "Дополнительные условия",
  },
  "tj": {
    "footer": {
      "privacy_title": "Сиёсати махфият",
      "tagline": "Рақамикунонии соҳаи маориф",
      "privacy_policy": "Сиёсати махфият",
      "all_rights": "Ҳамаи ҳуқуқҳо ҳифз шудаанд"
    },
    "privacy_content_1": "Ин Сиёсати Ҳифзи Маълумоти Шахсӣ (минбаъд “Сиёсат”) тартиби ҷамъоварӣ, коркард ва нигоҳдории маълумоти шахсиро, ки аз ҷониби Ташкилоти ҷамъиятии “Ҷӯръат”, тавассути вебсайти www.ekhonish.tj ҳангоми истифодаи Барномаи Мобилӣ ва Вебсайти eKhonish гирифта мешавад, муайян мекунад. Бо истифода аз Барномаи мобилӣ ва Вебсайти eKhonish, шумо розигии худро бо шартҳои пешбинишуда дар ин Сиёсат ва бо тарзи коркарди маълумоти шахсии худ тасдиқ мекунед. Агар шумо бо ягон қисми ин Сиёсат розӣ набошед, лутфан аз истифодаи Барномаи мобилӣ ва Вебсайти eKhonish худдорӣ намоед. Маъмурияти eKhonish назорат ё масъулияти мундариҷа ва фаъолияти сомонаҳои тарафи сеюмро, ки метавонанд аз тариқи Вебсайт ё Барномаи мобилӣ пайванд дошта бошанд, ба уҳда намегирад ва барои истифодаи онҳо аз ҷониби корбар низ ҷавобгар нест. Илова бар ин, Маъмурияти eKhonish уҳдадор нест, ки дурустии маълумоти шахсии пешниҳодкардаи корбаронро тасдиқ намояд.",
    "definitions": "Мафҳумҳо",
    "for_the_purposes": "Барои мақсадҳои ин Сиёсат, мафҳумҳои зерин чунин шарҳ дода мешаванд:",
    "administration": "'Маъмурияти eKhonish' — Ташкилоти ҷамъиятии “Ҷуръат”, ки кормандони ваколатдор масъули идоракунии Вебсайт ва Барномаи мобилӣ, коркарди маълумоти шахсӣ, муайян кардани ҳадаф ва усулҳои коркард, инчунин таъмини риояи қонунгузорӣ ва амнияти иттилоотӣ мебошанд.",
    "website": "'Вебсайт' — Системаи ERP-и бисёрсоҳа барои соҳаи маориф, ки барои автоматизатсия ва оптимизатсияи равандҳои маъмурӣ ва таълимӣ дар муассисаҳои таълимӣ бо мақсади баланд бардоштани самаранокӣ ва назорат таҳия шудааст.",
    "mobile_aplication": "'Барномаи мобилии eKhonish' — Барнома барои дастгоҳҳои мобилии дорои системаи iOS ва Android, ки дастрасии корбарро ба хидматҳои eKhonish таъмин мекунад.",
    "personal_data": "'Маълумоти шахсӣ' — Ҳар гуна маълумоте, ки ба шахси воқеӣ бевосита ё бавосита дахл дорад, аз ҷумла: ном, насаб, суроғаи зист, рақами телефон, суроғаи почтаи электронӣ ва маълумоти монанд.",
    "processing_personal_data": "'Коркарди маълумоти шахсӣ' — Ҳар амалиёт ё маҷмӯи амалиётҳо бо маълумоти шахсӣ бо истифодаи воситаҳои автоматикӣ ё бидуни онҳо, аз ҷумла: ҷамъоварӣ, сабт, систематизатсия, нигоҳдорӣ, навсозӣ, ислоҳ, дастрасӣ, истифода, интиқол, паҳнкунӣ, маҳдудсозии дастрасӣ ё нобудкунӣ.",
    "confidentiality_personal_data": "'Маҳрамияти маълумоти шахсӣ' — Уҳдадории Маъмурияти eKhonish ё шахсони ваколатдор, ки дастрасӣ ба маълумоти шахсӣ доранд, аз ифшо ё интиқоли маълумот ба шахсони сеюм бидуни розигии корбар худдорӣ намоянд, агар инро қонун талаб накунад.",
    "user": "'Корбар' — Шахсе, ки тавассути интернет ба Вебсайт ва/ё Барномаи мобилии eKhonish дастрасӣ дошта, онро бо мақсадҳои шахсӣ истифода мебарад.",
    "learner": "'Довталаб/Шогирд' — Шахсе, ки расман ба муассисаи таълимӣ барои таҳсилоти умумӣ ё касбӣ тибқи барномаи таълимӣ қабул шудааст.",
    "scope_of_policy": "Мавзӯи Сиёсат",
    "policy_obligations": "Ин Сиёсат уҳдадориҳои Маъмурияти eKhonish-ро оид ба ҳифзи маълумоти шахсии корбарон ва нигоҳдории махфияти он муайян менамояд. Маълумот аз ҷониби корбар ҳангоми бақайдгирӣ ё истифодаи доимии Вебсайт ва Барномаи мобилӣ пешниҳод мегардад.",
    "personal_data_intro": "Маълумоти шахсӣ, ки тибқи ин Сиёсат коркард мешавад, иборат аст аз:",
    "personal_data_list": "• Ному насаби пурраи корбар\n• Рақами телефони тамос\n• Почтаи электронии корбар (агар мавҷуд бошад)\n\nИлова бар ин, система метавонад маълумоти зеринро, ки аз тарафи муассисаҳои таълимӣ пешниҳод шудааст, барои фаъолияти дурусти системаи ERP коркард намояд:\n• Акси довталаб\n• Ҷинс\n• Санаи таваллуд\n• Суроға ва маълумоти тамос\n• Маълумоти таълимӣ (санаи қабул, нишондиҳандаҳои таълимӣ, шакли таҳсил, синф, фаъолиятҳои иловагӣ, натиҷаҳои солона)\n\nМаъмурияти eKhonish инчунин маълумоти техникиро ҳангоми истифодаи Вебсайт ва Барномаи мобилӣ ҷамъоварӣ ва муҳофизат менамояд:\n• Суроғаи IP-и дастгоҳ\n• Маълумоти файлҳои хурди иттилоотӣ (cookies)\n• Замони дастрасӣ\n• URL-и саҳифаи диданшуда\n• Referrer (URL-и саҳифаи қаблӣ)\n Таваҷҷӯҳ: Хомӯш кардани cookies метавонад дастрасии шуморо ба баъзе функсияҳои Вебсайт ё Барномаи мобилӣ, ки воридшавиро талаб мекунанд, маҳдуд созад. Истифодаи маълумоти IP барои ташхиси техникӣ ва таъмини амнияти амалиётҳои молиявӣ зарур аст.\n Ҳамаи маълумоти дигаре, ки дар боло зикр нашудааст, маҳрамона нигоҳ дошта мешаванд ва танҳо дар ҳолатҳои пешбининамудаи қонунгузории Ҷумҳурии Тоҷикистон ё тибқи ин Сиёсат ифшо карда мешаванд.",
    "purposes_of_personal_data": "Ҳадафҳои Ҷамъоварии Маълумоти Шахсӣ",
    "purposes_of_personal_data_list": "Маъмурияти eKhonish метавонад маълумоти шахсии корбарро барои ҳадафҳои зерин истифода барад:\n• Таъмини дастрасии корбар ба Вебсайт ва Барномаи мобилӣ;\n• Муайян кардани шахсияти корбар;\n• Тамос бо корбар, аз ҷумла ирсоли огоҳиномаҳо, дархостҳо ва паёмҳо вобаста ба истифодаи хидматҳо;\n• Санҷиши дуруст ва мувофиқати маълумоти пешниҳодшуда;\n• Огоҳонидани корбар дар бораи раванди таҳсили довталаб тибқи шартномаҳо;\n• Коркард ва ҳуҷҷатгузории амалиётҳои молиявӣ ва ҳалли баҳсҳои марбут;\n• Пешниҳоди кӯмаки техникӣ ва дастгирии муштариён;\n• Ирсоли навсозиҳо, пешниҳодҳо, нархномаҳо ва дигар мавод — танҳо бо розигии корбар;\n• Таъмини дастрасӣ ба хидматҳои тарафи сеюм, вобаста ба кори Вебсайт ё Барномаи мобилӣ.",
    "methods_and_duration_title": "Усулҳо ва Давомнокии Коркарди Маълумот",
    "methods_and_duration_content": "Маълумоти шахсӣ тибқи қонунҳои Ҷумҳурии Тоҷикистон бо истифода аз усулҳои қонунии коркард ба тариқи худкор ва бе он дар доираи платформаи eKhonish коркард мешавад.\nКорбар розӣ аст, ки Маъмурияти eKhonish метавонад маълумоти шахсиро ба шахсони сеюм, аз ҷумла хадамоти почта ё оҷонсиҳои иттилоотӣ (дар ҳудуди Ҷумҳурии Тоҷикистон), интиқол диҳад, агар он барои расонидани хидмат зарур бошад.\nИнтиқоли маълумот ба мақомоти давлатӣ танҳо тибқи тартиби муқаррарнамудаи қонун сурат мегирад.\nДар сурати гум шудан ё ифшои маълумоти шахсӣ, Маъмурияти eKhonish дар муддати кутоҳ ба корбар хабар медиҳад.\nМаъмурият чораҳои лозимии ташкилӣ ва техникиро барои ҳимояи маълумоти шахсӣ аз дастрасии ғайриқонунӣ ё тасодуфӣ, нобудсозӣ, тағйирёбӣ, нусхабардорӣ, паҳнкунӣ ё дигар амалҳои ғайриқонунӣ амалӣ менамояд.\nҲар ду ҷониб — Маъмурият ва Корбар — уҳдадоранд, ки барои пешгирии зарар ё оқибатҳои манфӣ дар натиҷаи ифшои маълумот ҳамкорӣ намоянд.",
    "responsibilities_title": "Уҳдадориҳои Ҷонибҳо",
    "responsibilities_content": "Уҳдадориҳои Корбар:\n• Пешниҳоди маълумоти дақиқ ва пурра барои истифодаи Вебсайт ва Барномаи мобилӣ;\n• Навсозӣ ва ё пурра кардани маълумот дар ҳолати тағйир;\n• Риояи талаботи қонунгузории Ҷумҳурии Тоҷикистон оид ба ҳифзи маълумоти шахсӣ.\n\nУҳдадориҳои Маъмурият:\n• Нигоҳ доштани махфияти маълумоти шахсӣ ва ифшо накардани он бидуни розигии хаттии корбар (ба истиснои ҳолатҳои пешбининамудаи қонун);\n• Татбиқи тадбирҳои амниятӣ барои ҳимояи маълумоти шахсӣ;\n• Маҳдудсозии истифодаи маълумот бо дархости корбар, намояндаи ӯ ё мақомоти дахлдор дар ҳолати нодуруст будан ё қонуншикании эҳтимолӣ;\n• Нобудсозии маълумоти шахсӣ бо дархости расмии корбар ё намояндаи ӯ.\n\nМуҳим: Нобуд кардани маълумоти шахсӣ тибқи ин Сиёсат асос барои қатъ кардани шартномаи хизматрасонӣ мебошад. Ин амал бояд бо дархости хаттии якҷоя аз ҷониби корбар ва муассисаи таълимие, ки маълумотро пешниҳод кардааст, сурат гирад.",
    "dispute_resolution_title": "Тартиби Ҳаллу Фасли Баҳсҳо",
    "dispute_resolution_content": "Пеш аз муроҷиат ба суд барои ҳалли баҳсҳо байни корбар ва Маъмурияти eKhonish, тарафҳо бояд кӯшиш намоянд, ки баҳсро бо роҳи муросо ҳал кунанд ва мактуби хаттӣ пешниҳод намоянд.\nТарафе, ки шикоятро қабул мекунад, уҳдадор аст дар давоми 30 рӯзи тақвимӣ посухи хаттӣ пешниҳод намояд.\nАгар муросо имконпазир набошад, баҳс дар асоси қонунгузории Ҷумҳурии Тоҷикистон дар суд баррасӣ мегардад.\nИн Сиёсат ва тамоми муносибатҳои байни Корбар ва Маъмурияти eKhonish тибқи қонунҳои Ҷумҳурии Тоҷикистон танзим мегарданд.",
    "additional_provisions_title": "Шартҳои Иловагӣ",

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
