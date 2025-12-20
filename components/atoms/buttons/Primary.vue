<script setup lang="ts">
const baseURL = useRuntimeConfig().public.baseURL
</script>

<template>
  <nuxt-link :to="`${baseURL}/authentication`">
  <button class="capitalize bg-[#005B88] text-white px-5 py-2 font-semibold rounded-xl text-sm hover:bg-[#00466a] cursor-pointer">
    <slot/>
  </button>
  </nuxt-link>
</template>