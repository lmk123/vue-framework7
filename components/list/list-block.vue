<template>
  <div class="list-block" :class="{inset:inset,'tablet-inset':tabletInset,'media-list':media}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      inset: {
        type: Boolean,
        default: false
      },
      tabletInset: {
        type: Boolean,
        default: false
      },
      media: { // todo list-item.vue
        type: Boolean,
        default: false
      }
    }
  };
</script>
