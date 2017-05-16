<template>
  <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
    <slot></slot>
  </transition>
</template>

<script>
  import nextFrame from '../utils/next-frame'
  import { oneTransitionEnd } from '../utils/transition'

  export default {
    methods: {
      beforeEnter (el) {
        el.style.display = 'block'
      },
      enter (el, done) {
        nextFrame(() => { el.classList.add('modal-in') })
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
</script>
