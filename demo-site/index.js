import fastClick from 'fastclick'
import f7Plugin from '../src'
import Vue from 'vue'
import App from './pages/_root.vue'

Vue.use(f7Plugin)

window.onload = function () {
  const { body } = document
  fastClick.attach(body)
  document.body.appendChild(new Vue(App).$mount().$el)
}
