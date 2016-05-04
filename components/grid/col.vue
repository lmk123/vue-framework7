<template>
  <div v-el:col>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: [ 'col', 'tablet' ],
    ready() {
      const { classList } = this.$els.col;
      if ( this.col ) {
        classList.add( 'col-' + this.col );
      }
      if ( this.tablet ) {
        classList.add( 'tablet-' + this.tablet );
      }
    }
  };
</script>
