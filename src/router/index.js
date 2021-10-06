import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import Register from '@/views/Register'
import Remove from '@/views/Remove'
import Update from '@/views/Update'
import List from '@/views/List'
import Consult from '@/views/Consult'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/remove',
    name: 'remove',
    component: Remove
  },
  {
    path: '/consult',
    name: 'consult',
    component: Consult
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/update',
    name: 'update',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
