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
