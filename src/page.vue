<template>
  <div v-el:page class="page">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import modifyClass from './_utils/modify-class'
  export default {
    name: 'f7-page',
    events: {
      'f7-page-add-class' (classArray) {
        modifyClass(this.$els.page, classArray, 'add')
      },
      'f7-page-remove-class' (classArray) {
        modifyClass(this.$els.page, classArray, 'remove')
      }
    }
  }
</script>
