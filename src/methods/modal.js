import f7 from '../f7'
import ModalComponent from '../components/modal.vue'
import noop from '../utils/noop'

export default function (Vue) {

  const Modal = Vue.extend(ModalComponent)

  let modal

  let init = function () {
    init = noop
    modal = new Modal()
  }

  f7.alert = function (text, title) {
    init()
    return modal.alert(text, title)
  }

  f7.confirm = function (text, title) {
    init()
    return modal.confirm(text, title)
  }

  f7.prompt = function (text, title) {
    init()
    return modal.prompt(text, title)
  }

  f7.modalLogin = function (text, title) {
    init()
    return modal.modalLogin(text, title)
  }

  f7.modalPassword = function (text, title) {
    init()
    return modal.modalPassword(text, title)
  }

  f7.showPreloader = function (title) {
    init()
    return modal.showPreloader(title)
  }

  f7.hidePreloader = function () {
    if (!modal) return
    return modal.hidePreloader()
  }

  f7.showIndicator = function () {
    init()
    return modal.showIndicator()
  }

  f7.hideIndicator = function () {
    if (!modal) return
    return modal.hideIndicator()
  }

  f7.modal = function (p) {
    init()
    return modal.modal(p)
  }
}
