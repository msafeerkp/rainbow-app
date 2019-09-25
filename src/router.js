import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CircularView from './views/CircularView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/circular',
      name: 'home',
      component: CircularView
    },
    {
      path: '/about',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
