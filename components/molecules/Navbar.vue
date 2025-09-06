<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "local" });
</script>

<template>
  <!-- Navigation Links -->
  <div
    class="flex items-center gap-6 text-base font-bold text-black capitalize "
  >
    <a
      href="#features"
      class="hover:text-blue-400 transition-colors duration-200"
      >{{ t("features") }}</a
    >
    <a
      href="#capabilities"
      class="hover:text-blue-400 transition-colors duration-200"
      >{{ t("capabilities") }}</a
    >
    <a
      href="#about"
      class="hover:text-blue-400 transition-colors duration-200"
      >{{ t("who_is_it_for") }}</a
    >
    <a
      href="#about"
      class="hover:text-blue-400 transition-colors duration-200"
      >{{ t("presentation") }}</a
    >
    <a
      href="#contacts"
      class="hover:text-blue-400 transition-colors duration-200"
      >{{ t("contacts") }}</a
    >
  </div>
</template>

<style scoped></style>

<i18n lang="json">
{
  "en": {
    "features": "features",
    "capabilities": "capabilities",
    "who_is_it_for": "Who is it for",
    "presentation": "presentation",
    "contacts": "contacts",
    "login": "log in"
  },
  "ru": {
    "features": "особенности",
    "capabilities": "возможности",
    "who_is_it_for": "Для кого",
    "presentation": "О нас",
    "contacts": "контакты",
    "login": "войти"
  },
  "tj": {
    "features": "хусусиятҳо",
    "capabilities": "имкониятҳо",
    "who_is_it_for": "Барои кӣ",
    "presentation": "намоиш",
    "contacts": "тамос",
    "login": "даромад"
  }
}
</i18n>
