<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <router-link :to="{ name: 'home' }" class="link">
            <i class="icon icon-back"></i>
            <span>Back</span>
          </router-link>
        </div>
        <div class="center">Progress Bar</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <a href="https://github.com/lmk123/vue-framework7/tree/master/demo-site/page-components/progress-bar.vue">Source
          code</a>
      </div>
      <div class="content-block-title">Determinate Progress Bar</div>
      <div class="content-block">
        <div class="content-block-inner">
          <p>Inline determinate progress bar:</p>
          <div class="demo-progressbar-inline">
            <p>
              <f7-progressbar name="p1" :progress="10"></f7-progressbar>
            </p>
            <p class="buttons-row">
              <a class="button" @click="$f7.setProgressbar('p1', 10, 1000)">10%</a>
              <a class="button" @click="$f7.setProgressbar('p1', 30, 2000)">30%</a>
              <a class="button" @click="$f7.setProgressbar('p1', 50, 3000)">50%</a>
              <a class="button" @click="$f7.setProgressbar('p1', 100, 4000)">100%</a>
            </p>
          </div>
          <p>Inline determinate load &amp; hide:</p>
          <div class="demo-progressbar-load-hide">
            <p style="height:2px">
              <f7-progressbar name="p2" hide></f7-progressbar>
            </p>
            <p><a class="button" @click="loadAndHide('p2')">Start Loading</a></p>
          </div>
          <p>Overlay with determinate progress bar on top of the app:</p>
          <f7-progressbar name="p3" hide top></f7-progressbar>
          <p class="demo-progressbar-overlay">
            <a class="button" @click="loadAndHide('p3')">Start Loading</a>
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
            <f7-progressbar infinite class="color-multi"></f7-progressbar>
          </p>
          <p>Overlay with infinite progress bar on top of the app</p>
          <f7-progressbar name="p4" hide infinite top></f7-progressbar>
          <p><a class="button" @click="infiniteTop('p4')">Start Loading</a></p>
          <p>Overlay with infinite multi-color progress bar on top of the app</p>
          <f7-progressbar name="p5" hide infinite top class="color-multi"></f7-progressbar>
          <p><a class="button" @click="infiniteTop('p5')">Start Loading</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      loadAndHide (name) {
        this.$f7.showProgressbar(name, 0)

        // Simluate Loading Something
        let progress = 0
        const simulateLoading = () => {
          setTimeout(() => {
            const progressBefore = progress
            progress += Math.random() * 20
            this.$f7.setProgressbar(name, progress)
            if (progressBefore < 100) {
              simulateLoading() // keep "loading"
            } else {
              this.$f7.hideProgressbar(name) // hide
            }
          }, Math.random() * 200 + 200)
        }
        simulateLoading()
      },

      infiniteTop (name) {
        this.$f7.showProgressbar(name)
        setTimeout(() => this.$f7.hideProgressbar(name), 3000)
      }
    }
  }
</script>
