<template>
  <div class="toolbar tabbar" :class="{'tabbar-labels':hasLabel}">
    <div class="toolbar-inner">
      <a class="tab-link" v-for="tab in tabs" v-link="tab.link" :class="{active:tab.active}">
        <i class="icon" :class="tab.iconClass">
          <span v-if="tab.badge" class="badge" v-text="tab.badge"></span>
        </i>
        <span v-if="tab.label" class="tabbar-label" v-text="tab.label"></span>
      </a>
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
      tabs: {
        type: Array,
        required: true
      }
    },
    computed: {
      hasLabel() {
        return this.tabs.length && this.tabs[ 0 ].label;
      }
    },
    methods: {
      show() {
        if ( this.type === 'through' ) {
          this.$root.$broadcast( 'f7-page-remove-class', 'no-tabbar' );
        }
      },
      hide() {
        if ( this.type === 'through' ) {
          this.$root.$broadcast( 'f7-page-add-class', 'no-tabbar' );
        }
      }
    },
    ready() {
      const { type } = this;
      const { $root } = this;
      if ( type === 'fixed' ) {
        $root.$broadcast( 'f7-page-add-class', this.hasLabel ? 'tabbar-labels-fixed' : 'toolbar-fixed' );
      } else if ( type === 'through' ) {
        $root.$broadcast( 'f7-pages-add-class', this.hasLabel ? 'tabbar-labels-through' : 'toolbar-through' );
      }
    }
  };
</script>
