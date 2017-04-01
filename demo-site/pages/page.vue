<!-- 使用动态组件显示每个页面 -->
<template>
  <component :is="$route.params.name"></component>
</template>

<script>
  import components from '../page-components'
  export default {
    components
  }
</script>
