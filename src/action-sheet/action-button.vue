<template>
  <div class="actions-modal-button" :class="{'actions-modal-button-bold':bold}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-action-button',
    props: {
      bold: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick () {
        this.$dispatch('hide-action-sheet')
      }
    }
  }
</script>
