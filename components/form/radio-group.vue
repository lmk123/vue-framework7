<template>
  <ul>
    <li v-for="radio in radios">
      <label class="item-content label-radio">
        <input type="radio" :value="radio.value" v-model="value">
        <div class="item-inner">
          <div class="item-title" v-text="radio.title"></div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script type="text/babel">
  export default {
    props: {
      radios: {
        type: Array,
        required: true
      },
      value: {
        twoWay: true,
        default: null
      }
    }
  };
</script>
