import './assets/framework7.ios.less'
import Vue from 'vue'
import { install } from 'vue-framework7'
import App from './app.vue'

Vue.use(install)

document.body.appendChild(new Vue(App).$mount().$el)
