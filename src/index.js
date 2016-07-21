import f7 from './f7'

import './methods/navbar'
import './methods/toolbar'
import './methods/panel'
import initModal from './methods/modal'
import initActionSheet from './methods/actions'

import SearchBar from './components/searchbar.vue'
import Popup from './components/popup.vue'

function install (Vue) {
  Vue.prototype.$f7 = f7

  initModal(Vue)
  initActionSheet(Vue)

  regComponent(SearchBar)
  regComponent(Popup)

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
