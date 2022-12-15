import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeIndex from '../views/HomeIndex.vue'
import CafeteriaView from '../views/CafeteriaView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import ReservaView from '../views/ReservaView.vue'
import CupomView from '../views/CupomView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex
  },
  {
    path: '/Cafeteria',
    name: 'CafeteriaView',
    component: CafeteriaView
  },
  {
    path: '/Produtos',
    name: 'ProdutosView',
    component: ProdutosView
  },
  {
    path: '/Reserva',
    name: 'ReservaView',
    component: ReservaView
  },
  {
    path: '/Cupom',
    name: 'CupomView',
    component: CupomView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
