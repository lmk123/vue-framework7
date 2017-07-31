<template>
  <div class="page">
    <slot name="before-content"></slot>
    <div class="page-content" ref="content" :style="contentStyle">
      <div class="pull-to-refresh-layer" v-if="pull">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
      </div>
      <slot></slot>
    </div>
    <slot name="after-content"></slot>
  </div>
</template>

<script>
  import { oneTransitionEnd } from '../utils/transition'

  const IS_TOUCH = 'ontouchstart' in window
  const TOUCH_START = IS_TOUCH ? 'touchstart' : 'mousedown'
  const TOUCH_MOVE = IS_TOUCH ? 'touchmove' : 'mousemove'
  const TOUCH_END = IS_TOUCH ? 'touchend' : 'mouseup'

  function defaultPullState () {
    return {
      up: false,
      startX: 0,
      startY: 0,
      distance: 0,
      pullStart: false
    }
  }

  const getPageXY = IS_TOUCH ? function (event) {
    const firstTouch = event.targetTouches[0]
    return {
      pageX: firstTouch.pageX,
      pageY: firstTouch.pageY
    }
  } : function (event) {
    return {
      pageX: event.pageX,
      pageY: event.pageY
    }
  }

  export default {
    name: 'f7-page',
    props: {
      pull: {
        type: Function
      },
      ptrDistance: {
        default: 72
      }
    },
    data () {
      return {
        pullInitialized: false,
        pullState: defaultPullState()
      }
    },
    methods: {
      _initPull () {
        if (this.pullInitialized) return
        this.pullInitialized = true
        const { content } = this.$refs
        content.classList.add('pull-to-refresh-content')
        content.addEventListener(TOUCH_START, this._onTouchStart)
        content.addEventListener(TOUCH_MOVE, this._onTouchMove)
        content.addEventListener(TOUCH_END, this._onTouchEnd)
      },
      _destroyPull () {
        this.pullInitialized = false
        this.pullState = defaultPullState()
        const { content } = this.$refs
        content.classList.remove('pull-to-refresh-content')
        content.removeEventListener(TOUCH_START, this._onTouchStart)
        content.removeEventListener(TOUCH_MOVE, this._onTouchMove)
        content.removeEventListener(TOUCH_END, this._onTouchEnd)
      },
      _onTouchStart (event) {
        const { content } = this.$refs
        if (content.scrollTop > 0) return

        delete this.scrolling
        const { pullState } = this
        const { pageX, pageY } = getPageXY(event)
        pullState.startX = pageX
        pullState.startY = pageY
        pullState.pullStart = true
        content.classList.add('active-state')
        content.classList.remove('transitioning')
      },
      _onTouchMove (event) {
        const { pullState } = this
        if (!pullState.pullStart) return

        const { pageX, pageY } = getPageXY(event)

        if (typeof this.scrolling !== 'boolean') {
          this.scrolling = Math.abs(pageY - pullState.startY) < Math.abs(pageX - pullState.startX) || pageY < pullState.startY
        }

        if (this.scrolling) {
          pullState.pullStart = false
          return
        }

        event.preventDefault()
        const { content } = this.$refs
        content.classList.remove('active-state')

        let distance = pageY - pullState.startY
        if (distance < 0) distance = 0
        pullState.distance = distance
        if (pullState.up = distance >= this.ptrDistance) {
          content.classList.remove('pull-down')
          content.classList.add('pull-up')
        } else {
          content.classList.remove('pull-up')
          content.classList.add('pull-down')
        }
      },
      _onTouchEnd () {
        const { pullState } = this
        if (!pullState.pullStart) return
        pullState.pullStart = false
        const { content } = this.$refs
        content.classList.remove('active-state')
        pullState.distance = 0
        if (pullState.up) {
          content.classList.add('transitioning', 'refreshing')
          Promise.resolve(this.pull()).then(() => {
            content.classList.remove('refreshing')

            oneTransitionEnd(content, () => {
              content.classList.remove('pull-up')
            })

            this.pullState = defaultPullState()
          })
        } else {
          content.classList.add('transitioning')
          content.classList.remove('pull-down')
          this.pullState = defaultPullState()
        }
      }
    },
    computed: {
      contentStyle () {
        let { distance } = this.pullState
        if (!distance) return
        return {
          transform: `translate3d(0, ${Math.pow(distance, 0.85)}px, 0)`
        }
      }
    },
    watch: {
      pull (val) {
        if (val) {
          if (!this.pullInitialized) {
            this._initPull()
          }
        } else {
          this._destroyPull()
        }
      }
    },
    mounted () {
      if (this.pull) {
        this._initPull()
      }
    }
  }
</script>
