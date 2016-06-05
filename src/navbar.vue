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
    ready () {
      const { type } = this
      const pageClassArray = []
      const { $root } = this
      if (type === 'fixed') {
        pageClassArray.push('navbar-fixed')
      } else if (type === 'through') {
        $root.$broadcast('f7-pages-add-class', 'navbar-through')
      }
      if (this._slotContents.subnavbar) {
        pageClassArray.push('with-subnavbar')
      }
      $root.$broadcast('f7-page-add-class', pageClassArray)
    }
  }
</script>
