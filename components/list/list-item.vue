<template>
  <li :class="{'item-link':link}">
    <div class="item-content">
      <div class="item-media" v-if="_slotContents.media">
        <slot name="media"></slot>
      </div>
      <div class="item-inner">
        <div class="item-title" :class="{label:label}">
          <slot name="title"></slot>
        </div>
        <div class="item-input" v-if="_slotContents.input">
          <slot name="input"></slot>
        </div>
        <div class="item-after" v-if="_slotContents.after">
          <slot name="after"></slot>
        </div>
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
      },
      label: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
