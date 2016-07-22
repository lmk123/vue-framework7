<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a v-link="{ name: 'home' }" class="link">
            <i class="icon icon-back"></i>
            <span>Back</span>
          </a>
        </div>
        <div class="center">Toolbar / Tabbar</div>
        <div class="right"></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <a href="https://github.com/lmk123/vue-framework7/tree/master/demo-site/page-components/toolbar.vue">Source
          code</a>
      </div>
      <div class="content-block">
        <p><a class="button" @click="hide">Hide Toolbar</a></p>
        <p><a class="button" @click="show">Show Toolbar</a></p>
      </div>
    </div>
    <div class="toolbar">
      <div class="toolbar-inner">
        <a href="#" class="link">Link 1</a>
        <a href="#" class="link">Link 2</a>
        <a href="#" class="link">Link 3</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      hide () {
        this.$f7.hideToolbar()
      },
      show () {
        this.$f7.showToolbar()
      }
    }
  }
</script>
