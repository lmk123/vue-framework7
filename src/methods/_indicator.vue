<template>
  <div class="preloader-indicator-modal" v-show="isShow">
    <span class="preloader preloader-white"></span>
  </div>
</template>

<script>
  import createOverlay from '../utils/create-overlay'
  // TODO createOverlay 里也用到了这个常量
  const OVERLAY_NAME = 'preloader-indicator'
  export default {
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      show () {
        createOverlay(OVERLAY_NAME).show(false)
        this.isShow = true
      },
      hide () {
        createOverlay(OVERLAY_NAME).hide(false)
        this.isShow = false
      }
    }
  }
</script>
