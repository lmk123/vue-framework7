import Page from './components/page.vue'
import Navbar from './components/navbar.vue'
import Toolbar from './components/toolbar.vue'
import Popup from './components/popup.vue'
import PageAnimation from './components/page-animation.vue'
import SearchBar from './components/searchbar.vue'

import { showIndicator, hideIndicator } from './methods/indicator'
import { showNavbar, hideNavbar, sizeNavbar } from './methods/navbar'
import { popup, closePopup } from './methods/popup'
import searchbar from './methods/searchbar'
import { showToolbar, hideToolbar } from './methods/toolbar'

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
  showIndicator,
  hideIndicator,
  showNavbar,
  hideNavbar,
  sizeNavbar,
  popup,
  closePopup,
  searchbar,
  showToolbar,
  hideToolbar
}
