import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import Home from '@/views/HomeView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/LoginPage', component: Login }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
