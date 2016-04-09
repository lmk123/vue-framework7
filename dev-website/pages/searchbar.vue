<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-searchbar placeholder="Your placeholder" cancel-text="Cancel" :value.sync="value"></f7-searchbar>
          <f7-page-content>
            <f7-content-block>
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
    data() {
      return {
        value: ''
      };
    }
  };
</script>
