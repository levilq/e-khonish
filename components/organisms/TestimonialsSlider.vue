<template>
  <section class="flex py-8 px-4">
    <div class=" mx-auto justify-between space-x-3  grid grid-cols-1 md:grid-cols-2">
      <div class="w-[350px] md:w-[500px] pb-7">
        <h2 class="text-2xl md:text-4xl font-bold text-[#1E1E1E] mb-4 text-left">
          {{ t("what_schools_say") }}
          <span class="text-[#0077A3]">{{t('about_platform')}}</span>
        </h2>
        <p class="text-left font-bold">
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
    avatar: "/_nuxt/images/png/karimov.png",
    quote: t("testimonial_1")
  },
  {
    name: t("name_2"),
    position: t("speciality_2"),
    avatar: "/_nuxt/images/png/sharipov.png",
    quote: t("testimonial_2")
  },
  {
    name: t("name_3"),
    position: t("speciality_3"),
    avatar: "/_nuxt/images/png/yusupova.png",
    quote: t("testimonial_3")
  },
  {
    name: t("name_4"),
    position: t("speciality_4"),
    avatar: "/_nuxt/images/png/yorov.png",
    quote: t("testimonial_4")
  },
  {
    name: t("name_5"),
    position: t("speciality_5"),
    avatar: "/_nuxt/images/png/mijgona.png",
    quote: t("testimonial_5")
  }
]
</script>

