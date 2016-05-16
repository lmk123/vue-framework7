<template>
  <div v-el:a class="modal-overlay" :class="{'modal-overlay-visible':isShow}" @click="hide"></div>
  <div v-el:b class="actions-modal" v-if="isShow" transition="modal">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import { modalMixin } from '../utils';
  export default {
    events: {
      ['hide-action-sheet']() {
        this.hide();
      }
    },
    mixins: [ modalMixin ]
  };
</script>
