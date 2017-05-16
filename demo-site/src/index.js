import './assets/framework7.ios.less'
import Vue from 'vue'
import { install as installF7 } from 'vue-framework7'
import App from './app.vue'
import { install, applyUpdate } from 'offline-plugin/runtime'

install({
  onUpdateReady () {
    applyUpdate()
  },
  onUpdated () {
    window.location.reload()
  }
})

Vue.use(installF7)

document.body.appendChild(new Vue(App).$mount().$el)
