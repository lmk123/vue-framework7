<template>
  <li>
    <label class="label-{{type}} item-content">
      <slot name="input"></slot>
      <div class="item-media" v-if="type === 'checkbox'"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner">
        <div class="item-title">
          <slot name="title"></slot>
        </div>
      </div>
    </label>
  </li>
</template>

<script type="text/babel">
  export default {
    props: {
      type: { // 'checkbox' or 'radio'
        type: String,
        default: 'checkbox'
      }
    }
  };
</script>
