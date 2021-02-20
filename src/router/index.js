import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Bikes from '../views/Bikes'
import Accessories from '../views/Accessories'
import Contact from '../views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bikes',
    name: 'Bikes',
    component: Bikes
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
