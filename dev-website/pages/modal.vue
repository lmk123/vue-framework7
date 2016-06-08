<template>
  <f7-modal v-ref:modal></f7-modal>

  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <div slot="center">Modal</div>
          </f7-navbar>
          <f7-page-content>

            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/modal.vue">Code
                is
                here.</a>
            </f7-content-block>

            <f7-list-block>
              <f7-list>
                <f7-list-button @click="alert">
                  Alert
                </f7-list-button>
                <f7-list-button @click="confirm">
                  Confirm
                </f7-list-button>
                <f7-list-button @click="prompt">
                  Prompt
                </f7-list-button>
                <f7-list-button @click="showPreloader">
                  Preloader
                </f7-list-button>
                <f7-list-button @click="showIndicator">
                  Indicator
                </f7-list-button>
              </f7-list>
            </f7-list-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script type="text/babel">
  export default {
    methods: {
      alert () {
        this.$refs.modal.alert('Alert.', 'Hello')
      },
      confirm () {
        const { modal } = this.$refs
        modal.confirm('Hello Confirm.', 'Custom title').then(ok => modal.alert(`You clicked ${ok ? '"ok"' : '"no"'}`))
      },
      prompt () {
        const { modal } = this.$refs
        modal.prompt('Hello Prompt.', 'Custom title').then(value => value !== null ? modal.alert(`You typed "${value}"`) : modal.alert('You canceled.'))
      },
      showPreloader () {
        const { modal } = this.$refs
        modal.showPreloader('Hey, wait...')
        setTimeout(modal.hidePreloader, 2000)
      },
      showIndicator () {
        const { modal } = this.$refs
        modal.showIndicator()
        setTimeout(modal.hideIndicator, 2000)
      }
    }
  }
</script>
