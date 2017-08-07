<template>
  <transition
      :css="false"

      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
    <slot></slot>
  </transition>
</template>

<script>
  import { oneAnimationEnd } from '../utils/transition'

  const style = document.createElement('style')
  style.textContent = '.page-from-center-to-right{z-index:300}.page-on-center{z-index:200}.page-on-left,.page-on-right{z-index:100}'
  document.head.appendChild(style)

  export default {
    name: 'f7-page-animation',
    props: {
      direction: {
        type: String,
        default: 'none' // 'left' 或 'right'，其他值一律视为无动画处理
      }
    },
    computed: {
      isNone () {
        return this.direction !== 'right' && this.direction !== 'left'
      },
      against () {
        switch (this.direction) {
          case 'left':
            return 'right'
          case 'right':
            return 'left'
        }
      }
    },
    methods: {
      beforeEnter (el) {
        if (this.isNone) return
        el.classList.add(`page-on-${this.against}`)
      },
      enter (el, done) {
        if (this.isNone) {
          done()
          return
        }
        setTimeout(() => {
          oneAnimationEnd(el, done)
          el.classList.remove(`page-on-${this.against}`)
          el.classList.add(`page-from-${this.against}-to-center`)
        }, 0)
      },
      afterEnter (el) {
        if (this.isNone) return
        el.classList.remove(`page-from-${this.against}-to-center`)
        el.classList.add('page-on-center')
      },

      beforeLeave (el) {
        el.classList.add('page-on-center')
      },
      leave (el, done) {
        if (this.isNone) {
          done()
          return
        }
        setTimeout(() => {
          oneAnimationEnd(el, done)
          el.classList.remove('page-on-center')
          el.classList.add(`page-from-center-to-${this.direction}`)
        }, 0)
      },
      afterLeave (el) {
        if (this.isNone) return
        el.classList.remove(`page-from-center-to-${this.direction}`)
        el.classList.add(`page-on-${this.direction}`)
      }
    }
  }
</script>
