<template>
  <div class="picker-modal" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
  import modalMixin from '../mixins/modal'
  //  import clone from '../utils/simple-clone'
  import insertToBody from '../utils/insert-to-body'
  import f7 from '../f7'

  // picker modal 的 transition 需要加一些步骤,
  // 这里用打补丁的方式加上步骤, 为了不修改原有对象, 所以 clone 一遍
  //  const clonedModalMixin = clone(modalMixin)
  //  const originalModalTransition = modalMixin.mixins[0].transitions.modal
  //  const clonedModalTransition = clonedModalMixin.mixins[0].transitions.modal
  //
  //  clonedModalTransition.enter = function (el, done) {
  //    document.body.classList.add('with-picker-modal')
  //    originalModalTransition.enter(el, done)
  //  }
  //
  //  clonedModalTransition.beforeLeave = function (el) {
  //    document.body.classList.remove('with-picker-modal')
  //    originalModalTransition.beforeLeave(el)
  //  }
  //
  //  clonedModalTransition.leave = function (el, done) {
  //    document.body.classList.add('picker-modal-closing')
  //    originalModalTransition.leave(el, done)
  //  }
  //
  //  clonedModalTransition.afterLeave = function (el) {
  //    document.body.classList.remove('picker-modal-closing')
  //    originalModalTransition.afterLeave(el)
  //  }

  const allPickerModal = {}

  /**
   * 显示一个 picker
   * @param {string} name
   */
  f7.pickerModal = function (name) {
    const p = allPickerModal[name]
    if (!p) return
    p.show()
  }

  /**
   * 隐藏一个 picker
   * @param {string} name
   */
  f7.closePickerModal = function (name) {
    const p = allPickerModal[name]
    if (!p) return
    p.hide()
  }

  export default {
    name: 'f7-picker-modal',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    mixin: [modalMixin],
    created () {
      allPickerModal[this.name] = this
    },
    mounted () {
      this._removeInsert = insertToBody(this.$el)
    },
    beforeDestroy () {
      this._removeInsert()
      delete allPickerModal[this.name]
    }
  }
</script>
