<template>
    <header class="header">
      <div class="inner">
        <div class="logo">Owada</div>
  
        <nav class="nav">
          <router-link to="/" class="link">Home</router-link>
          <router-link to="/about" class="link">About</router-link>
          <router-link to="/works" class="link">Works</router-link>
          <router-link to="/contact" class="link">Contact</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    z-index: 1000;
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgba(0, 234, 255, 0.3);
  }
  
  .inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #00eaff;
    letter-spacing: 0.05em;
  }
  
  .nav {
    display: flex;
    gap: 1.5rem;
  }
  
  .link {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
  }
  
  .link:hover {
    color: #00eaff;
    text-shadow: 0 0 8px #00eaff;
  }
  </style>
  