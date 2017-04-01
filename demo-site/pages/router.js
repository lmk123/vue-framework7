import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./index.vue')
    },
    {
      path: '/page/:name',
      name: 'page',
      component:  () => import('./page.vue')
    }
  ]
})

