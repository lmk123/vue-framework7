<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <span slot="center">Popup</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/popup.vue">Code
                is
                here.</a>
              <p>
                <f7-button @click="$refs.popup.show()">Show Popup</f7-button>
              </p>
            </f7-content-block>

            <f7-popup v-ref:popup>
              <f7-content-block>
                hello world.
                <p>
                  <f7-button @click="$refs.popup.hide()">Hide Popup</f7-button>
                </p>
              </f7-content-block>
            </f7-popup>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
