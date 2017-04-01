<template>
  <span :class="{ progressbar: !_isInfinite, 'progressbar-infinite': _isInfinite }" v-show="isShow">
    <span :style="style" v-if="!_isInfinite"></span>
  </span>
</template>

<script type="text/babel">
  import f7 from '../f7'
  import insertToBody from '../utils/insert-to-body'

  const allBar = {}

  /**
   * 设置一个进度条的进度
   * @param {String} name
   * @param {Number} progress
   * @param {Number} speed
   */
  f7.setProgressbar = function (name, progress, speed) {
    const bar = allBar[name]
    if (!bar) return
    if (typeof progress === 'number') bar.progress = progress
  }

  f7.hideProgressbar = function (name) {
    const bar = allBar[name]
    if (!bar) return
    return bar.hideBar()
  }

  f7.showProgressbar = function (name, progress) {
    const bar = allBar[name]
    if (!bar) return
    if (typeof progress === 'number') bar.progress = progress
    return bar.showBar()
  }

  export default {
    name: 'f7-progressbar',
    props: {
      name: {
        type: String
      },
      top: {
        type: Boolean,
        default: false
      },
      hide: {
        type: Boolean,
        default: false
      },
      progress: {
        type: Number,
        default: 0
      },
      infinite: {
        type: Boolean,
        default: false
      }
    },
    data () {
      this._isTop = this.top
      this._isInfinite = this.infinite
      return {
        isShow: !this.hide
      }
    },
    computed: {
      style () {
        let { progress } = this
        if (progress < 0) {
          progress = 0
        } else if (progress > 100) {
          progress = 100
        }
        return `transform: translate3d(${progress - 100}%, 0px, 0px)`
      }
    },
    methods: {
      showBar () {
        this.isShow = true
        return new Promise(resolve => {
          this.$nextTick(() => {
            this.$el.classList.add('progressbar-in')
            setTimeout(resolve, 200)
          })
        })
      },
      hideBar () {
        this.$el.classList.remove('progressbar-in')
        this.$el.classList.add('progressbar-out')
        return new Promise(resolve => {
          // todo 改为 onanimationend
          setTimeout(() => {
            this.isShow = false
            this.$el.classList.remove('progressbar-out')
            resolve()
          }, 200)
        })
      }
    },
    beforeCreate () {
      if (this.name) allBar[this.name] = this
    },
    mounted () {
      if (this._isTop) {
        this._removeInsert = insertToBody(this.$el)
      }
    },
    beforeDestroy () {
      delete allBar[this.name]
      if (this._removeInsert) {
        this._removeInsert()
      }
    }
  }
</script>
