<script setup lang="ts">
import {globalTranslate as t} from "assets/js/language";
</script>

<template>
  <div class=" inset-x-0 z-50 pointer-events-none">
    <div class="mx-auto max-w-[1128px] px-3 md:px-0">
      <header
          class="pointer-events-auto mt-3 flex justify-between items-center py-3 md:py-4 px-4 md:px-6
               rounded-2xl backdrop-blur-xl
              ">
        <div class="flex items-center gap-2">
          <img src="/images/webp/logo.webp" alt="eKhonish logo" class="h-10 w-auto" />
        </div>

        <MoleculesMenuBar />

        <MoleculesNavbar class="hidden md:flex" />

        <div class="hidden md:flex items-center gap-6">
          <MoleculesLanguageSwitcher />
          <AtomsButtonsPrimary>
            {{ t("login") }}
          </AtomsButtonsPrimary>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped></style>
