<template>
  <div v-el:a class="modal-overlay" :class="{'modal-overlay-visible':isShow}" @click="hide"></div>
  <div v-el:b class="actions-modal" v-if="isShow" transition="modal">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import m from '../_mixins/modal'
  import i from '../_mixins/insert-to-body'
  export default {
    name: 'f7-actions',
    events: {
      'hide-action-sheet' () {
        this.hide()
      }
    },
    mixins: [m, i]
  }
</script>
