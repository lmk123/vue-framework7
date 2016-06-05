<template>
  <form class="searchbar searchbar-init" :class="{'searchbar-active':active,'searchbar-not-empty':!!value}"
        @submit.prevent="onSearch">
    <div class="searchbar-input">
      <input type="search"
             :placeholder="placeholder"
             v-model="value"
             v-el:input
             @focus="show">
      <a class="searchbar-clear" @click="clear"></a>
    </div>
    <a class="searchbar-cancel"
       style="display:block"
       :style="{marginRight:active ? '0px' : '-53px'}"
       v-text="cancelText"
       @click="cancel"
       v-el:cancel></a>
  </form>

  <div class="searchbar-overlay" :class="{'searchbar-overlay-active':active && !value}" @click="hide"></div>
</template>

<script type="text/babel">
  export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      value: {
        twoWay: true,
        type: String,
        default: ''
      },
      onSearch: {
        type: Function,
        default () {}
      },
      onClear: {
        type: Function,
        default () {}
      },
      onCancel: {
        type: Function,
        default () {}
      }
    },
    data () {
      return {
        active: false
      }
    },
    methods: {
      show () {
        this.active = true
      },
      hide () {
        this.active = false
      },
      clear () {
        this.value = ''
        this.$nextTick(() => this.$els.input.focus())
        this.onClear()
      },
      cancel () {
        this.value = ''
        this.hide()
        this.onCancel()
      }
    }
  }
</script>
