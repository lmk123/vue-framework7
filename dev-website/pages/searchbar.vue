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
            <span slot="center">Search Bar</span>
          </f7-navbar>
          <f7-searchbar placeholder="Your placeholder" cancel-text="Cancel" :value.sync="value"></f7-searchbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/searchbar.vue">Code is
                here.</a>
              You typed: <code v-text="value"></code>
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
        value: ''
      }
    }
  }
</script>
