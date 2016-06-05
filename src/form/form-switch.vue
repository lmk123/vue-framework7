<template>
  <label class="label-switch">
    <input type="checkbox" :value="value" v-model="model">
    <div class="checkbox"></div>
  </label>
</template>

<script type="text/babel">
  export default {
    name: 'f7-checkbox',
    props: {
      value: null,
      model: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
