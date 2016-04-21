<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-page-content>
            <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/popup.vue">Code is
              here.</a>
            <f7-content-block inner>
              <button @click="$refs.popup.show()">Show Popup</button>
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
  <f7-popup v-ref:popup>
    hello world.
    <button @click="$refs.popup.hide()">Hide Popup</button>
  </f7-popup>
</template>
