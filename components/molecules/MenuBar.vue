<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>
<i18n lang="json">
{
  "en": {
    "features": "features",
    "capabilities": "capabilities",
    "who_is_it_for": "Who is it for",
    "presentation": "presentation",
    "contacts": "contacts"
  },
  "ru": {
    "features": "особенности",
    "capabilities": "возможности",
    "who_is_it_for": "Для кого",
    "presentation": "О нас",
    "contacts": "контакты"
  },
  "tj": {
    "features": "хусусиятҳо",
    "capabilities": "имкониятҳо",
    "who_is_it_for": "Барои кӣ",
    "presentation": "намоиш",
    "contacts": "тамос"
  }
}
</i18n>
<template>
  <!-- Navigation Links -->
  <nav class="hidden lg:flex gap-6 text-md text-black font-bold">
    <a href="#" class="hover:text-cyan-400 capitalize">{{t('features')}}</a>
    <a href="#" class="hover:text-cyan-400 capitalize">{{t('capabilities')}}</a>
    <a href="#" class="hover:text-cyan-400">{{t('who_is_it_for')}}?</a>
    <a href="#" class="hover:text-cyan-400 capitalize">{{t('presentation')}}</a>
    <a href="#" class="hover:text-cyan-400 capitalize">{{t('contacts')}}</a>
  </nav>
</template>

<style scoped>

</style>