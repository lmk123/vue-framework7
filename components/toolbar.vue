<template>
  <div class="toolbar" :class="{tabbar:tabbar,'tabbar-labels':hasTabLabel}">
    <div class="toolbar-inner">
      <a v-link="tab.link" v-for="tab in tabs" :class="{link:!tabbar,'tab-link':tabbar,active:tab.active}">
        <i class="icon" :class="tab.iconClass" v-if="tabbar && tab.iconClass">
          <span v-if="tab.badge" class="badge" v-text="tab.badge"></span>
        </i>
        <span v-if="tabbar && tab.label" class="tabbar-label" v-text="tab.label"></span>
        <span v-else v-text="tab.label"></span>
      </a>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      tabbar: {
        type: Boolean,
        default: false
      },
      tabs: {
        type: Array,
        required: true
      }
    },
    computed: {
      hasTabLabel() {
        return this.tabbar && this.tabs[ 0 ].label;
      }
    },
    ready() {
      this.$root.$broadcast( this.hasTabLabel ? 'f7-page-with-tabbar-labels' : 'f7-page-with-toolbar' );
    }
  };
</script>
