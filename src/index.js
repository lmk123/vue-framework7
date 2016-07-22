import f7 from './f7'

import './methods/navbar'
import './methods/toolbar'
import './methods/panel'
import initModal from './methods/modal'
import initActionSheet from './methods/actions'
import './methods/login'

import SearchBar from './components/searchbar.vue'
import Popup from './components/popup.vue'
import PickerModal from './components/picker-modal.vue'

function install (Vue) {
  Vue.prototype.$f7 = f7

  initModal(Vue)
  initActionSheet(Vue)

  regComponent(SearchBar)
  regComponent(Popup)
  regComponent(PickerModal)

  function regComponent (component) {
    Vue.component(component.name, component)
  }
}

export default install

// auto install
const { Vue } = window
if (Vue) {
  Vue.use(install)
}
