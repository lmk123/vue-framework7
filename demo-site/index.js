import fastClick from 'fastclick'
import f7Plugin from '../src'
import Vue from 'vue'

Vue.use(f7Plugin)

import router from './pages/router'

window.onload = function () {
  const { body } = document
  fastClick.attach(body)
  const mount = document.createElement('div')
  body.appendChild(mount)
  router.start(require('./pages/_root.vue'), mount)
}

