import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from) => {
  const user = useUserStore()
  if (to.meta.requiresAuth && !user.isLoggedIn) {
    return '/login'
  }
})

export default router
