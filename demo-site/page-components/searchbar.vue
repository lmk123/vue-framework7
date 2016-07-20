<template>
  <div class="page">
    <f7-searchbar :query.sync="query"
                  @search="onSearch"
                  @clear-search="onClearSearch">
    </f7-searchbar>
    <div class="page-content">
      Your query: {{query}}
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        query: ''
      }
    },
    methods: {
      onSearch () {
        window.alert('"search" event')
      },
      onClearSearch () {
        window.alert('"clear-search" event')
      }
    }
  }
</script>
