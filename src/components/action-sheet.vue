<template>
  <div class="actions-modal" v-show="isShow">
    <div class="actions-modal-group" v-for="group in groups">
      <div v-for="btn in group"
           :class="_getClass(btn)"
           :style="btn.color ? { color: btn.color } : {}"
           @click="_choose(btn)"
           v-text="btn.text">
      </div>
    </div>
  </div>
</template>

<script>
  import modalMixin from '../mixins/modal'
  import listenEvent from '../utils/listen-event'
  import * as modalOverlay from '../shared-nodes/modal-overlay'
  import insertToBody from '../utils/insert-to-body'

  export default {
    name: 'f7-actions',
    props: {
      groups: {
        required: true,
        type: Array
      }
    },
    mixins: [modalMixin],
    watch: {
      isShow (isShow) {
        modalOverlay.setShow(isShow)
      }
    },
    methods: {
      _getClass (btn) {
        return {
          'actions-modal-label': btn.label,
          'actions-modal-button': !btn.label,
          'actions-modal-button-bold': btn.bold
        }
      },
      _choose (btn) {
        if (btn.label) return
        this.hide()
        if (typeof btn.onClick === 'function') btn.onClick()
        this.$emit('choose', btn)
      },
      _cancel () {
        this.hide()
        this.$emit('choose', null)
      }
    },
    mounted () {
      modalOverlay.onInit(node => {
        this._unlisten = listenEvent(node, 'click', this._cancel)
      })
      this._removeInsert = insertToBody(this.$el)
    },
    beforeDestroy () {
      if (this._unlisten) {
        this._unlisten()
      }
      this._removeInsert()
    }
  }
</script>
