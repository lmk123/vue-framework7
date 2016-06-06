<template>
  <div class="preloader" :class="{'preloader-white':white}"></div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-preloader',
    props: {
      white: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
