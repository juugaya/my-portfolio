import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import SkillsSection from '../components/SkillsSection.vue'
import Works from '../components/Works.vue'
import Experience from '../components/Experience.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: SkillsSection },
  { path: '/works', component: Works },
  { path: '/experience', component: Experience },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
