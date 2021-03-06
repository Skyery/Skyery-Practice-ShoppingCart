import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Order from '@/views/CartOrder.vue'
import CheckOut from '@/views/CartCheckOut.vue'
import Complet from '@/views/CartComplet.vue'
import Login from '@/views/Login.vue'
import Chat from '@/views/Chat.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/order', name: 'Order', component: Order },
  { path: '/checkOut', name: 'CheckOut', component: CheckOut },
  { path: '/complet', name: 'Complet', component: Complet },
  { path: '/login', name: 'Login', component: Login },
  { path: '/chat', name: 'chat', component: Chat },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
