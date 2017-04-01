<template>
  <div>
    <div class="popup-overlay" :class="{ 'modal-overlay-visible': isShow }" @click="hide"></div>
    <div class="popup" v-show="isShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import modalMixin from '../mixins/modal'
  import insertToBody from '../utils/insert-to-body'
  import f7 from '../f7'

  const allPopups = {}

  /**
   * 显示一个 popup
   * @param {String} name - 此 popup 的名字
   */
  f7.popup = function (name) {
    const p = allPopups[name]
    if (!p) return
    p.show()
  }

  /**
   * 隐藏一个 popup
   * @param {String} name
   */
  f7.closePopup = function (name) {
    const p = allPopups[name]
    if (!p) return
    p.hide()
  }

  export default {
    name: 'f7-popup',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    mixins: [modalMixin],
    created () {
      allPopups[this.name] = this
    },
    mounted () {
      this._removeInsert = insertToBody(this.$el, true)
    },
    beforeDestroy () {
      delete allPopups[this.name]
      this._removeInsert()
    }
  }
</script>
