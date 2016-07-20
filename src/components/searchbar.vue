<template>
  <form class="searchbar"
        :class="{ 'searchbar-active': active, 'searchbar-not-empty': query }"
        @submit.prevent="search">
    <div class="searchbar-input">
      <input type="search"
             :placeholder="placeholder"
             v-model="query"
             v-el:input
             @focus="show">
      <a class="searchbar-clear" @click="clear"></a>
    </div>
    <a class="searchbar-cancel"
       style="display:block"
       :style="{ marginRight: active ? '0px' : '-53px' }"
       v-text="cancelText"
       @click="cancel"
       v-el:cancel></a>
  </form>

  <div class="searchbar-overlay"
       :class="{ 'searchbar-overlay-active': !hideOverlay && active && !query }"
       @click="hide">
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'f7-searchbar',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      query: {
        twoWay: true,
        type: String,
        default: ''
      },
      hideOverlay: { // 获取焦点时不要显示遮罩层
        type: Boolean,
        default: false
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
      search () {
        this.$emit('search')
      },
      clear () {
        this.query = ''
        this.$nextTick(() => this.$els.input.focus())
        this.$emit('clear-search')
      },
      cancel () {
        this.query = ''
        this.hide()
      }
    }
  }
</script>
