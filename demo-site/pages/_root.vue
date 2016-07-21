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
</template>
