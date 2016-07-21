<template>
  <div class="panel panel-left panel-reveal">
    <div class="content-block">
      <p>Left Panel content here</p>
      <p><a @click="$f7.closePanel">Close me</a></p>
      <p><a @click="$f7.openPanel('right')">Open Right Panel</a></p>
    </div>
  </div>
  <div class="panel panel-right panel-cover">
    <div class="content-block">
      <p>Right Panel content here</p>
      <p><a @click="$f7.closePanel">Close me</a></p>
      <p><a @click="$f7.openPanel('left')">Open Left Panel</a></p>
    </div>
  </div>
  <div class="views">
    <div class="view">
      <div class="pages">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <div class="login-screen">
    <div class="view">
      <div class="page">
        <div class="page-content login-screen-content">
          <div class="login-screen-title">My App</div>
          <form>
            <div class="list-block">
              <ul>
                <li class="item-content">
                  <div class="item-inner">
                    <div class="item-title label">Username</div>
                    <div class="item-input">
                      <input type="text" name="username" placeholder="Your username">
                    </div>
                  </div>
                </li>
                <li class="item-content">
                  <div class="item-inner">
                    <div class="item-title label">Password</div>
                    <div class="item-input">
                      <input type="password" name="password" placeholder="Your password">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list-block">
              <ul>
                <li><a class="item-link list-button">Sign In</a></li>
              </ul>
              <div class="list-block-label">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p><a class="close-login-screen" @click="$f7.closeLogin()">Close Login Screen</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
