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

  // TODO 临时修复一下在 iOS 上显示时无动画的问题
  const style = document.createElement('style')
  style.innerText = '.page>.toolbar,.view>.toolbar,.views>.toolbar{position:fixed}'
  document.head.appendChild(style)

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
