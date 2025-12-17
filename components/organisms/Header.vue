<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {globalTranslate as translate} from 'assets/js/language'
import { useRoute } from "vue-router";

const baseURL = useRuntimeConfig().public.baseURL
const route = useRoute();

const showModalVisible = ref(false);

const toggleMenu = () => (showModalVisible.value = !showModalVisible.value);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div class="header-wrapper">
    <header class="header" :class="{ 'header--scrolled': isScrolled }">
      <div class="header__logo">
        <img src="/images/webp/logo.webp" alt="eKhonish logo" />
      </div>

      <div class="mobile-only">
        <MoleculesMenuBar />
      </div>

      <MoleculesNavbar class="header__navbar desktop-only" />

      <div class="header__right desktop-only">
        <MoleculesLanguageSwitcher />
        <div class="auth-btn">
          <nuxt-link :to="`${baseURL}/authentication`" class="btn-primary">
            {{ translate("login") }}
          </nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>

.header-wrapper {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1128px;
  z-index: 100;
  padding: 0 1rem;
}


.header {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin: 0 auto;
  border-radius: 20px;

  transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(25px);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
}

.header__logo img {
  height: 40px;
  width: auto;
  display: block;
}


.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none !important;
  }
}


.desktop-only {
  display: none !important;
}

@media (min-width: 768px) {
  .desktop-only {
    display: flex !important;
  }
}

.header__navbar {
  flex: 1;
  justify-content: center;
}

.header__right {
  align-items: center;
  gap: 1.25rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  background-color: #00cfff;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}
.btn-primary:hover {
  background-color: #00aed6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>