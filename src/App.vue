

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
.app-wrapper {
  background: #0a0a0a; /* ★ Experience と同じ黒背景 */
  min-height: 100vh;
  color: #fff;
}
</style>
<template>
  <div id="app" class="app-wrapper">
    <Header />
    <router-view />
  </div>
  
</template>

