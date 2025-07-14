<template>
  <section class="px-4">
    <div class="flex py-12 px-10">
      <h2
          class="text-3xl lg:text-5xl mb-8 text-center leading-snug font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#005A83] to-[#FF9D00]"
          style="font-family: 'Montserrat', sans-serif;"
      >
        {{ t('headline') }}
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[45px] items-start">
      <!-- Left image -->
      <div class="">
        <img src="/images/png/laptop.png" alt="Laptop" class="h-[456px] object-cover hidden md:flex ml-[80px]" />
        <img src="/images/png/contacts-mobile.png" alt="Mobile" class="w-full flex justify-center object-cover md:hidden" />
      </div>

      <!-- Right form -->
      <div class="w-full ">
        <form class="space-y-4 text-[#005f87]">
          <label class="font-bold ml-2">{{ t('label_name') }}</label>
          <input
              required
              type="text"
              :placeholder="t('placeholder_name')"
              class="w-full px-4 py-3 rounded-3xl border-2 border-[#005f87] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]"
          />

          <label class="font-bold ml-2">{{ t('label_school') }}</label>
          <input
              required
              type="text"
              :placeholder="t('placeholder_school')"
              class="w-full px-4 py-3 rounded-3xl border-2 border-[#005f87] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]"
          />

          <label class="font-bold ml-2">{{ t('label_email') }}</label>
          <input
              type="email"
              placeholder="domain@domain.com"
              class="w-full px-4 py-3 rounded-3xl border-2 border-[#005f87] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]"
          />

          <label class="font-bold ml-2">{{ t('label_phone') }}</label>
          <input
              required
              type="tel"
              :placeholder="t('placeholder_phone')"
              class="w-full px-4 py-3 rounded-3xl border-2 border-[#005f87] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]"
          />
          <div class="flex justify-end">
            <button
                type="submit"
                class="bg-[#005A83] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#005f87] transition w-1/2 cursor-pointer"
            >
              {{ t('submit') }} →
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "headline": "Start digitalizing your school today",
    "label_name": "Full Name",
    "label_school": "School",
    "label_email": "Email",
    "label_phone": "Phone",
    "placeholder_name": "Your full name",
    "placeholder_school": "School No. 4",
    "placeholder_phone": "+992 00 000 0000",
    "submit": "Submit Request"
  },
  "ru": {
    "headline": "Начните цифровизацию вашей школы уже сегодня",
    "label_name": "ФИО",
    "label_school": "Название школы",
    "label_email": "E-mail",
    "label_phone": "Телефон",
    "placeholder_name": "ФИО",
    "placeholder_school": "Школа №4",
    "placeholder_phone": "+992 00 000 0000",
    "submit": "Оставить заявку"
  },
  "tj": {
    "headline": "Равандҳои рақамисозии мактабатонро аз имрӯз оғоз намоед!",
    "label_name": "Номи шумо",
    "label_school": "Номи мактаб",
    "label_email": "Почтаи электронӣ",
    "label_phone": "Рақами телефон",
    "placeholder_name": "Ному насаб",
    "placeholder_school": "Мактаби №4",
    "placeholder_phone": "+992 00 000 0000",
    "submit": "Дархост гузоред"
  }
}
</i18n>
