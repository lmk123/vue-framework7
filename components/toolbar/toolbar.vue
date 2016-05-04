<template>
  <div class="toolbar" v-show="isShow">
    <div class="toolbar-inner">
      <slot></slot>
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
    data() {
      return {
        isShow: true
      };
    },
    methods: {
      show() {
        this.isShow = true;
        if ( this.type === 'through' ) {
          this.$root.$broadcast( 'f7-page-remove-class', 'no-toolbar' );
        } else if ( this.type === 'fixed' ) {
          this.$root.$broadcast( 'f7-page-add-class', 'toolbar-fixed' );
        }
      },
      hide() {
        this.isShow = false;
        if ( this.type === 'through' ) {
          this.$root.$broadcast( 'f7-page-add-class', 'no-toolbar' );
        } else if ( this.type === 'fixed' ) {
          this.$root.$broadcast( 'f7-page-remove-class', 'toolbar-fixed' );
        }
      }
    },
    ready() {
      const { type } = this;
      const { $root } = this;
      if ( type === 'fixed' ) {
        $root.$broadcast( 'f7-page-add-class', 'toolbar-fixed' );
      } else if ( type === 'through' ) {
        $root.$broadcast( 'f7-pages-add-class', 'toolbar-through' );
      }
    }
  };
</script>
