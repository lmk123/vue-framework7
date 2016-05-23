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

<!-- hide-on-scroll 代码片段 -->
<!--
(function () {
  var page = document.querySelector( '.page' ),
    toolbar = document.querySelector( '.toolbar' );

  function hide() {
    page.classList.add( 'no-toolbar-by-scroll' );
    toolbar.classList.add( 'toolbar-hidden' );
  }

  function show() {
    page.classList.remove( 'no-toolbar-by-scroll' );
    toolbar.classList.remove( 'toolbar-hidden' );
    toolbar.classList.add( 'toolbar-hiding' );
    setTimeout( function () {
      toolbar.classList.remove( 'toolbar-hiding' );
    }, 400 );
  }

  hide();
  setTimeout( show, 2000 );
})();
-->
