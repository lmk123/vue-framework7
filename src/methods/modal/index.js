import Vue from 'vue'
import Modal from './_modal.vue'
import noop from '../../utils/noop'
import {
  ALERT,
  CONFIRM,
  PROMPT,
  LOGIN,
  PASSWORD,
  PRELOADER,
  CUSTOM
} from './constants'
import createOl from '../../utils/create-overlay'

let modalVm

let init = function () {
  init = noop
  modalVm = new (Vue.extend(Modal))()
  modalVm.$mount()
  document.body.appendChild(modalVm.$el)
}

function showModal () {
  createOl('modal').show(true)
  modalVm.isShow = true
  modalVm.$nextTick(() => {
    const { modalEl } = modalVm.$refs
    if (!modalEl) return
    modalVm.marginTop = '-' + (modalEl.clientHeight / 2) + 'px'
  })
}

function hideModal () {
  createOl('modal').hide(true)
  modalVm.isShow = false
}

/**
 * 弹出一个警告框
 * @param {string} text
 * @param {string} [title]
 * @return {Promise}
 */
export function alert (text, title = 'Notice') {
  init()
  modalVm.type = ALERT
  modalVm.text = text
  modalVm.title = title
  showModal()
  return new Promise(resolve => {
    modalVm.$once(ALERT, () => {
      hideModal()
      modalVm.$nextTick(resolve)
    })
  })
}

/**
 * 弹出一个确认框
 * @param {string} text
 * @param {string} [title]
 * @return {Promise}
 */
export function confirm (text, title = 'Confirm') {
  init()
  modalVm.type = CONFIRM
  modalVm.text = text
  modalVm.title = title
  showModal()
  return new Promise((resolve, reject) => {
    modalVm.$once(CONFIRM, ok => {
      hideModal()
      modalVm.$nextTick(() => {
        if (ok) {
          resolve()
        } else {
          reject()
        }
      })
    })
  })
}

/**
 * 弹出一个 Prompt 框
 * @param {String} text
 * @param {String} [title]
 * @return {Promise}
 */
export function prompt (text, title = 'Prompt') {
  init()
  modalVm.type = PROMPT
  modalVm.text = text
  modalVm.title = title
  modalVm.promptValue = ''
  showModal()
  return new Promise((resolve, reject) => {
    modalVm.$once(PROMPT, ok => {
      hideModal()
      modalVm.$nextTick(() => {
        const v = modalVm.promptValue
        if (ok) {
          resolve(v)
        } else {
          reject(v)
        }
      })
    })
  })
}

/**
 * 显示登录框
 * @param {string} text
 * @param {string} [title]
 * @returns {Promise}
 */
export function modalLogin (text, title = 'Login') {
  init()
  modalVm.type = LOGIN
  modalVm.text = text
  modalVm.title = title
  modalVm.username = modalVm.password = ''
  showModal()
  return new Promise((resolve, reject) => {
    modalVm.$once(LOGIN, ok => {
      hideModal()
      modalVm.$nextTick(() => {
        const v = {
          username: modalVm.username,
          password: modalVm.password
        }
        if (ok) {
          resolve(v)
        } else {
          reject(v)
        }
      })
    })
  })
}

/**
 * 显示密码框
 * @param {string} text
 * @param {string} title
 * @return {Promise}
 */
export function modalPassword (text, title = 'Password') {
  init()
  modalVm.type = PASSWORD
  modalVm.text = text
  modalVm.title = title
  modalVm.password = ''
  showModal()
  return new Promise((resolve, reject) => {
    modalVm.$once(PASSWORD, ok => {
      hideModal()
      modalVm.$nextTick(() => {
        const v = modalVm.password
        if (ok) {
          resolve(v)
        } else {
          reject(v)
        }
      })
    })
  })
}

/**
 * 弹出一个加载中遮罩层
 * @param {string} [title]
 */
export function showPreloader (title = 'Loading') {
  init()
  modalVm.type = PRELOADER
  modalVm.title = title
  showModal()
}

export function hidePreloader () {
  if (modalVm) {
    hideModal()
  }
}

/**
 * 显示自定义的 modal
 * @param parameters
 * @param {string} parameters.text
 * @param {string} parameters.title
 * @param {{ text: string, bold: boolean, close: boolean }[]} parameters.buttons
 * @param {boolean} parameters.verticalButtons
 */
export function modal (parameters) {
  init()
  modalVm.type = CUSTOM
  modalVm.text = parameters.text || ''
  modalVm.title = parameters.title || ''
  modalVm.buttons = parameters.buttons || []
  modalVm.vertical = parameters.verticalButtons
  showModal()
  return new Promise(resolve => {
    modalVm.$once(CUSTOM, (index, btn) => {
      if (btn.close !== false) {
        hideModal()
      }
      modalVm.$nextTick(() => resolve(index))
    })
  })
}
