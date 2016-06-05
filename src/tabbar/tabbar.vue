<template>
  <div class="toolbar tabbar" v-show="isShow" :class="{'tabbar-labels':hasLabel}">
    <div class="toolbar-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-tabbar',
    props: {
      type: {
        type: String,
        default: 'static' // 'static' 'fixed' 'through'
      },
      hasLabel: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      show () {
        this.isShow = true
        if (this.type === 'through') {
          this.$root.$broadcast('f7-page-remove-class', 'no-tabbar')
        } else if (this.type === 'fixed') {
          this.$root.$broadcast('f7-page-add-class', this.hasLabel ? 'tabbar-labels-fixed' : 'toolbar-fixed')
        }
      },
      hide () {
        this.isShow = false
        if (this.type === 'through') {
          this.$root.$broadcast('f7-page-add-class', 'no-tabbar')
        } else if (this.type === 'fixed') {
          this.$root.$broadcast('f7-page-remove-class', this.hasLabel ? 'tabbar-labels-fixed' : 'toolbar-fixed')
        }
      }
    },
    ready () {
      const { type } = this
      const { $root } = this
      if (type === 'fixed') {
        $root.$broadcast('f7-page-add-class', this.hasLabel ? 'tabbar-labels-fixed' : 'toolbar-fixed')
      } else if (type === 'through') {
        $root.$broadcast('f7-pages-add-class', this.hasLabel ? 'tabbar-labels-through' : 'toolbar-through')
      }
    }
  }
</script>
