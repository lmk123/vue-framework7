import Vue from 'vue'
import Indicator from './_indicator.vue'
import noop from '../../utils/noop'

let idt

let init = function () {
  init = noop
  idt = new (Vue.extend(Indicator))()
  idt.$mount()
  document.body.appendChild(idt.$el)
}

export function showIndicator () {
  init()
  idt.show()
}

export function hideIndicator () {
  if (!idt) return
  init()
  idt.hide()
}
