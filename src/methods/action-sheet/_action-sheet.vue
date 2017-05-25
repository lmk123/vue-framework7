<template>
  <div class="actions-modal">
    <div class="actions-modal-group" v-for="buttons in groups">
      <div v-for="btn in buttons"
           :class="getBtnClass(btn)"
           :style="getBtnStyle(btn)"
           @click="choose(btn)">
        {{ btn.text }}
      </div>
    </div>
  </div>
</template>

<script>
  import co from '../../utils/create-overlay'
  import m from '../../mixins/modal'

  export default {
    data () {
      this._modalName = 'modal'
      return {
        groups: []
      }
    },
    mixins: [m],
    methods: {
      choose (btn) {
        if (btn.label) return
        this.hide()
        if (typeof btn.onClick === 'function') btn.onClick()
        this.$emit('choose', btn)
      },
      cancel () {
        this.hide()
        this.$emit('choose', null)
      },
      getBtnClass (btn) {
        const classes = []
        classes.push(btn.label ? 'actions-modal-label' : 'actions-modal-button')
        if (btn.bold) {
          classes.push('actions-modal-button-bold')
        }
        if (btn.disabled) {
          classes.push('disabled')
        }
        return classes
      },
      getBtnStyle (btn) {
        const { color, bg } = btn
        const style = {}
        if (color) {
          style.color = color
        }
        if (bg) {
          style.backgroundColor = bg
        }
        return style
      }
    },
    created () {
      co(this._modalName).on('click', this.cancel)
    }
  }
</script>
