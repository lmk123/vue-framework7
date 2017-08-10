<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="left" ref="left">
        <slot name="left"></slot>
      </div>
      <div class="center" ref="center">
        <slot></slot>
      </div>
      <div class="right" ref="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { show, hide } from '../utils/bar-switch'
  import vmName from '../mixins/vm-name'
  import insertStyle from '../utils/insert-style'

  // https://stackoverflow.com/questions/25827559/rendering-the-dom-outside-the-viewport-in-safari-ios
  insertStyle('.navbar.navbar-hidden{-webkit-transform:translate3d(0,-99%,0);transform:translate3d(0,-99%,0)}')

  export default {
    name: 'f7-navbar',
    mixins: [vmName],
    methods: {
      show (useAnimation = true) {
        show('navbar', this.$el, useAnimation)
      },
      hide (useAnimation = true) {
        hide('navbar', this.$el, useAnimation)
      },
      /**
       * 等同于 `myApp.sizeNavbars(viewContainer)` 方法
       * @see http://framework7.io/docs/navbar.html#related-app-and-view-methods
       */
      size () {
        const { left, right, center } = this.$refs
        const diff = left.clientWidth - right.clientWidth
        center.style.right = diff / 2 + 'px'
      }
    },
    mounted () {
      this.$nextTick(this.size)
    }
  }
</script>
