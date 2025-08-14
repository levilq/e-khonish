<script setup>
definePageMeta({
  layout: "default",
});

const { t, locale } = useI18n({
  useScope: "local",
});

const { setPageSEO, generateWebSiteSchema, generateSoftwareApplicationSchema } =
  useSEO();

const titles = {
  ru: "E-Khonish - Умная цифровая платформа для школ Таджикистана",
  en: "E-Khonish - Smart Digital Platform for Schools in Tajikistan",
  tj: "E-Khonish - Платформаи ҳушманди рақамӣ барои мактабҳои Тоҷикистон",
};

const descriptions = {
  ru: "Автоматизируйте управление школой с E-Khonish. Цифровая платформа для управления учебным процессом, вовлечения учеников и родителей в Таджикистане.",
  en: "Automate school management with E-Khonish. Digital platform for educational process management, engaging students and parents in Tajikistan.",
  tj: "Идоракунии мактабро бо E-Khonish автоматӣ кунед. Платформаи рақамӣ барои идоракунии раванди таълимӣ, ҷалби донишҷӯён ва падару модарон дар Тоҷикистон.",
};

const keywords = {
  ru: "образование, школа, цифровизация, Таджикистан, управление школой, электронный дневник, автоматизация",
  en: "education, school, digitalization, Tajikistan, school management, electronic diary, automation",
  tj: "маориф, мактаб, рақамикунонӣ, Тоҷикистон, идоракунии мактаб, рӯзномаи электронӣ, автоматикунонӣ",
};

const structuredData = [
  generateWebSiteSchema(),
  generateSoftwareApplicationSchema(),
];

setPageSEO({
  title: titles,
  description: descriptions,
  keywords: keywords,
  canonicalPath: "/",
  structuredData: structuredData,
});
</script>

<template>
  <div class="w-full md:py-9">
    <!-- Outer Wrapper: Centering the whole grid -->
    <!-- Wrapper: Make sure it’s full width and centers its content -->
    <div class="w-full px-4">
      <div class="max-w-[1128px] mx-auto flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[45px] items-start">
          <!-- Right Grid -->
          <OrganismsAnimatedSq />

          <!-- Left Side -->
          <div class="w-full md:w-[552px] space-y-3 mx-auto">
            <h1
              style="font-family: 'Montserrat', sans-serif"
              class="text-[#005B88] mt-10 md:mt-0 text-4xl md:text-[64px] font-extrabold leading-tight font-mont text-center md:text-left"
            >
              E-KHONISH
            </h1>

            <div class="flex -mt-16">
              <div
                class="flex gap-x-4 text-[140px] text-[#FF9900] font-extrabold items-center mx-auto md:mx-0"
              >
                <span style="font-family: 'Montserrat', sans-serif">*</span>
                <span style="font-family: 'Montserrat', sans-serif">*</span>
                <span style="font-family: 'Montserrat', sans-serif">*</span>
                <p
                  class="text-[40px] text-black font-bold -mt-10 hidden md:flex"
                >
                  {{ t("smart") }}
                </p>
              </div>
            </div>

            <div
              class="text-[40px] font-bold text-black -mt-28 leading-snug hidden md:flex"
            >
              <div>
                <p>{{ t("digital_platform") }}</p>
                <p>{{ t("for_school") }}</p>
              </div>
            </div>

            <div
              class="text-[40px] font-bold text-black -mt-10 leading-snug md:hidden text-center"
            >
              <p>{{ t("digital_platform") }} {{ t("for_school") }}</p>
            </div>

            <img
              src="/images/svg/underline.svg"
              alt="underline"
              class="w-[300px] mx-auto md:mx-0 md:-ml-[65px]"
            />

            <p
              class="text-[18px] text-[#222] max-w-md text-center md:text-left"
            >
              {{ t("automate_management") }}
            </p>

            <img
              src="/images/svg/green-curve.svg"
              alt="curve"
              class="relative left-[380px] bottom-16 w-[180px] mt-4 hidden md:flex"
            />

            <button
              class="hover:bg-[#00466a] cursor-pointer mx-auto md:mx-0 md:mt-0 relative md:bottom-[170px] bg-[#005B88] text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md"
            >
              {{ t("let_try") }}
              <span class="text-2xl my-auto">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ШКОЛЫ CARD EXACT DESIGN -->
    <OrganismsSquareHero />

    <section id="features">
      <OrganismsPurposeSection />
      <OrganismsPlatformFeatures />
    </section>

    <section id="capabilities">
      <OrganismsPlatforCapabilities />
    </section>

    <section id="about">
      <OrganismsAbout />
      <OrganismsAvailabilityStats />
      <OrganismsOurValues />
      <OrganismsTestimonialsSlider />
    </section>

    <section id="contacts">
      <OrganismsContactSection />
    </section>

    <OrganismsSupportedBy class="md:mt-16" />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 80px;
}
</style>

<i18n lang="json">
{
  "en": {
    "digitalization": "digitalization",
    "innovation": "innovation",
    "transformation": "transformation",
    "smart": "smart",
    "digital_platform": "digital platform",
    "for_school": "for schools",
    "automate_management": "Automate management, accelerate processes, engage students and parents",
    "let_try": "Let’s try"
  },
  "ru": {
    "digitalization": "Цифровизация",
    "innovation": "Инновации",
    "transformation": "Трансформация",
    "smart": "умная",
    "digital_platform": "цифровая платформа",
    "for_school": "для школ",
    "automate_management": "Автоматизируйте управление, ускорьте процессы, вовлекайте учеников и родителей",
    "let_try": "Попробовать платформу"
  },
  "tj": {
    "digitalization": "Рақамизатсия",
    "innovation": "Навоварй",
    "transformation": "Трансформатсия",
    "smart": "платформаи",
    "digital_platform": "ҳушманди рақамӣ",
    "for_school": "барои мактабҳо",
    "automate_management": "Идоракуниро автоматӣ кунед, равандҳоро суръат бахшед, талабагон ва падару модаронро ҷалб намоед",
    "let_try": "Талаб кардани намоиш"
  }
}
</i18n>
