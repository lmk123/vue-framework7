<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
              <span>Back</span>
            </a>
            <span slot="center">Grid</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block title="normal row">
              <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/grid.vue">Code
                is
                here.</a>
              <f7-row>
                <f7-col col="50" tablet="25">mobile 50%, tablet 25%</f7-col>
                <f7-col col="50" tablet="75">mobile 50%, tablet 75%</f7-col>
              </f7-row>
            </f7-content-block>

            <f7-content-block-title>no gutter row</f7-content-block-title>
            <f7-content-block>
              <f7-row no-gutter>
                <f7-col col="50" tablet="25">mobile 50%, tablet 25%</f7-col>
                <f7-col col="50" tablet="75">mobile 50%, tablet 25%</f7-col>
              </f7-row>
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
