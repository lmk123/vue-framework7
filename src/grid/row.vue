<template>
  <div class="row" :class="{'no-gutter':noGutter}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-row',
    props: {
      noGutter: {
        default: false,
        type: Boolean
      }
    }
  }
</script>
