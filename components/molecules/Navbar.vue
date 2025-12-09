<script setup lang="ts">
import {globalTranslate as t} from "assets/js/language";
</script>

<template>
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

