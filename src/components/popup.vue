<template>
  <div v-el:a class="popup-overlay" :class="{ 'modal-overlay-visible': isShow }" @click="hide"></div>
  <div v-el:b class="popup" v-if="isShow" transition="modal">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import m from '../mixins/modal'
  import i from '../mixins/insert-to-body'
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
    mixins: [m, i],
    created () {
      allPopups[this.name] = this
    },
    beforeDestroy () {
      delete allPopups[this.name]
    }
  }
</script>
