<template>
  <div class="pages" :class="classList">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        classList: []
      }
    },
    events: {
      ['f7-pages-add-class']( className ) {
        this.classList.push( className );
      }
    }
  };
</script>
