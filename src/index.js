import Page from './components/page.vue'
import Navbar from './components/navbar.vue'
import Toolbar from './components/toolbar.vue'
import Popup from './components/popup.vue'
import PageAnimation from './components/page-animation.vue'
import SearchBar from './components/searchbar.vue'

export * from './methods/indicator'
export * from './methods/navbar'
export * from './methods/popup'
import searchbar from './methods/searchbar'
export * from './methods/toolbar'
export * from './methods/modal'

export {
  Page,
  Navbar,
  Toolbar,
  Popup,
  PageAnimation,
  SearchBar
}

export function install (Vue) {
  [
    Page,
    Navbar,
    Toolbar,
    Popup,
    PageAnimation,
    SearchBar
  ].forEach(cpt => {
    Vue.component(cpt.name, cpt)
  })
}

export {
  searchbar
}
