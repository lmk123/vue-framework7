<template>
  <f7-page>
    <template slot="before-content">
      <f7-navbar>
        <a class="back link" slot="left" @click.prevent="$router.back">
          <i class="icon icon-back"></i>
          <span class="">Back</span>
        </a>
        Search Bar
      </f7-navbar>
      <f7-searchbar v-model="search"></f7-searchbar>
    </template>
    <div class="content-block">
      Your search: {{ search }}
    </div>
  </f7-page>
</template>

<script>
  export default {
    data () {
      return {
        search: ''
      }
    }
  }
</script>
