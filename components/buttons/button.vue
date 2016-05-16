<template>
  <a class="button" :class="{active:active,'button-round':round,'button-big':big,'button-fill':fill}">
    <slot></slot>
  </a>
</template>

<script type="text/babel">
  export default {
    props: {
      active: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      big: {
        type: Boolean,
        default: false
      },
      fill: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
