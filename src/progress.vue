<template>
  <span :class="{progressbar:!infinite,'progressbar-infinite':infinite}" v-show="isShow">
    <span :style="style" v-if="!infinite"></span>
  </span>
</template>

<script type="text/babel">
  export default {
    name: 'f7-progressbar',
    props: {
      progress: {
        type: Number,
        default: 0
      },
      infinite: {
        type: Boolean,
        default: false
      },
      initHide: {
        type: Boolean,
        default: false
      },
      onTop: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShow: !this.initHide
      }
    },
    computed: {
      style () {
        return `transform: translate3d(${this.progress - 100}%, 0px, 0px)`
      }
    },
    methods: {
      show () {
        this.isShow = true
        this.$nextTick(() => {
          this.$el.classList.add('progressbar-in')
        })
      },
      hide () {
        this.$el.classList.remove('progressbar-in')
        this.$el.classList.add('progressbar-out')
        // todo 改为 onanimationend
        setTimeout(() => {
          this.isShow = false
          this.$el.classList.remove('progressbar-out')
        }, 200)
      }
    },
    ready () {
      if (this.onTop) {
        this.$appendTo('body')
      }
    },
    beforeDestroy () {
      if (this.onTop) {
        document.body.removeChild(this.$el)
      }
    }
  }
</script>
