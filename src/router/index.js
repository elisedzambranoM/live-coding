import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Cursos from '../views/Cursos.vue'
import Info from '../views/Info.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: Cursos
  },
  {
    path: '/info/:banana',
    name: 'Info',
    component: Info
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
