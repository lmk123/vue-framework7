/**
 * 当 el 上触发 transitionend 事件时调用一次 handler
 */

import transitionEnd from './transition-end'

export default transitionEnd ? function (el, handler) {
  el.addEventListener(transitionEnd, function h (e) {
    handler.call(el, e)
    el.removeEventListener(transitionEnd, h)
  })
} : function (el, handler) {
  setTimeout(() => handler.call(el), 400)
}
