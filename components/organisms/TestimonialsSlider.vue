<template>
  <section class="flex py-8 px-4">
    <div class=" mx-auto justify-between space-x-3  grid grid-cols-1 md:grid-cols-2">
      <div class="w-[350px] md:w-[500px] pb-7 mx-auto">
        <h2 class="text-2xl md:text-4xl font-bold text-[#1E1E1E] mb-4 text-left ">
          {{ t("what_schools_say") }}
          <span class="text-[#0077A3]">{{t('about_platform')}}</span>
        </h2>
        <p class="text-left  pr-5 md:pr-0">
          {{t('platform_is_already')}}
        </p>
      </div>


      <div>
        <ClientOnly>
          <Swiper
              :modules="[Autoplay, Pagination]"
              :loop="true"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :pagination="{ clickable: true }"
              class="w-full"
          >
            <SwiperSlide v-for="(item, index) in testimonials" :key="index">
              <div class="bg-[#f8fafc] rounded-xl shadow-md p-6 min-h-screen md:min-h-[260px] max-w-xl mx-auto">
                <div class="flex items-center gap-4 mb-4">
                  <img :src="item.avatar" class="w-12 h-12 rounded-full object-cover" alt="avatar"/>
                  <div class="text-left">
                    <h3 class="text-lg font-semibold text-[#1E1E1E]">{{ item.name }}</h3>
                    <p class="text-sm text-gray-400">{{ item.position }}</p>
                  </div>
                </div>
                <p class="text-gray-700 text-sm leading-relaxed text-left">{{ item.quote }}</p>
              </div>
            </SwiperSlide>

            <div class="swiper-pagination mt-4" />
          </Swiper>
        </ClientOnly>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

// Important: these styles must be imported
import 'swiper/css'
import 'swiper/css/pagination'

const { t } = useI18n()

const testimonials = [
  {
    name: t("name_1"),
    position: t("speciality_1"),
    avatar: new URL('@/assets/images/karimov.png', import.meta.url).href,
    quote: t("testimonial_1")
  },
  {
    name: t("name_2"),
    position: t("speciality_2"),
    avatar: new URL('@/assets/images/sharipov.png', import.meta.url).href,
    quote: t("testimonial_2")
  },
  {
    name: t("name_3"),
    position: t("speciality_3"),
    avatar: new URL('@/assets/images/yusupova.png', import.meta.url).href,
    quote: t("testimonial_3")
  },
  {
    name: t("name_4"),
    position: t("speciality_4"),
    avatar: new URL('@/assets/images/yorov.png', import.meta.url).href,
    quote: t("testimonial_4")
  },
  {
    name: t("name_5"),
    position: t("speciality_5"),
    avatar: new URL('@/assets/images/mijgona.png', import.meta.url).href,
    quote: t("testimonial_5")
  }
]

</script>

