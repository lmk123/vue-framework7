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
  import m from '../_mixins/modal'
  import i from '../_mixins/insert-to-body'
  const { classList } = document.body

  export default {
    name: 'f7-picker-modal',
    props: {
      hideBar: {
        type: Boolean,
        default: false
      }
    },
    events: {
      'modal enter' () {
        classList.add('with-picker-modal')
      },
      'before modal leave' () {
        classList.remove('with-picker-modal')
      },
      'modal leave' () {
        classList.add('picker-modal-closing')
      },
      'after modal leave' () {
        classList.remove('picker-modal-closing')
      }
    },
    mixins: [m, i]
  }
</script>
