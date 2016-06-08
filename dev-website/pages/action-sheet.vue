<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <span slot="center">Action Sheet</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/action-sheet.vue">Code
                is
                here.</a>
            </f7-content-block>

            <f7-actions v-ref:action>
              <f7-actions-group>
                <f7-action-button>button 1</f7-action-button>
                <f7-action-button>button 2</f7-action-button>
              </f7-actions-group>
              <f7-actions-group title="group title">
                <f7-action-button>button 1</f7-action-button>
                <f7-action-button>button 2</f7-action-button>
              </f7-actions-group>
            </f7-actions>

            <f7-content-block>
              <f7-button @click="$refs.action.show">show action</f7-button>
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
