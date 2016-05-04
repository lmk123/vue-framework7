<template>
  <li>
    <label class="item-content label-checkbox" @click.prevent="onClick">
      <input type="checkbox" v-model="checked">
      <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner">
        <div class="item-title">
          <slot></slot>
        </div>
      </div>
    </label>
  </li>
</template>

<script type="text/babel">
  export default {
    props: {
      checked: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    },
    methods: {
      onClick() {
        this.checked = !this.checked;
      }
    }
  };
</script>
