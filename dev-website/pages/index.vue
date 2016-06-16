<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type='fixed'>
            <div slot='center'>vue-framework7</div>
          </f7-navbar>
          <f7-page-content>
            <f7-list-block>
              <f7-list>
                <f7-list-item v-for='i in $_a' link v-link='i.link'>
                  <f7-list-item-inner>
                    <f7-list-item-title>{{i.title}}</f7-list-item-title>
                  </f7-list-item-inner>
                </f7-list-item>
              </f7-list>
            </f7-list-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script type='text/babel'>
  export default {
    data () {
      this.$_a = [
        {
          title: 'Modal',
          link: '/modal'
        },
        {
          title: 'Navbar',
          link: '/navbar'
        },
        {
          title: 'Search Bar',
          link: '/searchbar'
        },
        {
          title: 'Toolbar',
          link: '/toolbar'
        },
        {
          title: 'Tab Bar',
          link: '/tabbar'
        },
        {
          title: 'Content Block',
          link: '/content-block'
        },
        {
          link: '/side',
          title: 'Side Panels'
        },
        {
          link: '/grid',
          title: 'Grid'
        },
        {
          link: '/popup',
          title: 'Popup'
        },
        {
          link: '/list',
          title: 'List View'
        },
        {
          link: '/media-list',
          title: 'Media List'
        },
        {
          link: '/form',
          title: 'Form Elements'
        },
        {
          link: '/buttons',
          title: 'Buttons'
        },
        {
          link: '/actions',
          title: 'Action Sheet'
        },
        {
          link: '/picker-modal',
          title: 'Picker Modal'
        },
        {
          link: '/preloader',
          title: 'Preloader Indicator'
        },
        {
          link: '/login',
          title: 'Login Screen'
        },
        {
          link: '/progressbar',
          title: 'Progress Bar'
        },
        {
          link: '/cards',
          title: 'Cards'
        }
      ]
      return {}
    }
  }
</script>
