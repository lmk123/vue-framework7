/**
 * @files 很多 modal 类组件需要一个名为 "modal" 的 transition
 */

import oneTransitionEnd from '../utils/one-transition-end'

export default {
  transitions: {
    modal: {
      css: false,
      beforeEnter (el) {
        el.style.display = 'block'
      },
      enter (el, done) {
        setTimeout(() => { el.classList.add('modal-in') }, 0)
        oneTransitionEnd(el, done)
      },
      beforeLeave (el) {
        el.classList.remove('modal-in')
      },
      leave (el, done) {
        el.classList.add('modal-out')
        oneTransitionEnd(el, done)
      },
      afterLeave (el) {
        el.classList.remove('modal-out')
      }
    }
  }
}
