<template>
  <f7-page>
    <f7-navbar slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span>Back</span>
      </a>
      Toolbar
    </f7-navbar>
    <div class="content-block">
      <p>
        <input type="button" class="button" @click="hideToolbar('toolbar')" value="Hide Toolbar">
      </p>
      <p>
        <input type="button" class="button" @click="showToolbar('toolbar')" value="Show Toolbar">
      </p>
    </div>
    <f7-toolbar name="toolbar" slot="after-content">
      <a href="javascript:void 0">link 1</a>
      <a href="javascript:void 0">link 2</a>
      <a href="javascript:void 0">link 3</a>
    </f7-toolbar>
  </f7-page>
</template>

<script>
  import { hideToolbar, showToolbar } from 'vue-framework7'
  export default {
    methods: {
      hideToolbar,
      showToolbar
    }
  }
</script>
