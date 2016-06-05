<template>
  <fork-me></fork-me>
  <router-view></router-view>
</template>

<script type="text/babel">
  export default {
    replace: false,
    components: {
      'fork-me': require('../components/fork.vue')
    }
  }
</script>

<style>
  @import url("../../node_modules/framework7/dist/css/framework7.ios.css");
</style>
