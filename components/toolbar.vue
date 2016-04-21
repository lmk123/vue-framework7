<template>
  <div class="toolbar">
    <div class="toolbar-inner">
      <a v-link="tab.link" v-for="tab in links" class="link" v-text="tab.label"></a>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      type: {
        type: String,
        default: 'static' // 'static' 'fixed' 'through'
      },
      links: {
        type: Array,
        required: true
      }
    },
    methods: {
      show() {
        if ( this.type === 'through' ) {
          this.$root.$broadcast( 'f7-page-remove-class', 'no-toolbar' );
        }
      },
      hide() {
        if ( this.type === 'through' ) {
          this.$root.$broadcast( 'f7-page-add-class', 'no-toolbar' );
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
