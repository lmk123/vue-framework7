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
            <span slot="center">Login Screen</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/login.vue">Code
                is
                here.</a>
            </f7-content-block>
            <f7-login title="Your Title" v-ref:login>
              <f7-list-block>
                <f7-list>
                  <f7-list-item>
                    <span slot="title">Username</span>
                    <input type="text" placeholder="Username" slot="input">
                  </f7-list-item>
                  <f7-list-item>
                    <span slot="title">Password</span>
                    <input type="password" placeholder="Password" slot="input">
                  </f7-list-item>
                </f7-list>
              </f7-list-block>
              <f7-list-block>
                <f7-list>
                  <f7-list-button @click="$refs.login.hide">Sign In</f7-list-button>
                </f7-list>
                <f7-list-label>Some text.</f7-list-label>
              </f7-list-block>
            </f7-login>
            <f7-content-block>
              <f7-button @click="$refs.login.show">show login screen</f7-button>
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
