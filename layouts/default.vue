<script setup lang="ts">

</script>

<template>
  <div class="relative min-h-screen overflow-hidden" style="font-family: 'GTWalsheimPro', sans-serif;">
    <!-- Blurry Circles in all corners -->
    <div class="absolute top-[520px] left-[-120px] w-[500px] h-[450px] bg-[#FFA41B]/70 rounded-full blur-[150px] z-0"></div>
    <div class="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#00CFFF]/70 rounded-full blur-[150px] z-0"></div>
    <div class="absolute top-[1620px] right-[-120px] w-[400px] h-[400px] bg-[#FFA41B]/70 rounded-full blur-[150px] z-0"></div>
    <div class="absolute top-[2420px] left-[-120px] w-[500px] h-[450px] bg-[#00CFFF]/70 rounded-full blur-[150px] z-0"></div>
    <div class="hidden md:flex absolute top-[3120px] right-[-120px] w-[400px] h-[400px] bg-[#00CFFF]/70 rounded-full blur-[150px] z-0"></div>
    <div class="hidden md:flex absolute top-[4000px] left-[-120px] w-[500px] h-[450px] bg-[#00CFFF]/70 rounded-full blur-[150px] z-0"></div>
    <div class="absolute top-[4200px] right-[-120px] w-[400px] h-[400px] bg-[#FFA41B]/70 rounded-full blur-[150px] z-0"></div>

    <div class="absolute bottom-[420px] left-[-120px] w-[400px] h-[400px] bg-[#FFA41B]/70 rounded-full blur-[150px] z-0"></div>
    <div class="hidden md:flex absolute bottom-[420px] right-[-120px] w-[400px] h-[400px] bg-[#00CFFF]/70 rounded-full blur-[150px] z-0"></div>

    <!-- Optional center blur -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFA41B]/20 rounded-full blur-[120px] z-0"></div>

    <!-- Main container -->
    <div class="relative z-10 container mx-auto max-w-[1128px]">
      <OrganismsHeader class="fixed top-0 mx-3 md:mx-0 " />
      <slot />
      <OrganismsFooterSection />
    </div>
  </div>
</template>

<style scoped>
</style>
