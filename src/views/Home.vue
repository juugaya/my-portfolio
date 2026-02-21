<template>
    <h1>Home</h1>
  </template>
<template>
    <section class="hero">
      <div class="inner">
        <h1 class="title">
          Owada Portfolio
        </h1>
  
        <p class="subtitle">
          System Engineer / Tester / Data Migration / Automation  
          <br />
          SQL・Java・VBA・PowerShell・JP1・Oracle
        </p>
  
        <div class="buttons">
          <router-link to="/about" class="btn">About Me</router-link>
          <router-link to="/works" class="btn-outline">Works</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  
    background: #0a0a0a;
    color: #fff;
    padding: 0 20px;
  
    background: radial-gradient(circle at center, #111 0%, #000 70%);
  }
  
  .inner {
    max-width: 900px;
  }
  
  .title {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #00eaff;
    text-shadow: 0 0 12px #00eaff;
  }
  
  .subtitle {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 40px;
    color: #ccc;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .btn,
  .btn-outline {
    padding: 12px 28px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
  }
  
  .btn {
    background: #00eaff;
    color: #000;
    box-shadow: 0 0 10px #00eaff;
  }
  
  .btn:hover {
    background: #00c4d4;
    box-shadow: 0 0 18px #00eaff;
  }
  
  .btn-outline {
    border: 2px solid #00eaff;
    color: #00eaff;
  }
  
  .btn-outline:hover {
    background: rgba(0, 234, 255, 0.1);
    box-shadow: 0 0 12px #00eaff;
  }
  </style>
    