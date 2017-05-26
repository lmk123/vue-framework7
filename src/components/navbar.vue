<template>
  <!-- 修复在 iOS 上显示时没有动画的问题。
   action-sheet 也有同样的问题所以也加了这个样式。
   -->
  <div class="navbar" style="position:fixed">
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

  // TODO 临时修复一下在 iOS 上显示时无动画的问题
  const style = document.createElement('style')
  style.innerText = '.page>.navbar,.view>.navbar,.views>.navbar{position:fixed}'
  document.head.appendChild(style)

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
