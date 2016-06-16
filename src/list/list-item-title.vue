<template>
  <div class="item-title" :class="{label:label}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-list-item-title',
    props: {
      label: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
