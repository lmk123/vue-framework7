<template>
  <label class="label-switch" @click.prevent="onClick">
    <input type="checkbox" v-model="checked">
    <div class="checkbox"></div>
  </label>
</template>

<script type="text/babel">
  // 在 PC 端浏览器上,点击 label 标签就相当于点击了里面的 input 元素,
  // 但在移动端却无反应,
  // 所以最终解决方案是在 PC 端和移动端都使用 vue 来控制 input 的 checked,
  // 并在 PC 端阻止默认行为
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
