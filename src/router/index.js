import Vue from 'vue'
import VueRouter from 'vue-router'
import TopFilms from './../dashboards/top-films.vue'
import Film from "./../dashboards/film.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopFilms',
    component: TopFilms
  },
  {
    path: '/film',
    name: 'film',
    component: Film
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
