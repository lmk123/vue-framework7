<template>
  <f7-page>
    <f7-navbar name="navbar" slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span class="">Back</span>
      </a>
      Navbar
    </f7-navbar>
    <div class="content-block">
      <p>
        <input type="button" class="button" @click="hideNavbar('navbar')" value="Hide Navbar">
      </p>
      <p>
        <input type="button" class="button" @click="showNavbar('navbar')" value="Show Navbar">
      </p>
    </div>
  </f7-page>
</template>

<script>
  import { showNavbar, hideNavbar } from 'vue-framework7'

  export default {
    methods: {
      showNavbar,
      hideNavbar
    }
  }
</script>
