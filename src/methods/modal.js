import f7 from '../f7'
import ModalComponent from '../components/modal.vue'

export default function (Vue) {
  const modal = new (Vue.extend(ModalComponent))()
  modal.$mount().$appendTo('body')

  f7.alert = function (text, title) {
    return modal.alert(text, title)
  }

  f7.confirm = function (text, title) {
    return modal.confirm(text, title)
  }

  f7.prompt = function (text, title) {
    return modal.prompt(text, title)
  }

  f7.modalLogin = function (text, title) {
    return modal.modalLogin(text, title)
  }

  f7.modalPassword = function (text, title) {
    return modal.modalPassword(text, title)
  }

  f7.showPreloader = function (title) {
    return modal.showPreloader(title)
  }

  f7.hidePreloader = function () {
    return modal.hidePreloader()
  }

  f7.showIndicator = function () {
    return modal.showIndicator()
  }

  f7.hideIndicator = function () {
    return modal.hideIndicator()
  }

  f7.modal = function (p) {
    return modal.modal(p)
  }
}
