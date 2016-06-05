<template>
  <div class="pages" v-el:pages>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import { modifyClass } from './utils'
  export default {
    events: {
      'f7-pages-add-class' (classArray) {
        modifyClass(this.$els.pages, classArray, 'add')
      },
      'f7-pages-remove-class' (classArray) {
        modifyClass(this.$els.pages, classArray, 'remove')
      }
    }
  }
</script>
