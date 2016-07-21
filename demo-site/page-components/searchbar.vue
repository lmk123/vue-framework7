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
                  :placeholder="placeholder"
                  :cancel-text="cancelText"
                  :hide-overlay="hideOverlay"
                  @search="onSearch"
                  @clear-search="onClearSearch">
    </f7-searchbar>
    <div class="page-content">
      <p>
        Your query: <input type="text" v-model="query">
      </p>
      <p>
        Placeholder: <input type="text" v-model="placeholder">
      </p>
      <p>
        Cancel Text: <input type="text" v-model="cancelText">
      </p>
      <p>
        Hide Overlay? <input type="checkbox" v-model="hideOverlay">
      </p>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        query: '',
        placeholder: '',
        cancelText: 'Cancel',
        hideOverlay: false
      }
    },
    methods: {
      onSearch () {
        this.$f7.alert('"search" event')
      },
      onClearSearch () {
        this.$f7.alert('"clear-search" event')
      }
    }
  }
</script>