<i18n lang="json">
{
  "en": {
    "what_schools_say": "What schools say",
    "about_platform": "about platform",
    "platform_is_already": "The platform is already helping schools across the country simplify management, increase control, and improve communication with parents. School leaders note the convenience, transparency, and real time savings — all of which allows them to focus on the most important thing: the quality of education",
    "name_1": "Karimov Siyovush",
    "speciality_1": "Biology teacher",
    "testimonial_1": "EKhonish is an electronic and centralized educational system designed to improve student learning and provide full control over the educational process in schools. This application allows schools, teachers and parents to easily and transparently monitor and manage educational activities",
    "name_2": "Sharipov Saidmurod",
    "speciality_2": "Mathematics teacher",
    "testimonial_2": "The EKhonish program is a comprehensive educational and administrative tool that is of great importance for the development of education and improving the quality of knowledge in Tajikistan. For effective learning and student success, all schools in the country must switch to this system. Thus, the EKhonish program not only improves the level of knowledge of students, but also significantly simplifies and makes monitoring of education more effective for teachers, schools and parents.",
    "name_3": "Yusupova Ashurmokh",
    "speciality_3": "Primary school teacher",
    "testimonial_3": "Easy communication between school, student and parents: All messages and notifications regarding student learning and behavior are available in the app. Access from anywhere and at any time. The app works on phones, tablets and computers, allowing students and parents to access information and lessons.Digital and efficient: Teaching and monitoring are done electronically without the use of paper documents, saving time for teachers and administrators",
    "name_4": "Yorov Khursand",
    "speciality_4": "School director",
    "testimonial_4": "Provides precise and transparent control of the educational process. This contributes to improving the quality of education and the effectiveness of learning. Supports the activity and awareness of parents in matters of their children's education. It integrates and facilitates education using modern technologies",
    "name_5": "Shamsuddinova Mijgona",
    "speciality_5": "History and law teacher",
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
    "name_4": "Ёров Хурсанд",
    "speciality_4": "Директор школы",
    "testimonial_4": "Обеспечивает точный и прозрачный контроль образовательного процесса. Это способствует повышению качества образования и эффективности обучения. Поддерживает активность и информированность родителей в вопросах образования их детей. Он интегрирует и облегчает образование с использованием современных технологий",
    "name_5": "Шамсуддинова Миджгона",
    "speciality_5": "Учительница истории и права",
    "testimonial_5": "EKhonish — современный и необходимый инструмент для когнитивного развития детей. Эта программа не только облегчает чтение, но и создает увлекательную среду для изучения таджикских и мировых книг. Благодаря этой программе учащиеся могут расширить свои знания и повысить интерес к чтению. Электронное обучение является важным шагом на пути цифровизации образования в Таджикистане"

  },
  "tj": {
    "what_schools_say": "Назари муассисаҳои таълимӣ оид ба истифодаи платформаи",
    "about_platform": "E-KHONISH",
    "platform_is_already": "Низоми идоракунӣ аллакай бо мактабҳои саросари кишвар дар осон кардани идоракунӣ, таҳкими назорат ва беҳтарсозии ҳамкорӣ бо волидайн мусоидат мекунад. Роҳбарияти мактабҳо аз осонии кор, шаффофият ва сарфаи воқеии вақт изҳори қаноатмандӣ мекунанд зеро он бештар ба сифати таълим тамаркуз мекунад",
    "name_1": "Каримов Сиёвуш",
    "speciality_1": "омӯзгори биология",
    "testimonial_1": "Барномаи e-Khonish як низоми электронии мутамаркази таълимӣ мебошад, ки барои беҳтар намудани раванди таълим ва назорати пурраи фаъолияти таълимӣ дар мактабҳо пешбинӣ шудааст. Ин барнома имкон медиҳад, ки мактабҳо, омӯзгорон ва волидон фаъолияти таълимиро ба осонӣ ва шаффоф назорат ва идора кунанд",
    "name_2": "Шарипов Саидмурод",
    "speciality_2": "омӯзгори математика",
    "testimonial_2": "Барномаи e-Khonish як абзори мукаммали таълимӣ ва маъмурӣ мебошад, ки барои баланд бардоштани сифати дониш дар Тоҷикистон аҳамияти бузург дорад. Барои таълими самаранок ва баланд бардоштани сатҳи дониши хонандагон, ҳамаи мактабҳои кишвар бояд ба ин система гузаранд. Ин барнома на танҳо донишро беҳтар менамояд, балки назорати таълимро барои омӯзгорон, мактаб ва волидон осон ва муассир мегардонад",
    "name_3": "Юсупова Ашурмох",
    "speciality_3": "омӯзгори синфҳои ибтидоӣ",
    "testimonial_3": "Муоширати осон байни мактаб, хонанда ва волидайн: Ҳама паёмҳо ва огоҳиномаҳо оид ба рафтор ва раванди таълимии хонанда дар барнома дастрас мебошанд. Дастрасӣ аз ҳама нуқтаи дунё ва дар ҳар вақти дилхоҳ имконпазир аст. Барнома дар телефонҳо, планшетҳо ва компютерҳо фаъолият мекунад.Рақамӣ ва муассир – Назорат ва таълим пурра ба таври электронӣ сурат мегирад, бе истифодаи ҳуҷҷатҳои коғазӣ, ки вақти омӯзгорон ва маъмуриятро сарфа мекунад",
    "name_4": "Ёров Хурсанд",
    "speciality_4": "директори мактаб",
    "testimonial_4": "Барнома назорати дақиқ ва шаффофи равандҳои таълимиро фароҳам меорад. Ин амал ба баланд бардоштани сифати таълим ва самаранокии омӯзиш мусоидат мекунад. Волидон дар бораи таҳсили фарзандони худ бештар огоҳ мешаванд ва ҳамеша оиди раванди таҳсил дар иртибот мемонанд. Ин низом таҳсилро бо истифодаи технологияҳои муосир осон ва самаранок мегардонад",
    "name_5": "Шамсуддинова Мидҷгона",
    "speciality_5": "омӯзгори таърих ва ҳуқуқ",
    "testimonial_5": "e-Khonish — воситаи муосир ва зарурӣ барои рушди маърифатии кӯдакон аст. Барнома на танҳо хонданро осон мекунад, балки муҳити шавқоварро барои мутолиаи китобҳои тоҷикӣ ва ҷаҳонӣ фароҳам месозад. Ин имконият медиҳад, ки хонандагон дониши худро васеъ намуда, шавқи мутолиаро афзун намоянд. Омӯзиши рақамӣ як қадами муҳими дигар дар раванди рақамисозии соҳаи маориф дар Тоҷикистон мебошад"

  }
}
</i18n>
