<template>
  <div class="row" :class="{'no-gutter':noGutter}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      noGutter: {
        default: false,
        type: Boolean
      }
    }
  };
</script>
