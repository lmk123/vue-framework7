<template>
  <div class="views" id="app">
    <div class="view">
      <div class="pages navbar-fixed">
        <f7-page-animation :direction="slideDirection">
          <router-view></router-view>
        </f7-page-animation>
      </div>
    </div>
  </div>
</template>

<script>
  import router from './router'

  export default {
    router,
    data () {
      return {
        isBack: false,
        slideDirection: 'none'
      }
    },
    watch: {
      $route (to, from) {
        // 应用第一次打开时不使用动效
        if (from.name === null) return

        this.slideDirection = to.path.startsWith(from.path) ? 'left' : 'right'
      }
    }
  }
</script>
