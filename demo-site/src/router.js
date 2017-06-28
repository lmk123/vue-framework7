import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => asyncLoad(import('./pages/home.vue'))
    },
    {
      path: '/navbar',
      component: () => asyncLoad(import('./pages/navbar.vue'))
    },
    {
      path: '/popup',
      component: () => asyncLoad(import('./pages/popup.vue'))
    },
    {
      path: '/searchbar',
      component: () => asyncLoad(import('./pages/searchbar.vue'))
    },
    {
      path: '/toolbar',
      component: () => asyncLoad(import('./pages/toolbar.vue'))
    },
    {
      path: '/indicator',
      component: () => asyncLoad(import('./pages/indicator.vue'))
    },
    {
      path: '/modal',
      component: () => asyncLoad(import('./pages/modal.vue'))
    },
    {
      path: '/action-sheet',
      component: () => asyncLoad(import('./pages/action-sheet.vue'))
    },
    {
      path: '/progress-bar',
      component: () => asyncLoad(import('./pages/progress-bar.vue'))
    }
  ]
})

export default router

import { showIndicator, hideIndicator } from 'vue-framework7'

function asyncLoad (promise) {
  showIndicator()
  return promise.then(cpt => {
    hideIndicator()
    return cpt
  }, err => {
    hideIndicator()
    alert('Network error when load page.')
    return Promise.reject(err)
  })
}

