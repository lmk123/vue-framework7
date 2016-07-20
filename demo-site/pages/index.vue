<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"></div>
        <div class="center">vue-framework7</div>
        <div class="right"></div>
      </div>
    </div>
    <div class="page-content">
      <a v-link="{ name: 'page', params: { name: 'navbar' } }">Navbar</a>
    </div>
  </div>
</template>
