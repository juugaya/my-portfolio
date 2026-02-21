<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
.content {
  padding-top: 80px; /* ヘッダーの高さ分の余白 */
}
</style>
