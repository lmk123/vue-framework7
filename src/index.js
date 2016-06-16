import f7Textarea from './form/textarea'

import Modal from './modal.vue'

import ContentBlock from './content-block/content-block.vue'
import ContentBlockTitle from './content-block/content-block-title.vue'

import Views from './views.vue'
import View from './view.vue'
import Pages from './pages.vue'
import Page from './page.vue'
import PageContent from './page-content.vue'

import Navbar from './navbar.vue'

import Toolbar from './toolbar/toolbar.vue'
import ToolbarItem from './toolbar/toolbar-item.vue'

import Tabbar from './tabbar/tabbar.vue'
import TabbarItem from './tabbar/tabbar-item.vue'
import TabbarLabel from './tabbar/tabbar-label.vue'

import Badge from './badge.vue'
import Icon from './icon.vue'

import Searchbar from './searchbar.vue'

import Side from './side.vue'

import Row from './grid/row.vue'
import Col from './grid/col.vue'

import Popup from './popup.vue'

import List from './list/list.vue'
import ListBlock from './list/list-block.vue'
import ListItem from './list/list-item.vue'
import ListItemAfter from './list/list-item-after.vue'
import ListItemInner from './list/list-item-inner.vue'
import ListItemInput from './list/list-item-input.vue'
import ListItemTitle from './list/list-item-title.vue'
import ListGroup from './list/list-group.vue'
import ListGroupTitle from './list/list-group-title.vue'
import ListDivider from './list/list-divider.vue'
import ListLabel from './list/list-label.vue'

import ListItemMedia from './list/list-item-media.vue'
import ListItemSubtitle from './media-list/list-item-subtitle.vue'
import ListItemText from './media-list/list-item-text.vue'
import ListItemTitleRow from './media-list/list-item-title-row.vue'

import Checkbox from './form/form-switch.vue'
import CheckboxGroup from './form/checkbox-group.vue'
import Range from './form/form-slider.vue'
import RadiosGroup from './form/radios-group.vue'

import Button from './buttons/button.vue'
import ButtonsRow from './buttons/buttons-row.vue'
import ListButton from './buttons/list-button.vue'

import Actions from './action-sheet/actions.vue'
import ActionButton from './action-sheet/action-button.vue'
import ActionsGroup from './action-sheet/actions-group.vue'

import PickerModal from './picker-modal/picker.vue'
import PickerModalInner from './picker-modal/picker-inner.vue'

import Preloader from './preloader.vue'

import Login from './login.vue'

import ProgressBar from './progress.vue'

import Card from './cards/card.vue'
import CardHeader from './cards/card-header.vue'
import CardFooter from './cards/card-footer.vue'
import CardContent from './cards/card-content.vue'
import CardContentInner from './cards/card-content-inner.vue'

function install (Vue) {
  function installComponent (component) {
    Vue.component(component.name, component)
  }

  installComponent(Modal)

  installComponent(ContentBlock)
  installComponent(ContentBlockTitle)

  installComponent(Views)
  installComponent(View)
  installComponent(Pages)
  installComponent(Page)
  installComponent(PageContent)

  installComponent(Navbar)

  installComponent(Toolbar)
  installComponent(ToolbarItem)

  installComponent(Tabbar)
  installComponent(TabbarItem)
  installComponent(TabbarLabel)

  installComponent(Badge)
  installComponent(Icon)

  installComponent(Searchbar)

  installComponent(Side)

  installComponent(Row)
  installComponent(Col)

  installComponent(Popup)

  installComponent(List)
  installComponent(ListBlock)
  installComponent(ListGroup)
  installComponent(ListGroupTitle)
  installComponent(ListLabel)
  installComponent(ListItem)
  installComponent(ListDivider)
  installComponent(ListItemAfter)
  installComponent(ListItemInner)
  installComponent(ListItemInput)
  installComponent(ListItemTitle)

  installComponent(ListItemMedia)
  installComponent(ListItemSubtitle)
  installComponent(ListItemText)
  installComponent(ListItemTitleRow)

  installComponent(Checkbox)
  installComponent(Range)
  installComponent(CheckboxGroup)
  installComponent(RadiosGroup)
  Vue.directive('f7-textarea', f7Textarea)

  installComponent(Button)
  installComponent(ButtonsRow)
  installComponent(ListButton)

  installComponent(Actions)
  installComponent(ActionsGroup)
  installComponent(ActionButton)

  installComponent(PickerModal)
  installComponent(PickerModalInner)

  installComponent(Preloader)

  installComponent(Login)

  installComponent(ProgressBar)

  installComponent(Card)
  installComponent(CardFooter)
  installComponent(CardContent)
  installComponent(CardContentInner)
  installComponent(CardHeader)
}

export default install

// auto install
const { Vue } = window
if (Vue) {
  Vue.use(install)
}