<i18n lang="json">
{
  "en": {
    "what_schools_say": "What schools say",
    "about_platform": "about platform",
    "platform_is_already": "The platform is already helping schools across the country simplify management, increase control, and improve communication with parents. School leaders highlight its convenience, transparency, and significant time savings — all of which allow them to focus on what matters most: the quality of education",
    "name_1": "Karimov Siyovush",
    "speciality_1": "Biology teacher",
    "testimonial_1": "EKhonish is an electronic and centralized educational system designed to improve student learning and provide full control over the educational process in schools. This application allows schools, teachers and parents to easily and transparently monitor and manage educational activities",
    "name_2": "Sharipov Saidmurod",
    "speciality_2": "Mathematics teacher",
    "testimonial_2": "The EKhonish program is a comprehensive educational and administrative tool that is of great importance for the development of education and improving the quality of knowledge in Tajikistan. For effective learning and student success, all schools in the country must switch to this system. Thus, the EKhonish program not only improves the level of knowledge of students, but also significantly simplifies and makes monitoring of education more effective for teachers, schools and parents.",
    "name_3": "Yusupova Ashurmokh",
    "speciality_3": "Primary school teacher",
    "testimonial_3": "Easy communication between school, student and parents: All messages and notifications regarding student learning and behavior are available in the app. Access from anywhere and at any time. The app works on phones, tablets and computers, allowing students and parents to access information and lessons.Digital and efficient: Teaching and monitoring are done electronically without the use of paper documents, saving time for teachers and administrators",
    "name_4": "Darveshova Zulhija",
    "speciality_4": "School director №2",
    "testimonial_4": "Provides precise and transparent control of the educational process. This contributes to improving the quality of education and the effectiveness of learning. Supports the activity and awareness of parents in matters of their children's education. It integrates and facilitates education using modern technologies",
    "name_5": "Abiev Suhrob",
    "speciality_5": "Geography teacher",
    "testimonial_5": "EKhonish is a modern and necessary tool for children's cognitive development. This program not only makes reading easier, but also creates an exciting environment for learning Tajik and world books. With this program, students can expand their knowledge and increase their interest in reading. E-learning is an important step towards digitalization of education in Tajikistan"

  },
  "ru": {
    "what_schools_say": "Что говорят школы",
    "about_platform": "о платформе",
    "platform_is_already": "Платформа уже помогает школам по всей стране упростить управление, усилить контроль и наладить коммуникацию с родителями. Руководители учебных заведений отмечают удобство, прозрачность и реальную экономию времени — всё это позволяет сосредоточиться на главном: качестве образования",
    "name_1": "Каримов Сиёвуш",
    "speciality_1": "Учитель биологии",
    "testimonial_1": "Программа EKhonish — это электронная и централизованная образовательная система, призванная улучшить обучение учащихся и обеспечить полный контроль над образовательным процессом в школах. Это приложение позволяет школам, учителям и родителям легко и прозрачно отслеживать и управлять образовательной деятельностью",
    "name_2": "Шарипов Саидмурод",
    "speciality_2": "Учитель математики",
    "testimonial_2": "Программа EKhonish — это комплексный образовательный и административный инструмент, имеющий большое значение для развития образования и повышения качества знаний в Таджикистане. Для эффективного обучения и успеваемости учащихся все школы страны должны перейти на эту систему. Таким образом, программа EKhonish не только повышает уровень знаний учащихся, но и значительно упрощает и делает более эффективным контроль за образованием для учителей, школ и родителей.",
    "name_3": "Юсупова Ашурмох",
    "speciality_3": "Учительница начальных классов",
    "testimonial_3": "Легкое общение между школой, учеником и родителями: Все сообщения и уведомления, касающиеся обучения и поведения учащихся, доступны в приложении. Доступ из любой точки мира и в любое время. Приложение работает на телефонах, планшетах и компьютерах, позволяя учащимся и родителям получать доступ к информации и урокам.Цифровой и эффективный: Обучение и контроль осуществляются в электронном виде без использования бумажных документов, что экономит время преподавателей и администраторов",
    "name_4": "Дарвешова Зулхиджа",
    "speciality_4": "Директр МТМУ №2",
    "testimonial_4": "Обеспечивает точный и прозрачный контроль образовательного процесса. Это способствует повышению качества образования и эффективности обучения. Поддерживает активность и информированность родителей в вопросах образования их детей. Он интегрирует и облегчает образование с использованием современных технологий",
    "name_5": "Абдиев Сухроб",
    "speciality_5": "Учитель географии",
    "testimonial_5": "EKhonish — современный и необходимый инструмент для когнитивного развития детей. Эта программа не только облегчает чтение, но и создает увлекательную среду для изучения таджикских и мировых книг. Благодаря этой программе учащиеся могут расширить свои знания и повысить интерес к чтению. Электронное обучение является важным шагом на пути цифровизации образования в Таджикистане"

  },
  "tj": {
    "what_schools_say": "Муассисаҳои таълимӣ дар бораи низом чӣ мегӯянд",
    "about_platform": "E-KHONISH",
    "platform_is_already": "Низом аллакай ба муассисаҳои саросари кишвар барои сода кардани идоракунӣ, пурзӯр намудани назорат ва барқарор намудани алоқа бо волидайн ёрӣ мерасонад. Роҳбаони муассисаҳои таълимӣ осонӣ, шаффофият ва сарфаи воқеии вақтро қайд менамоянд – ҳамаи ин имкон медиҳад таваҷҷуҳ ба мақсади асосӣ: сифати таълим равона карда шавад.",
    "name_1": "Каримов Сиёвуш",
    "speciality_1": "омӯзгори биология",
    "testimonial_1": "Барномаи EKhonish — низоми электронӣ ва мутамаркази таълим аст, ки барои беҳтарсозии таълими хонандагон ва таъмини назорати пурраи равандҳои таълим дар муассисаҳои таълимӣ хидмат мекунад. Ин замимаҳо ба омӯзгорон ва волидайн барои пайгирӣ ва идоракунии осон ва шаффофи фаъолияти таълимӣ шароит фароҳам меоварад.",
    "name_2": "Шарипов Саидмурод",
    "speciality_2": "Омӯзгори математика",
    "testimonial_2": "Барномаи EKhonish — асбоби ҷомеи таълимӣ ва маъмурист, ки барои рушди таълим ва баланд бардоштани сифати дониш дар Тоҷикистон аҳамияти калон дорад. Барои таълим ва иштироки самараноки хонандагон дар дарсҳо ҳамаи муассисаҳои таълимии кишвар бояд ба ин низом гузаранд.  Ҳамин тавр, барномаи EKhonish натанҳо сатҳи дониши хонандагонро баланд мебардорад, балки назорати таълимро барои омӯзгорон, муассисаҳои таълимӣ ва волидайн хеле сода ва самаранок мекунад.",
    "name_3": "Юсуфова Ашӯрмоҳ",
    "speciality_3": "Омӯзгори синфҳои ибтидоӣ",
    "testimonial_3": "Муоширати осони байни муассисаҳои таълимӣ, хонанда ва волидайн: Ҳамаи хабар ва огоҳии марбут ба таълим ва рафтори хонандагон дар замима дастрас аст. Дастрасии ҳамавақтӣ аз ҳамаи гӯшаи ҷаҳон. Замима дар телефонҳо, планшетҳо ва компютерҳо кор мекунад, ба хонандагон ва волидайн имконияти дастрасӣ ба иттилоот ва дарсҳоро фароҳам меоварад. Рақамӣ ва самаранок: Таълим ва назорат дар шакли электронӣ, бе истифодаи ҳуҷҷатҳои коғазӣ амалӣ карда мешавад, ки вақти омӯзгорон ва маъмуронро сарфа менамояд.",
    "name_4": "Дарвешова Зулҳиҷа",
    "speciality_4": "Директр МТМУ №2",
    "testimonial_4": "Назорати дақиқ ва шаффофи раванди таълимро таъмин менамояд. Ин ба баланд шудани сифат ва самаранокии таълим мусоидат менамояд. Фаъолнокӣ ва огоҳии волидайнро дар масъалаҳои таълими фарзандонашон дастгирӣ мекунад. Он тавассути истифодаи технологияҳои ҳозиразамон таълимро ҳамгиро ва осон менамояд.",
    "name_5": "Абдиев Суҳроб",
    "speciality_5": "омузгори фанни география",
    "testimonial_5": "EKhonish асбоби ҳозиразамон ва зарурии рушди когнитивии кӯдакон мебошад. Ин барнома натанҳо хонданро осон мекунад, балки барои омӯзиши китобҳои тоҷикӣ ва хориҷӣ муҳити ҷолиб ба вуҷуд меоварад. Хонандагон ба туфайли ин барнома метавонанд дониши худро васеъ ва шавқи худро ба хондан зиёд намоянд. Таълими электронӣ қадами муҳим дар роҳи рақамикунонии таълим дар Тоҷикистон мебошад."
  }
}
</i18n>
