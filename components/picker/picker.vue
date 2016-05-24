<template>
  <div v-el:picker class="picker-modal" v-if="isShow" transition="modal">
    <div class="toolbar" v-if="!hideBar">
      <div class="toolbar-inner">
        <div></div>
        <a href="#" class="link" @click.prevent="hide">Done</a>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import { modalMixin } from '../utils';
  const { classList } = document.body;

  export default {
    props: {
      hideBar: {
        type: Boolean,
        default: false
      }
    },
    events: {
      ['modal enter']() {
        classList.add( 'with-picker-modal' );
      },
      ['before modal leave']() {
        classList.remove( 'with-picker-modal' );
      },
      ['modal leave']() {
        classList.add( 'picker-modal-closing' );
      },
      ['after modal leave']() {
        classList.remove( 'picker-modal-closing' );
      }
    },
    mixins: [ modalMixin ]
  };
</script>
