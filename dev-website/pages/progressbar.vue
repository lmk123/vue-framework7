<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
              <span>Back</span>
            </a>
            <span slot="center">Progress Bar</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/progress.vue">Code
                is
                here.</a>
            </f7-content-block>
            <f7-content-block-title>DETERMINATE PROGRESS BAR</f7-content-block-title>
            <f7-content-block inner>
              <p>
                Inline determinate progress bar:
              </p>
              <p>
                <f7-progressbar :progress="p1"></f7-progressbar>
              </p>
              <p>
                <f7-buttons-row>
                  <f7-button @click="p1 = 10">10%</f7-button>
                  <f7-button @click="p1 = 30">30%</f7-button>
                  <f7-button @click="p1 = 50">50%</f7-button>
                  <f7-button @click="p1 = 100">100%</f7-button>
                </f7-buttons-row>
              </p>
              <p>
                Inline determinate load & hide:
              </p>
              <p style="height: 2px">
                <f7-progressbar :progress="p1" init-hide v-ref:p2></f7-progressbar>
              </p>
              <p>
                <f7-button @click="$refs.p2.show">Show</f7-button>
              </p>
              <p>
                <f7-button @click="$refs.p2.hide">Hide</f7-button>
              </p>
              <p>
                Overlay with determinate progress bar on top of the app:
              </p>
              <p>
                <f7-progressbar :progress="p1" init-hide on-top v-ref:p3></f7-progressbar>
              </p>
              <p>
                <f7-button @click="$refs.p3.show">Show</f7-button>
              </p>
              <p>
                <f7-button @click="$refs.p3.hide">Hide</f7-button>
              </p>
            </f7-content-block>
            <f7-content-block-title>INFINITE PROGRESS BAR</f7-content-block-title>
            <f7-content-block inner>
              <p>Inline infinite progress bar</p>
              <p>
                <f7-progressbar infinite></f7-progressbar>
              </p>
              <p>
                Overlay with infinite progress bar on top of the app:
              </p>
              <p>
                <f7-progressbar infinite init-hide on-top v-ref:p4></f7-progressbar>
              </p>
              <p>
                <f7-button @click="$refs.p4.show">Show</f7-button>
              </p>
              <p>
                <f7-button @click="$refs.p4.hide">Hide</f7-button>
              </p>
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        p1: 10
      }
    }
  }
</script>
