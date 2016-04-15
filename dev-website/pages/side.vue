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
          <f7-page-content>
            <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/side.vue">Code is
              here.</a>
            <f7-content-block>
              <button @click="showLeft">Left side with "reveal" effect.</button>
              <button @click="showRight">Right side with "cover" effect.</button>
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
      showLeft() {this.$refs.side.showLeft();},
      hideLeft() {this.$refs.side.hideLeft();},
      hideRight() {this.$refs.side.hideRight();},
      showRight() {this.$refs.side.showRight();}
    }
  };
</script>
