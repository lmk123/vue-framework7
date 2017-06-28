<template>
  <span :class="classes" v-show="isShow">
    <span :style="style" v-if="!infinite"></span>
  </span>
</template>

<script>
  import { oneAnimationEnd } from '../utils/transition'
  import vmName from '../mixins/vm-name'

  export default {
    name: 'f7-progressbar',
    mixins: [vmName],
    props: {
      top: {
        type: Boolean,
        default: false
      },
      hidden: {
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
      },
      multiColor: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShow: !this.hidden,
        innerP: this.progress,
        speed: null
      }
    },
    watch: {
      progress (p) {
        this.set(p)
      }
    },
    computed: {
      classes () {
        const c = [this.infinite ? 'progressbar-infinite' : 'progressbar']
        if (this.multiColor) {
          c.push('color-multi')
        }
        return c
      },
      style () {
        let { innerP } = this
        if (innerP < 0) {
          innerP = 0
        } else if (innerP > 100) {
          innerP = 100
        }
        let s = `transform: translate3d(${innerP - 100}%, 0px, 0px)`
        if (this.speed != null) {
          s += `;transition-duration: ${this.speed}ms`
        }
        return s
      }
    },
    methods: {
      /**
       * 设置进度
       * @param {number} progress
       * @param {number} [speed]
       */
      set (progress, speed) {
        this.innerP = progress
        this.speed = speed
      },
      show () {
        if (this.isShow) return
        this.isShow = true
        this.$nextTick(() => {
          this.$el.classList.add('progressbar-in')
        })
      },
      hide () {
        if (!this.isShow) return
        const { $el } = this
        const { classList } = $el
        classList.remove('progressbar-in')
        classList.add('progressbar-out')
        oneAnimationEnd($el, () => {
          this.isShow = false
          classList.remove('progressbar-out')
        })
      }
    },
    mounted () {
      if (this.top) document.body.appendChild(this.$el)
    },
    beforeDestroy () {
      if (this.top) document.body.removeChild(this.$el)
    }
  }
</script>
