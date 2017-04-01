<template>
  <div>
    <form class="searchbar searchbar-init"
          :class="{ 'searchbar-active': active, 'searchbar-not-empty': query }"
          @submit.prevent="search">
      <div class="searchbar-input">
        <input type="search"
               :placeholder="placeholder"
               v-model="query"
               ref="input"
               @focus="show">
        <a class="searchbar-clear" @click="clear"></a>
      </div>
      <!-- TODO 将 margin-right 计算出来而不是写死 -->
      <a class="searchbar-cancel"
         style="display: block"
         :style="{ 'margin-right': active ? '0px' : '-53px' }"
         @click="cancel">
        {{ cancelText }}
      </a>
    </form>

    <div class="searchbar-overlay"
         :class="{ 'searchbar-overlay-active': !hideOverlay && active && !query }"
         @click="hide">
    </div>
  </div>
</template>

<script>
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
        this.$nextTick(() => {
          this.$refs.input.focus()
          this.$emit('clear-search')
        })
      },
      cancel () {
        this.query = ''
        this.hide()
      }
    }
  }
</script>
