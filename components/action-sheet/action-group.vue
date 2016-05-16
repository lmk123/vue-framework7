<template>
  <div class="actions-modal-group">
    <div class="actions-modal-label" v-if="title" v-text="title"></div>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>
