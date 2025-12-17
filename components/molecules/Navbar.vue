<script setup lang="ts">
import {globalTranslate as translate} from 'assets/js/language'
</script>

<template>
  <nav class="navbar">
    <a href="#features" class="nav-link">{{ translate("features") }}</a>
    <a href="#capabilities" class="nav-link">{{ translate("capabilities") }}</a>
    <a href="#about" class="nav-link">{{ translate("who_is_it_for") }}</a>
    <a href="#about" class="nav-link">{{ translate("presentation") }}</a>
    <a href="#contacts" class="nav-link">{{ translate("contacts") }}</a>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  text-transform: capitalize;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.25s ease;
  position: relative;
}

.nav-link:hover {
  color: #00cfff;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #00cfff;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
  }
}
</style>
