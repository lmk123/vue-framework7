/**
 * @files 很多 modal 类组件需要一个名为 "modal" 的 transition
 */

import oneTransitionEnd from '../_utils/one-transition-end'

export default {
  transitions: {
    modal: {
      css: false,
      beforeEnter (el) {
        this.$emit('before modal enter', el)
        el.style.display = 'block'
      },
      enter (el, done) {
        this.$emit('modal enter', el)
        setTimeout(() => { el.classList.add('modal-in') }, 0)
        oneTransitionEnd(el, done)
      },
      beforeLeave (el) {
        this.$emit('before modal leave', el)
        el.classList.remove('modal-in')
      },
      leave (el, done) {
        this.$emit('modal leave', el)
        el.classList.add('modal-out')
        oneTransitionEnd(el, done)
      },
      afterLeave (el) {
        this.$emit('after modal leave', el)
        el.classList.remove('modal-out')
      }
    }
  }
}
