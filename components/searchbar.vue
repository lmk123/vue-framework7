<template>
  <form class="searchbar searchbar-init" :class="{'searchbar-active':active,'searchbar-not-empty':!!value}" @submit.prevent="onSearch">
    <div class="searchbar-input">
      <input type="search"
             :placeholder="placeholder"
             v-model="value"
             v-el:input
             @focus="show">
      <a class="searchbar-clear" v-tap="clear"></a>
    </div>
    <a class="searchbar-cancel"
       style="display:block;"
       :style="{marginRight:active ? '0px' : '-53px'}"
       v-text="cancelText"
       v-tap="hide"
       v-el:cancel></a>
  </form>

  <div class="searchbar-overlay" :class="{'searchbar-overlay-active':active && !value}" v-tap="hide"></div>
</template>

<script type="text/babel">
  import tap from './directives/tap';
  export default {
    directives: { tap },
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
        default() {}
      }
    },
    data() {
      return {
        active: false
      };
    },
    methods: {
      show() {
        this.active = true;
      },
      hide() {
        this.active = false;
      },
      clear() {
        this.value = '';
        this.$nextTick( ()=> this.$els.input.focus() );
      }
    }
  };
</script>
