<template>
  <div class="page" :class="{'with-subnavbar':subNavbar,'toolbar-fixed':toolbar,'tabbar-labels-fixed':tabbarLabels}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        subNavbar: false,
        toolbar: false,
        tabbarLabels: false
      };
    },
    events: {
      ['f7-page-with-subnavbar']() {
        this.subNavbar = true;
      },
      ['f7-page-with-toolbar']() {
        this.toolbar = true;
      },
      ['f7-page-with-tabbar-labels']() {
        this.tabbarLabels = true;
      }
    }
  };
</script>
