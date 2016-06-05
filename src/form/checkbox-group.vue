<template>
  <ul>
    <li v-for="checkbox in checkboxes">
      <label class="item-content label-checkbox" :class="{disabled:checkbox.disabled}">
        <input type="checkbox" :disabled="checkbox.disabled" :value="checkbox.value" v-model="value">
        <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
        <div class="item-inner">
          <div class="item-title" v-text="checkbox.title"></div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'f7-checkbox-group',
    props: {
      checkboxes: {
        type: Array,
        required: true
      },
      value: {
        type: Array,
        twoWay: true,
        default () {
          return []
        }
      }
    }
  }
</script>
