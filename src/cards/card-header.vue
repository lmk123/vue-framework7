<template>
  <div class="card-header" :class="{'no-border':noBorder}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-card-header',
    props: {
      noBorder: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
