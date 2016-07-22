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
        <div class="center">Picker Modal</div>
        <div class="right"><a class="link icon-only" @click="$f7.pickerModal('info')">Info</a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <a href="https://github.com/lmk123/vue-framework7/tree/master/demo-site/page-components/picker-modal.vue">Source code</a>
      </div>
      <div class="content-block">
        <p>
          <a @click="$f7.pickerModal('info')">Open Info</a>
        </p>
        <p>
          <a @click="$f7.closePickerModal('info')">Close Info</a>
        </p>
      </div>
    </div>
  </div>

  <f7-picker-modal name="info">
    <div class="toolbar">
      <div class="toolbar-inner">
        <div class="left"></div>
        <div class="right"><a @click="$f7.closePickerModal('info')">Done</a></div>
      </div>
    </div>
    <div class="picker-modal-inner">
      <div class="content-block">
        <h4>Info 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc.
          Quisque sodales scelerisque est, at porta justo cursus ac.</p>
      </div>
    </div>
  </f7-picker-modal>
</template>
