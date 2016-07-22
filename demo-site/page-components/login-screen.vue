<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"><a v-link="{ name: 'home' }" class="link"><i class="icon icon-back"></i><span>Back</span></a>
        </div>
        <div class="center">Login Screen With JavaScript</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <a href="https://github.com/lmk123/vue-framework7/tree/master/demo-site/page-components/login-screen.vue">Source
          code</a>
      </div>
      <div class="content-block">
        <p>
          <a @click="$f7.loginScreen()">Open Login Screen</a>
        </p>
      </div>
    </div>
  </div>
</template>
