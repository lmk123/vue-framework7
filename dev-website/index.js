import f7Plugin from '../src'
import Vue from 'vue'

Vue.use(f7Plugin)

import router from './pages/router'

router.start(require('./pages/root.vue'), 'body')

import fastClick from 'fastclick'
fastClick.attach(document.body)
