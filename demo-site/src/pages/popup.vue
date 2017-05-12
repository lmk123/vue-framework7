<template>
  <f7-page>
    <f7-navbar slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span class="">Back</span>
      </a>
      Popup
    </f7-navbar>
    <f7-popup name="my-popup">
      <div class="content-block">
        <p>
          Hello vue-framework7
        </p>
        <p>
          <input type="button" class="button" @click="closePopup('my-popup')" value="Close Popup">
        </p>
      </div>
    </f7-popup>
    <div class="content-block">
      <p>
        <input type="button" class="button" @click="popup('my-popup')" value="Show Popup">
      </p>
    </div>
  </f7-page>
</template>

<script>
  import { popup, closePopup } from 'vue-framework7'
  export default {
    methods: {
      popup,
      closePopup
    }
  }
</script>
