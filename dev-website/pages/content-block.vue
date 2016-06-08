<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <span slot="center">Content Block</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/content-block.vue">Code is
                here.</a>
            </f7-content-block>

            <f7-content-block>
              Content block.
            </f7-content-block>

            <f7-content-block-title>I'm title.</f7-content-block-title>
            <f7-content-block>
              Content block with title.
            </f7-content-block>

            <f7-content-block-title>I'm inner content.</f7-content-block-title>
            <f7-content-block inner>
              Inner content block with title.
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
