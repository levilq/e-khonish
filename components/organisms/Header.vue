<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>
<i18n lang="json">
{
  "en": {
    "login": "log in"
  },
  "ru": {
    "login": "войти"
  },
  "tj": {
    "login": "даромад"
  }
}
</i18n>
<template>
  <header class="flex justify-between items-center py-4">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <img src="/images/png/logo.png" alt="eKhonish logo" class="h-10 w-auto" />
    </div>

    <MoleculesMenuBar/>

    <!-- Language + Login -->
    <div class="flex items-center gap-6">
      <MoleculesLanguageSwitcher/>
      <AtomsButtonsPrimary>
        {{t('login')}}
      </AtomsButtonsPrimary>
    </div>
  </header>
</template>

<style scoped>

</style>