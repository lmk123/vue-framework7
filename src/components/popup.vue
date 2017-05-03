<template>
  <div class="popup">
    <slot></slot>
  </div>
</template>

<script>
  import modal from '../mixins/modal'
  import vmName from '../mixins/vm-name'

  export default {
    name: 'f7-popup',
    created () {
      this._modalName = 'popup'
    },
    mixins: [modal, vmName]
  }
</script>
