<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"><a v-link="{ name: 'home' }" class="link"><i class="icon icon-back"></i><span>Back</span></a>
        </div>
        <div class="center">Navbar</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <p><a class="button" @click="hide">Hide Navbar</a></p>
        <p><a class="button" @click="show">Show Navbar</a></p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      hide () {
        this.$f7.hideNavbar()
      },
      show () {
        this.$f7.showNavbar()
      }
    }
  }
</script>
