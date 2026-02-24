<template>
    <section class="hero">
      <div class="hero-content">
        <h1 class="title">既存システムを“止めない”エンジニア</h1>
        <p class="subtitle">
          SQL / Oracle / Javaバッチ保守（JP1） / Linux / パフォーマンス分析  
        </p>
        <div class="buttons">
          <router-link to="/about" class="hero-btn">About Me</router-link>
          <router-link to="/works" class="hero-btn secondary">Works</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0d0d0d;
    color: #fff;
    text-align: center;
  }
  
  .title {
    font-size: 3rem;
    margin-bottom: 10px;
    color: #00eaff;
    text-shadow: 0 0 12px #00eaff;
  }
  
  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 30px;
    opacity: 0.85;
    line-height: 1.6;
  }
  
  .buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  
  .hero-btn {
    padding: 12px 28px;
    background: #00eaff;
    color: #000;
    border-radius: 6px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
  }
  
  .hero-btn.secondary {
    background: transparent;
    border: 2px solid #00eaff;
    color: #00eaff;
  }
  
  .hero-btn:hover {
    background: #ff4dff;
    color: #fff;
    box-shadow: 0 0 12px #ff4dff;
  }
  </style>
  