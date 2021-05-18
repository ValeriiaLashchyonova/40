import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
