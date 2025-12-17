<script setup lang="ts">
import { ref, watch } from 'vue'
import {globalTranslate as translate} from 'assets/js/language'
import LanguageSwitcher from './LanguageSwitcher.vue'
const baseURL = useRuntimeConfig().public.baseURL

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Prevent body scroll when menu is open
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  } else {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }
})
</script>

<template>
  <div class="menu-bar">
    <button
        class="menu-btn"
        @click="toggleMenu"
        aria-label="Open menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" style="color: black; height: 40px; margin-right: 54px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <transition name="fade">
      <div v-if="isOpen" class="menu-overlay">
        <div class="menu-content">
          <div class="menu-top">
            <img src="/images/webp/logo.webp" alt="logo" class="logo" />
            <button class="close-btn" @click="toggleMenu" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" style="color: black; height: 35px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="menu-center">
            <div class="menu-links">
              <a href="#features" @click="toggleMenu">{{
                  translate('features')
                }}</a>
              <a href="#capabilities" @click="toggleMenu">{{
                  translate('capabilities')
                }}</a>
              <a href="#about" @click="toggleMenu">{{
                  translate('who_is_it_for')
                }}</a>
              <a href="#about" @click="toggleMenu">{{
                  translate('presentation')
                }}</a>
              <a href="#contacts" @click="toggleMenu">{{
                  translate('contacts')
                }}</a>
            </div>

            <div class="menu-lang">
              <LanguageSwitcher />
            </div>
          </div>

          <div class="menu-footer">
            <nuxt-link
                :to="`${baseURL}/authentication`"
                class="btn-primary"
                @click="toggleMenu"
            >
              {{ translate('login') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.menu-bar {
  display: block;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.menu-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 1.5rem 1.25rem 2rem;
  width: 100%;
  box-sizing: border-box;
}

.menu-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
}

.logo {
  height: 42px;
  width: auto;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
}

.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #000;
  text-transform: capitalize;
}

.menu-links a {
  text-decoration: none;
  color: inherit;
  transition: color 0.25s ease;
}

.menu-links a:hover {
  color: #00cfff;
}

.menu-lang {
  margin-top: 2rem;
}

.menu-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

.btn-primary {
  text-decoration: none;
  color: #fff;
  background-color: #00cfff;
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #00aed6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .menu-bar {
    display: none;
  }
}
</style>