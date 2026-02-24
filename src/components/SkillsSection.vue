<template>
  <section id="skills" class="skills-section">
    <h2 class="section-title">Skills</h2>

    <div class="skills-grid">

      <!-- Backend -->
      <div class="skill-card">
        <h3>Backend</h3>
        <p>Java / SpringBoot / PHP / Laravel</p>

        <!-- ← ここにアイコンを並べる -->
        <div class="skills-icons">
          <div class="skill-item">
            <img src="/icons/java.svg" alt="Java" />
            <p>Java</p>
          </div>

          <div class="skill-item">
            <img src="/icons/selenium.svg" alt="Selenium" />
            <p>Selenium</p>
          </div>

          <div class="skill-item">
            <img src="/icons/maven.svg" alt="Maven" />
            <p>Maven</p>
          </div>
        </div>
      </div>

      <!-- Database -->
      <div class="skill-card">
        <h3>Database</h3>
        <p>Oracle / MySQL / SQL最適化 / パフォーマンス調査</p>
      </div>

      <!-- Ops -->
      <div class="skill-card">
        <h3>Ops</h3>
        <p>JP1 / Linux / Shell / PowerShell</p>
      </div>

      <!-- Frontend -->
      <div class="skill-card">
        <h3>Frontend</h3>
        <p>Vue2 / Vue3 / TypeScript</p>
      </div>

      <!-- Tools -->
      <div class="skill-card">
        <h3>Tools</h3>
        <p>Git / Docker / Postman</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 60px 20px;
  background: #0a0a0a;
  color: #fff;
  text-align: center;
}

.section-title {
  font-size: 2.4rem;
  margin-bottom: 40px;
  color: #00eaff;
  text-shadow: 0 0 12px #00eaff;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.skill-card {
  background: #111;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #00eaff;
  box-shadow: 0 0 10px rgba(0, 234, 255, 0.2);
  transition: 0.3s;
}

.skill-card:hover {
  box-shadow: 0 0 18px rgba(0, 234, 255, 0.4);
  transform: translateY(-4px);
}

.skill-card h3 {
  color: #00eaff;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.skill-card p {
  color: #ccc;
  line-height: 1.6;
}

/* ← アイコンの横並び */
.skills-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
}

/* ← アイコンのサイズを適正に */
.skill-item img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.4));
}

.skill-item p {
  margin-top: 4px;
  color: #ccc;
  font-size: 12px;
}

.skill-item {
  text-align: center;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.skill-item:hover {
  transform: scale(1.15);
  filter: brightness(1.3);
}
</style>
