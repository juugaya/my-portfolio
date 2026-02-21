import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/works', component: Works },
  { path: '/experience', component: Experience },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
