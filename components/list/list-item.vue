<template>
  <li class="item-content" :class="{'item-link':link}">
    <div class="item-media" v-if="_slotContents.media">
      <slot name="media"></slot>
    </div>
    <div class="item-inner">
      <div class="item-title">
        <slot name="title"></slot>
      </div>
      <div class="item-after" v-if="_slotContents.after">
        <slot name="after"></slot>
      </div>
    </div>
  </li>
</template>

<script type="text/babel">
  export default {
    props: {
      link: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
