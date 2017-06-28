<template>
  <f7-page>
    <f7-navbar slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span>Back</span>
      </a>
      Progress bar
    </f7-navbar>
    <div class="content-block-title">Determinate Progress Bar</div>
    <div class="content-block">
      <div class="content-block-inner">
        <p>Inline determinate progress bar:</p>
        <p>
          <f7-progressbar :progress="p1"></f7-progressbar>
        </p>
        <p class="buttons-row">
          <a href="#" class="button" @click.prevent="p1 = 10">10%</a>
          <a href="#" class="button" @click.prevent="p1 = 30">30%</a>
          <a href="#" class="button" @click.prevent="p1 = 50">50%</a>
          <a href="#" class="button" @click.prevent="p1 = 100">100%</a>
        </p>
        <p>Inline determinate load & hide:</p>
        <p style="height: 2px;">
          <f7-progressbar ref="p2" :progress="p2" hidden></f7-progressbar>
        </p>
        <p>
          <a href="#" class="button" @click.prevent="loadingP2">Start Loading</a>
        </p>
        <p>Overlay with determinate progress bar on top of the app:</p>
        <p>
          <a href="#" class="button" @click.prevent="loadingP3">Start Loading</a>
        </p>
      </div>
    </div>
    <div class="content-block-title">Infinite Progress Bar</div>
    <div class="content-block">
      <div class="content-block-inner">
        <p>Inline infinite progress bar</p>
        <p>
          <f7-progressbar infinite></f7-progressbar>
        </p>
        <p>Multi-color infinite progress bar</p>
        <p>
          <f7-progressbar infinite multi-color></f7-progressbar>
        </p>
        <p>Overlay with infinite progress bar on top of the app</p>
        <p>
          <f7-progressbar ref="p4" hidden top infinite></f7-progressbar>
        </p>
        <p>
          <a href="#" class="button" @click.prevent="loadingP4">Start Loading</a>
        </p>
        <p>Overlay with infinite multi-color progress bar on top of the app</p>
        <p>
          <f7-progressbar ref="p5" hidden top infinite multi-color></f7-progressbar>
        </p>
        <p>
          <a href="#" class="button" @click.prevent="loadingP5">Start Loading</a>
        </p>
      </div>
    </div>
  </f7-page>
</template>

<script>
  import { showProgressbar, hideProgressbar } from 'vue-framework7'

  function loading (onProgressChange, onEnd) {
    let progress = 0

    function simulateLoading () {
      setTimeout(function () {
        const progressBefore = progress
        progress += Math.random() * 20
        onProgressChange(progress)
        if (progressBefore < 100) {
          simulateLoading()
        } else {
          onEnd()
        }
      }, Math.random() * 200 + 200);
    }

    simulateLoading()
  }

  export default {
    data () {
      return {
        p1: 10,
        p2: 0,
        p3: 0
      }
    },
    methods: {
      loadingP2 () {
        const { p2 } = this.$refs
        p2.show()
        loading(progress => this.p2 = progress, () => {
          this.p2 = 0
          p2.hide()
        })
      },
      loadingP3 () {
        showProgressbar(0)
        loading(progress => showProgressbar(progress), () => {
          hideProgressbar()
        })
      },
      loadingP4 () {
        showProgressbar()
        setTimeout(() => hideProgressbar(), 3000)
      },
      loadingP5 () {
        showProgressbar(true)
        setTimeout(() => hideProgressbar(), 3000)
      }
    }
  }
</script>
