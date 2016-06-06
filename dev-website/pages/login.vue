<template>
  <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/login.vue">Code
    is
    here.</a>
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
  <button @click="$refs.login.show">show login screen</button>
</template>
