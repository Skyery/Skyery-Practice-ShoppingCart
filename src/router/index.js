import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Order from '@/views/CartOrder.vue'
import CheckOut from '@/views/CartCheckOut.vue'
import Complet from '@/views/CartComplet.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/order', name: 'Order', component: Order },
  { path: '/checkOut', name: 'CheckOut', component: CheckOut },
  { path: '/complet', name: 'Complet', component: Complet },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
