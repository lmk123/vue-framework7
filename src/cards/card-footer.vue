<template>
  <div class="card-footer" :class="{'no-border':noBorder}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-card-footer',
    props: {
      noBorder: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
