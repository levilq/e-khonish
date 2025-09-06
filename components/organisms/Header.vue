<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<i18n lang="json">
{
  "en": { "login": "log in" },
  "ru": { "login": "войти" },
  "tj": { "login": "даромад" }
}
</i18n>

<template>
  <!-- Fixed header shell -->
  <div class=" inset-x-0 z-50 pointer-events-none">
    <!-- Centered content width -->
    <div class="mx-auto max-w-[1128px] px-3 md:px-0">
      <!-- Glassmorphic header -->
      <header
          class="pointer-events-auto mt-3 flex justify-between items-center py-3 md:py-4 px-4 md:px-6
               rounded-2xl backdrop-blur-xl
              ">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img src="/images/png/logo.png" alt="eKhonish logo" class="h-10 w-auto" />
        </div>

        <!-- Mobile menu icon / bar -->
        <MoleculesMenuBar />

        <!-- Desktop navbar -->
        <MoleculesNavbar class="hidden md:flex" />

        <!-- Lang + login -->
        <div class="hidden md:flex items-center gap-6">
          <MoleculesLanguageSwitcher />
          <!-- Example primary button if needed later
          <AtomsButtonsPrimary>
            {{ t("login") }}
          </AtomsButtonsPrimary> -->
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped></style>
