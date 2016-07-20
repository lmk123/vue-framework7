import f7 from './f7'

import './methods/navbar'
import './methods/toolbar'

import Searchbar from './components/searchbar.vue'

function install (Vue) {
  Vue.prototype.$f7 = f7
  regComponent(Searchbar)

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
