<template>
  <div class="content-block" :class="{inset:inset,'tablet-inset':tablet}">
    <div class="content-block-inner" v-if="inner">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      inset: {
        type: Boolean,
        default: false
      },
      inner: {
        type: Boolean,
        default: false
      },
      tablet: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
