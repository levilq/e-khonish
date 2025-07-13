<script setup lang="ts">

</script>

<template>
  <div class="relative min-h-screen overflow-hidden" style="font-family: 'GTWalsheimPro', sans-serif;">
    <!-- Blurry Circles -->
    <div class="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#FFA41B]/70 rounded-full blur-[150px] z-0"></div>
    <div class="absolute  right-[-100px] w-[400px] h-[400px] bg-[#00CFFF]/70 rounded-full blur-[150px] z-0"></div>

    <!-- Main container -->
    <div class="relative z-10 container mx-auto max-w-[1128px]">
      <OrganismsHeader class="mx-3 md:mx-0" />
      <slot />
      <OrganismsFooterSection/>
    </div>

  </div>
</template>

<style scoped>
</style>
