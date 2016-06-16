<template>
  <li class="item-content" :class="{'item-link':link,disabled:disabled}">
    <!--<div class="item-content">-->
      <slot></slot>
    <!--</div>-->
  </li>
</template>

<script type="text/babel">
  export default {
    name: 'f7-list-item',
    props: {
      link: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
