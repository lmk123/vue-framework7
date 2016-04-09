<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
      <div class="subnavbar" v-show="_slotContents.subnavbar">
        <slot name="subnavbar"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      type: {
        type: String,
        default: 'static' // 'static' 'fixed' 'through'
      }
    },
    ready() {
      const { type } = this;
      if ( type !== 'static' ) {
        this.$root.$broadcast( 'f7-pages-add-class', 'navbar-' + type );
      }
      if ( this._slotContents.subnavbar ) {
        this.$root.$broadcast( 'f7-page-with-subnavbar' );
      }
    }
  };
</script>
