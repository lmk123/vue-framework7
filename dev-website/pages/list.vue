<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <span slot="center">List View</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/list.vue">Code
                is
                here.</a>
            </f7-content-block>
            <f7-list-block>
              <f7-list>
                <f7-list-item>
                  <span slot="title">normal item title</span>
                  <span slot="after">normal item after</span>
                </f7-list-item>
                <f7-list-divider>item divider</f7-list-divider>
                <f7-list-item link>
                  <span slot="title">link item title</span>
                  <span slot="after">link item after</span>
                </f7-list-item>
              </f7-list>
              <f7-list-label>
                list label
              </f7-list-label>
            </f7-list-block>

            <f7-content-block-title>Inset list</f7-content-block-title>
            <f7-list-block inset>
              <f7-list>
                <f7-list-item>
                  <span slot="title">normal item title</span>
                  <span slot="after">normal item after</span>
                </f7-list-item>
                <f7-list-item link>
                  <span slot="title">link item title</span>
                  <span slot="after">link item after</span>
                </f7-list-item>
              </f7-list>
              <f7-list-label>
                list label
              </f7-list-label>
            </f7-list-block>

            <f7-content-block-title>Group list</f7-content-block-title>
            <f7-list-block>
              <f7-list-group>
                <f7-list>
                  <f7-list-group-title>group title 1</f7-list-group-title>
                  <f7-list-item>
                    <span slot="title">normal item title</span>
                    <span slot="after">normal item after</span>
                  </f7-list-item>
                </f7-list>
              </f7-list-group>
              <f7-list-group>
                <f7-list>
                  <f7-list-group-title>group title 2</f7-list-group-title>
                  <f7-list-item>
                    <span slot="title">normal item title</span>
                    <span slot="after">normal item after</span>
                  </f7-list-item>
                </f7-list>
              </f7-list-group>
            </f7-list-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
