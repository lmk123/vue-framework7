<template>
  <div class="login-screen" v-el:a v-if="isShow" transition="modal">
    <div class="view">
      <div class="page">
        <div class="page-content login-screen-content">
          <div class="login-screen-title" v-text="title"></div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import m from './_mixins/modal'
  import i from './_mixins/insert-to-body'
  export default {
    name: 'f7-login',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    mixins: [i, m]
  }
</script>
