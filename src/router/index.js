import Vue from 'vue'
import VueRouter from 'vue-router'
import Popup from '../views/Popup.vue'
import Main from "@/views/Main";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Popup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
