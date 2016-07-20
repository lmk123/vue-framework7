<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"><a v-link="{ name: 'home' }" class="link"><i class="icon icon-back"></i><span>Back</span></a>
        </div>
        <div class="center">Search Bar</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
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
