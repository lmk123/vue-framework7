<template>
  <div class="toolbar">
    <div class="toolbar-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { show, hide } from '../utils/bar-switch'
  import vmName from '../mixins/vm-name'
  import insertStyle from '../utils/insert-style'

  // https://stackoverflow.com/questions/25827559/rendering-the-dom-outside-the-viewport-in-safari-ios
  insertStyle('.toolbar.toolbar-hidden{-webkit-transform:translate3d(0,99%,0);transform:translate3d(0,99%,0)}')

  export default {
    name: 'f7-toolbar',
    mixins: [vmName],
    methods: {
      show (useAnimation = true) {
        show('toolbar', this.$el, useAnimation)
      },
      hide (useAnimation = true) {
        hide('toolbar', this.$el, useAnimation)
      }
    }
  }
</script>
