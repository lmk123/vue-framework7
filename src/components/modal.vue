<template>
  <div class="preloader-indicator-overlay" v-show="showIndic"></div>
  <div class="preloader-indicator-modal" v-show="showIndic">
    <span class="preloader preloader-white"></span>
  </div>

  <div class="modal-overlay" :class="{ 'modal-overlay-visible': show }"></div>
  <div class="modal"
       v-el:modal
       :style="{ 'margin-top': marginTop }"
       v-if="show"
       :class="{ 'modal-no-buttons': type === 'preloader', 'modal-preloader': type === 'preloader' }"
       transition="modal">
    <div class="modal-inner">
      <div class="modal-title" v-text="title"></div>
      <div class="modal-text" v-show="type === 'preloader'">
        <div class="preloader"></div>
      </div>
      <div class="modal-text" v-else v-text="text"></div>
      <div class="input-field" v-show="type === 'prompt'">
        <input type="text" class="modal-text-input" v-model="promptValue">
      </div>
      <div class="input-field" v-show="type === 'password'">
        <input type="password" class="modal-text-input" placeholder="Password" v-model="password">
      </div>
      <div class="input-field modal-input-double" v-show="type === 'login'">
        <input type="text"
               placeholder="Username"
               class="modal-text-input"
               v-model="username">
      </div>
      <div class="input-field modal-input-double" v-show="type === 'login'">
        <input type="password"
               name="modal-password"
               placeholder="Password"
               class="modal-text-input"
               v-model="password">
      </div>
    </div>
    <div class="modal-buttons"
         v-show="type !== 'custom'"
         :class="{ 'modal-buttons-1': type === 'alert', 'modal-buttons-2': type === 'confirm' || type === 'prompt' }">
      <span class="modal-button" @click="$emit(type, false)"
            v-show="type === 'confirm' || type === 'prompt' || type === 'login' || type === 'password'">Cancel</span>
      <span class="modal-button modal-button-bold" @click="$emit(type, true)">OK</span>
    </div>

    <div class="modal-buttons"
         :class="['modal-buttons-' + buttons.length, { 'modal-buttons-vertical': vertical }]"
         v-show="type === 'custom'">
      <span class="modal-button"
            v-for="btn in buttons"
            @click="$emit(type, $index, btn)"
            :class="{ 'modal-button-bold': btn.bold }"
            v-text="btn.text">
      </span>
    </div>
  </div>
</template>

<script type="text/babel">
  import modalTransition from '../mixins/modal-transition'
  export default {
    data () {
      return {
        show: false,
        showIndic: false,
        type: null,
        promptValue: '',
        username: '',
        password: '',
        title: '',
        text: '',
        buttons: [],
        vertical: false,
        marginTop: ''
      }
    },
    mixins: [modalTransition],
    methods: {
      _show () {
        this.show = true
        this.$nextTick(() => {
          const { modal } = this.$els
          if (!modal) return
          this.marginTop = '-' + (modal.clientHeight / 2) + 'px'
        })
      },

      /**
       * 弹出一个警告框
       * @param {String} text
       * @param {String} [title]
       * @returns {Promise}
       */
      alert (text, title = 'Framework7') {
        this.type = 'alert'
        this.text = text
        this.title = title
        this._show()
        return new Promise(resolve => {
          this.$once('alert', () => {
            this.show = false
            this.$nextTick(() => resolve())
          })
        })
      },

      /**
       * 弹出一个确认框
       * @param {String} text
       * @param {String} [title]
       * @returns {Promise}
       */
      confirm (text, title = 'Framework7') {
        this.type = 'confirm'
        this.text = text
        this.title = title
        this._show()
        return new Promise(resolve => {
          this.$once('confirm', ok => {
            this.show = false
            this.$nextTick(() => resolve(ok))
          })
        })
      },

      /**
       * 弹出一个 Prompt 框
       * @param {String} text
       * @param {String} [title]
       * @returns {Promise}
       */
      prompt (text, title = 'Framework7') {
        this.type = 'prompt'
        this.text = text
        this.title = title
        this.promptValue = ''
        this._show()
        return new Promise(resolve => {
          this.$once('prompt', ok => {
            this.show = false
            this.$nextTick(() => resolve(ok ? this.promptValue : null))
          })
        })
      },

      /**
       * 显示登录框
       * @param {String} text
       * @param {String} title
       * @returns {Promise}
       */
      modalLogin (text, title = 'Framework7') {
        this.type = 'login'
        this.text = text
        this.title = title
        this.username = this.password = ''
        this._show()
        return new Promise(resolve => {
          this.$once('login', ok => {
            this.show = false
            this.$nextTick(() => resolve(ok ? {
              username: this.username,
              password: this.password
            } : null))
          })
        })
      },

      /**
       * 显示密码框
       * @param {String} text
       * @param {String} title
       * @returns {Promise}
       */
      modalPassword (text, title = 'Framework7') {
        this.type = 'password'
        this.text = text
        this.title = title
        this.password = ''
        this._show()
        return new Promise(resolve => {
          this.$once('password', ok => {
            this.show = false
            this.$nextTick(() => resolve(ok ? this.password : null))
          })
        })
      },

      /**
       * 弹出一个加载中遮罩层
       * @param {String} [title]
       */
      showPreloader (title = 'Loading...') {
        this.type = 'preloader'
        this.title = title
        this._show()
      },

      /**
       * 隐藏加载中遮罩层
       */
      hidePreloader () {
        this.show = false
      },

      /**
       * 弹出一个简单的加载中图标
       */
      showIndicator () {
        this.showIndic = true
      },

      /**
       * 隐藏简单的加载中图标
       */
      hideIndicator () {
        this.showIndic = false
      },

      /**
       * 显示自定义的 modal
       * @param parameters
       */
      modal (parameters) {
        this.type = 'custom'
        this.text = parameters.text || ''
        this.title = parameters.title || ''
        this.buttons = parameters.buttons || []
        this.vertical = parameters.verticalButtons
        this._show()
        return new Promise(resolve => {
          this.$once('custom', (index, btn) => {
            if (btn.close !== false) {
              this.show = false
            }
            this.$nextTick(() => resolve(index))
          })
        })
      }
    }
  }
</script>
