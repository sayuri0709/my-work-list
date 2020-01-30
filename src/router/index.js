import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/item/:itemId',
    name: 'item',
    props: route => ({ itemId: Number(route.params.itemId) }),
    component: () => import('../views/Item.vue')
  },
  {
    path: '/complete',
    name: 'complete',
    component: () => import('../views/Complete.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
