<template>
  <f7-side left-effect="reveal" right-effect="cover" v-ref:side>
    <f7-content-block slot="left">
      <p>Left side.</p>
      <button @click="hideLeft">Close me.</button>
      <button @click="showRight">Open Right.</button>
    </f7-content-block>
    <f7-content-block slot="right">
      <p>Right side.</p>
      <button @click="hideRight">Close me.</button>
      <button @click="showLeft">Open Left.</button>
    </f7-content-block>
  </f7-side>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
              <span>Back</span>
            </a>
            <span slot="center">Side Panels</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/side.vue">Code
                is
                here.</a>
              <p>
                <f7-button @click="showLeft">Left side with "reveal" effect.</f7-button>
              </p>
              <p>
                <f7-button @click="showRight">Right side with "cover" effect.</f7-button>
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
    methods: {
      showLeft () { this.$refs.side.showLeft() },
      hideLeft () { this.$refs.side.hideLeft() },
      hideRight () { this.$refs.side.hideRight() },
      showRight () { this.$refs.side.showRight() }
    }
  }
</script>
