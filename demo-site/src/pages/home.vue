<template>
  <f7-page>
    <f7-navbar slot="before-content">
      vue-framework7
    </f7-navbar>

    <div class="list-block">
      <ul>
        <router-link tag="li" class="item-link item-content" v-for="link in links" :key="link.label" :to="link.to">
          <div class="item-inner">
            <div class="item-title">{{ link.label }}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </f7-page>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          {
            label: 'Navbar',
            to: '/navbar'
          },
          {
            label: 'Popup',
            to: '/popup'
          },
          {
            label: 'Search Bar',
            to: '/searchbar'
          },
          {
            label: 'Toolbar',
            to: '/toolbar'
          },
          {
            label: 'Indicator',
            to: '/indicator'
          },
          {
            label: 'Modal',
            to: '/modal'
          }
        ]
      }
    }
  }
</script>
