<template>
  <section class="py-8 px-4 ">
    <div class="max-w-6xl mx-auto text-center font-medium">
      <h2 class="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-12">
        {{ t("our_values") }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-6 md:mt-20">
        <!-- First three values -->
        <div
            class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
          <div class="flex flex-col items-center text-center max-w-sm mx-auto ">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
              <img src="/images/svg/growth.svg" alt="" class="w-9 h-9"/>
            </div>
            <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
              {{ t("growth") }}
            </h3>
            <p class="text-gray-500 text-sm leading-6" style="font-weight: 700;">
              {{ t("growth_desc") }}
            </p>
          </div>
        </div>

        <div
            class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
          <div class="flex flex-col items-center text-center max-w-sm mx-auto">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
              <img src="/images/svg/availability2.svg" alt="" class="w-9 h-9"/>
            </div>
            <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
              {{ t("availability") }}
            </h3>
            <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700;">
              {{ t("availability_desc") }}
            </p>
          </div>
        </div>



        <div
            class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">

          <div class="flex flex-col items-center text-center max-w-sm mx-auto">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
              <img src="/images/svg/innovation.svg" alt="" class="w-9 h-9"/>
            </div>
            <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
              {{ t("innovations") }}
            </h3>
            <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700;">
              {{ t("innovations_desc") }}
            </p>
          </div>
        </div>


        <!-- Last two values centered in a row -->

        <div class="md:col-span-3 flex flex-col md:flex-row justify-center gap-x-6 gap-y-16">
          <div
              class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">

            <div class="flex flex-col items-center text-center max-w-sm mx-auto">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#A4CD39] transition-transform duration-200 group-hover:scale-110">
                <img src="/images/svg/safety.svg" alt="" class="w-9 h-9"/>
              </div>
              <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
                {{ t("safety") }}
              </h3>
              <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700";>
                {{ t("safety_desc") }}
              </p>
            </div>
          </div>
          <div
              class=" group rounded-xl p-6 text-center transition-all border border-transparent shadow-xl md:shadow-none md:border-none md:hover:shadow-xl md:hover:border-blue-200">
            <div class="flex flex-col items-center text-center max-w-sm mx-auto">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFA41B] transition-transform duration-200 group-hover:scale-110">
                <img src="/images/svg/partnership.svg" alt="" class="w-9 h-9"/>
              </div>
              <h3 class="text-xl font-bold text-[#1E1E1E] mb-2">
                {{ t("partnership") }}
              </h3>
              <p class="text-gray-500 text-sm leading-6 " style="font-weight: 700;">
                {{ t("partnership_desc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const {t} = useI18n({useScope: 'local'})
</script>

<i18n lang="json">
{
  "en": {
    "our_values": "Our values",
    "growth": "Growth",
    "growth_desc": "We create conditions that promote not only the accumulation of knowledge, but also the further professional growth of our students",
    "availability": "Availability",
    "availability_desc": "We strive for quality education that is accessible to all, regardless of their place, location and aspects",
    "innovations": "Innovations",
    "innovations_desc": "We actively implement the latest technologies, such as artificial intelligence and machine learning, to improve the efficiency of training and enhance interaction",
    "safety": "Safety",
    "safety_desc": "We guarantee complete protection of personal data and confidentiality of your information",
    "partnership": "Partnership",
    "partnership_desc": "We are creating a digital educational ecosystem that unites schools, parents, students and government agencies to improve education in remote regions of our republics"
  },
  "ru": {
    "our_values": "Наши ценности",
    "growth": "Развитие",
    "growth_desc": "Мы создаём такие условия, которые способствуют не только накоплению знаний, но и дальнейшему профессиональному росту наших учеников",
    "availability": "Доступность",
    "availability_desc": "Мы стремимся к качественному образованию, доступному для всех, вне зависимости от их места, расположения и аспектов",
    "innovations": "Инновации",
    "innovations_desc": "Мы активно внедряем новейшие технологии, такие как искусственный интеллект и машинное обучение, для повышения эффективности обучения и улучшения взаимодействия",
    "safety": "Безопасность",
    "safety_desc": "Мы гарантируем полную защиту персональных данных и конфиденциальность вашей информации",
    "partnership": "Партнёрство",
    "partnership_desc": "Мы создаем цифровую образовательную экосистему, объединяющую школы, родителей, учеников и государственные структуры в целях повышения образования в отдаленных регионах нашей республик"
  },
  "tj": {
    "our_values": "Арзишҳо",
    "growth": "Рушд",
    "growth_desc": "Шароите муҳайё мекунем, ки натанҳо барои андӯхтани дониш, барои рушди минбаъдаи касбии талабагони мо низ мусоидат менамояд.",
    "availability": "Дастрасӣ",
    "availability_desc": "Барои таълими босифат ва дастрас барои ҳама, новобаста аз маҳали ҷойгиршавӣ ва  тарафҳои дигар, талош менамоем.",
    "innovations": "Инноватсия",
    "innovations_desc": "Барои баланд бардоштани самаранокии таълим ва беҳтарсозии ҳамкории байниҳамдигарӣ  технологияҳои навтарин ба мисли зеҳни сунъӣ ва таълими мошиниро фаъолона ҷорӣ менамоем",
    "safety": "Амният",
    "safety_desc": "Муҳофизати пурраи маълумоти шахсӣ ва махфияти маълумоти шуморо кафолат медиҳем.",
    "partnership": "Шарикият",
    "partnership_desc": "Экосистемаи рақамии таълимии муттаҳидкунандаи мактаб, падару модоран, талабагон ва сохторҳои давлатиро бо мақсади баланд бардоштани сатҳи таълим дар минтақаҳои дурдасти ҷумҳурӣ ба вуҷуд меоварем."
  }
}
</i18n>
