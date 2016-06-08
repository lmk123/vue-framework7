<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <span slot="center">Tool Bar</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/toolbar.vue">Code is
                here.</a>
              <p>
                <f7-button @click="$refs.toolbar.hide">Hide toolbar</f7-button>
              </p>
              <p>
                <f7-button @click="$refs.toolbar.show">Show toolbar</f7-button>
              </p>
            </f7-content-block>
          </f7-page-content>
          <f7-toolbar v-ref:toolbar type="fixed">
            <f7-toolbar-item v-link="'/'">link 1</f7-toolbar-item>
            <f7-toolbar-item v-link="'/'">link 2</f7-toolbar-item>
            <f7-toolbar-item v-link="'/'">link 3</f7-toolbar-item>
            <f7-toolbar-item v-link="'/'">link 4</f7-toolbar-item>
          </f7-toolbar>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
