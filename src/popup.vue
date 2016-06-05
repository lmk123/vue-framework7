<template>
  <div v-el:a class="popup-overlay" :class="{'modal-overlay-visible':isShow}" @click="hide"></div>
  <div v-el:b class="popup" v-if="isShow" transition="modal">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import { modalMixin } from './utils'
  export default {
    name: 'f7-popup',
    mixins: [modalMixin]
  }
</script>
