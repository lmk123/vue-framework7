<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a v-link="{ name: 'home' }" class="link">
            <i class="icon icon-back"></i>
            <span>Back</span>
          </a>
        </div>
        <div class="center">Popup</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <p>
          <a @click="$f7.popup('about')">Open About Popup</a>
        </p>
        <p>
          <a @click="$f7.popup('services')">Open Services Popup</a>
        </p>
      </div>
    </div>
  </div>

  <f7-popup name="about">
    <div class="content-block">
      <p>
        About
      </p>
      <p>
        <a @click="$f7.closePopup('about')">Close Popup</a>
      </p>
    </div>
  </f7-popup>

  <f7-popup name="services">
    <div class="content-block">
      <p>
        Services
      </p>
      <p>
        <a @click="$f7.closePopup('services')">Close Popup</a>
      </p>
    </div>
  </f7-popup>
</template>
