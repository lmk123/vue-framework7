<template>
  <f7-modal v-ref:modal></f7-modal>
  <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/modal.vue">Code is
              here.</a>
  <button @click="alert">Alert</button>
  <button @click="confirm">Confirm</button>
  <button @click="prompt">Prompt</button>
  <button @click="showPreloader">Preloader</button>
  <button @click="showIndicator">Indicator</button>
</template>

<script type="text/babel">
  export default {
    methods: {
      alert() {
        this.$refs.modal.alert( 'Alert.', 'Hello' );
      },
      confirm() {
        const { modal } = this.$refs;
        modal.confirm( 'Hello Confirm.', 'Custom title' ).then( ( ok )=> modal.alert( `You clicked ${ok ? '"ok"' : '"no"'}` ) );
      },
      prompt() {
        const { modal } = this.$refs;
        modal.prompt( 'Hello Prompt.', 'Custom title' ).then( ( value )=> value !== null ? modal.alert( `You typed "${value}"` ) : modal.alert( 'You canceled.' ) );
      },
      showPreloader() {
        const { modal } = this.$refs;
        modal.showPreloader( 'Hey, wait...' );
        setTimeout( modal.hidePreloader, 2000 );
      },
      showIndicator() {
        const { modal } = this.$refs;
        modal.showIndicator();
        setTimeout( modal.hideIndicator, 2000 );
      }
    }
  };
</script>
