<template>
  <div class="home-page">
    <h1 class="section-title">Home</h1>

    <p class="vision-text">
  <span class="highlight">
    フレームワークを活用した開発経験を通じて、
    実務で通用するアプリケーションを構築できるエンジニアを目指しています。
  </span>
</p>


    <!-- ここが Experience と同じ黒セクション -->
    <!-- <section class="section-box">
      <p class="home-text">
        フレームワークを活用した開発経験を通じて、  
        実務で通用するアプリケーションを構築できるエンジニアを目指しています。
      </p>
    </section> -->

    <!-- Skills セクション（白カードを混ぜるならここに） -->
    <section class="section-box">
      <SkillsSection />
    </section>
  </div>
</template>

<script setup>
import SkillsSection from "../components/SkillsSection.vue";
</script>

<style scoped>
/* ページ全体（Experience と同じ） */
.home-page {
  background: #0a0a0a;
  min-height: 100vh;
  padding: 60px 20px;
  color: #fff;
}

/* タイトル（統一） */
.section-title {
  font-size: 2.4rem;
  margin-bottom: 40px;
  color: #00eaff;
  text-shadow: 0 0 12px #00eaff;
  text-align: center;
}

/* 黒セクション（Experience と同じ） */
.section-box {
  background: #111;
  padding: 30px 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  border-left: 4px solid #00eaff;
  box-shadow: 0 0 12px rgba(0, 234, 255, 0.2);
}

/* Home の文章 */
.home-text {
  color: #ccc;
  line-height: 1.8;
  white-space: pre-line;
}

.highlight {
  color: #00eaff;
  font-weight: 700;
  font-size: 1.2rem;
  text-shadow: 0 0 10px rgba(0, 234, 255, 0.7);
  display: inline-block;
  padding: 4px 2px;
}

</style>
