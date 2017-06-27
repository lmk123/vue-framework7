<template>
  <form class="searchbar searchbar-init"
        @submit.prevent="_submit"
        :class="{ 'searchbar-active': active, 'searchbar-not-empty': value }">
    <div class="searchbar-input">
      <input ref="input"
             type="search"
             :placeholder="placeholder"
             :value="value"
             @input="_updateValue($event.target.value)"
             @focus="enable">
      <a @click.prevent="_clear" class="searchbar-clear"></a>
    </div>
    <a ref="cancel"
       class="searchbar-cancel"
       style="display:block"
       @click.prevent="disable">
      {{ cancelText }}
    </a>
  </form>
</template>

<script>
  import createOverlay from '../utils/create-overlay'
  import vmName from '../mixins/vm-name'

  export default {
    name: 'f7-searchbar',
    mixins: [vmName],
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Search'
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      overlay: {
        default: true
      }
    },
    data () {
      return {
        active: false
      }
    },
    methods: {
      search (query) {
        this._updateValue(query)
        this._submit()
      },
      enable () {
        this.active = true
      },
      disable () {
        this.clear()
        this.active = false
      },
      clear () {
        this._updateValue('')
      },
      _submit () {
        this.$emit('search')
      },
      _size () {
        this.$nextTick(() => {
          const { cancel } = this.$refs
          this.cancelWidth = '-' + cancel.clientWidth + 'px'
          if (!this.active) {
            cancel.style.marginRight = this.cancelWidth
          }
        })
      },
      _updateValue (v) {
        this.$emit('input', v)
      },
      _clear () {
        this.clear()
        this.$refs.input.focus()
      }
    },
    watch: {
      cancelText: '_size',
      active (active) {
        this.$refs.cancel.style.marginRight = active ? '0px' : this.cancelWidth
      }
    },
    mounted () {
      if (this.overlay) {
        // TODO BUG：seachbar 共用 overlay 导致新的 f7-searchbar 没有 overlay
        const overlay = this.lay = createOverlay('searchbar', this.$el.parentElement)
        overlay.on('click', () => {
          this.active = false
        })
        this.$watch(() => this.active && !this.value, isShow => {
          overlay[isShow ? 'show' : 'hide']()
        })
      }
      this._size()
    },
    beforeDestroy () {
      this.lay && this.lay.destroy()
    }
  }
</script>
