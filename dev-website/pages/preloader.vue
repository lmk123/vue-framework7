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
            <span slot="center">Preloader</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/preloader.vue">Code
                is
                here.</a>
            </f7-content-block>
            <f7-content-block-title>normal preloader</f7-content-block-title>
            <f7-content-block inner>
              <f7-preloader></f7-preloader>
            </f7-content-block>
            <f7-content-block-title>white preloader</f7-content-block-title>
            <f7-content-block>
              <div style="background: #000">
                <f7-preloader white></f7-preloader>
              </div>
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script type="text/babel">
  export default {}
</script>
