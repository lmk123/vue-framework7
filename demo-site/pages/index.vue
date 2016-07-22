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
      <div class="content-block">
        <a href="https://github.com/lmk123/vue-framework7/tree/master/demo-site/pages/index.vue">Source code</a>
      </div>
      <div class="list-block">
        <ul>
          <li v-for="key in $keys">
            <a class="item-link item-content" v-link="{ name: 'page', params: { name: key } }">
              <div class="item-inner">
                <div class="item-title" v-text="key"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
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
