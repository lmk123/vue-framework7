import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    name: 'home',
    component: require('./index.vue')
  },
  '/page/:name': {
    name: 'page',
    component: require('./page.vue')
  }
})

export default router

