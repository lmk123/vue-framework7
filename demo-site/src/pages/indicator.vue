<template>
  <f7-page>
    <f7-navbar slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span>Back</span>
      </a>
      Indicator
    </f7-navbar>
    <div class="content-block">
      <p>
        <input type="button" class="button" value="Show Indicator" @click="show">
      </p>
    </div>
  </f7-page>
</template>

<script>
  import { showIndicator, hideIndicator } from 'vue-framework7'
  export default {
    methods: {
      show () {
        showIndicator()
        setTimeout(hideIndicator, 1000)
      }
    }
  }
</script>
