import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarView from '../views/ListarView.vue'
import CadastrarView from '../views/CadastrarView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'loginview',
    component: LoginView
  },
  {
    path: '/home',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/listar',
    name: 'listaView',
    component: ListarView
  },
  {
    path: '/cadastrar',
    name: 'cadastroView',
    component: CadastrarView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
