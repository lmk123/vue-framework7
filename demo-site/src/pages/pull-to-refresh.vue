<template>
  <f7-page :pull="pull">
    <f7-navbar slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span class="">Back</span>
      </a>
      Pull to refresh
    </f7-navbar>
    <div class="content-block">
      <p>
        Try to pull this page.
      </p>
      <p>
        {{ text }}
      </p>
    </div>
  </f7-page>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      pull () {
        this.text = 'loading...'
        return new Promise(res => {
          setTimeout(() => {
            this.text = 'done'
            res()
          }, 2000)
        })
      }
    }
  }
</script>
