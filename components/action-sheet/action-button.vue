<template>
  <div class="actions-modal-button" :class="{'actions-modal-button-bold':bold}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      bold: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        this.$dispatch( 'hide-action-sheet' );
      }
    }
  };
</script>
