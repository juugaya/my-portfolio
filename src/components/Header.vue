<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/experience" class="link">Experience</router-link>
      <router-link to="/skills" class="link">Skills</router-link>
      <router-link to="/works" class="link">Works</router-link>
      <router-link to="/contact" class="link">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
  background: #0d0d0d;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  gap: 40px;
  justify-content: center;
}

.link {
  color: #00eaff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
}

.link:hover {
  text-shadow: 0 0 8px #00eaff;
}
</style>
