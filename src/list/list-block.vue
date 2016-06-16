<template>
  <div class="list-block" :class="{inset:inset,'tablet-inset':tabletInset}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-list-block',
    props: {
      inset: {
        type: Boolean,
        default: false
      },
      tabletInset: {
        type: Boolean,
        default: false
      },
      type: {
        type: String
      }
    },
    ready () {
      const { type } = this
      if (type) {
        this.$el.classList.add(`${type}-list`)
      }
    }
  }
</script>
