<template>
  <header class="header" :class="{ scrolled }">
    <div class="header-inner">
      <div class="logo">Owada</div>

      <div class="hamburger" @click="toggleMenu">
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
      </div>

      <nav class="nav" :class="{ open: menuOpen }">
        <a href="#hero" @click="closeMenu">Home</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#works" @click="closeMenu">Works</a>
        <a href="#experience" @click="closeMenu">Experience</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => menuOpen.value = !menuOpen.value
const closeMenu = () => menuOpen.value = false

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
/* ここに前回渡したヘッダーCSSをそのまま貼ってOK */
</style>
