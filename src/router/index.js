import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsView from '../views/DocsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
   path: '/',
   name: 'home',
   component: HomeView
   },
   {
      path: '/docs',
      name: 'documentation',
      component: DocsView
   },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
