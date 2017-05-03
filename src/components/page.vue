<template>
  <div class="page">
    <slot name="before-content"></slot>
    <div class="page-content">
      <slot></slot>
    </div>
    <slot name="after-content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'f7-page'
  }
</script>
