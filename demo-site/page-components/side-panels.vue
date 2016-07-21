<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"><a v-link="{ name: 'home' }" class="link"><i class="icon icon-back"></i><span>Back</span></a>
        </div>
        <div class="center">Panels</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <p>
          Open Panels with JavaScript
        </p>
        <p>
          <a @click="$f7.openPanel('left')">Open Left Panel</a>
        </p>
        <p>
          <a @click="$f7.openPanel('right')">Open Right Panel</a>
        </p>
      </div>
    </div>
  </div>
</template>
