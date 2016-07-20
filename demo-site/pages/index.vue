<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"></div>
        <div class="center">vue-framework7</div>
        <div class="right"></div>
      </div>
    </div>
    <div class="page-content">
      <p v-for="key in $keys">
        <a v-link="{ name: 'page', params: { name: key } }" v-text="key"></a>
      </p>
      <p>

      </p>
    </div>
  </div>
</template>

<script type="text/babel">
  import map from '../page-components'
  const keys = Object.keys(map)
  export default {
    data () {
      this.$keys = keys
      return {}
    }
  }
</script>
