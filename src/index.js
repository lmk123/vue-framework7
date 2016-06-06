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
import ListGroup from './list/list-group.vue'
import ListGroupTitle from './list/list-group-title.vue'
import ListDivider from './list/list-divider.vue'
import ListLabel from './list/list-label.vue'

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

function install (Vue) {
  Vue.component(Modal.name, Modal)

  Vue.component(ContentBlock.name, ContentBlock)
  Vue.component(ContentBlockTitle.name, ContentBlockTitle)

  Vue.component(Views.name, Views)
  Vue.component(View.name, View)
  Vue.component(Pages.name, Pages)
  Vue.component(Page.name, Page)
  Vue.component(PageContent.name, PageContent)

  Vue.component(Navbar.name, Navbar)

  Vue.component(Toolbar.name, Toolbar)
  Vue.component(ToolbarItem.name, ToolbarItem)

  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabbarItem.name, TabbarItem)
  Vue.component(TabbarLabel.name, TabbarLabel)

  Vue.component(Badge.name, Badge)
  Vue.component(Icon.name, Icon)

  Vue.component(Searchbar.name, Searchbar)

  Vue.component(Side.name, Side)

  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)

  Vue.component(Popup.name, Popup)

  Vue.component(List.name, List)
  Vue.component(ListBlock.name, ListBlock)
  Vue.component(ListGroup.name, ListGroup)
  Vue.component(ListGroupTitle.name, ListGroupTitle)
  Vue.component(ListLabel.name, ListLabel)
  Vue.component(ListItem.name, ListItem)
  Vue.component(ListDivider.name, ListDivider)

  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Range.name, Range)
  Vue.component(CheckboxGroup.name, CheckboxGroup)
  Vue.component(RadiosGroup.name, RadiosGroup)
  Vue.directive('f7-textarea', f7Textarea)

  Vue.component(Button.name, Button)
  Vue.component(ButtonsRow.name, ButtonsRow)
  Vue.component(ListButton.name, ListButton)

  Vue.component(Actions.name, Actions)
  Vue.component(ActionsGroup.name, ActionsGroup)
  Vue.component(ActionButton.name, ActionButton)

  Vue.component(PickerModal.name, PickerModal)
  Vue.component(PickerModalInner.name, PickerModalInner)

  Vue.component(Preloader.name, Preloader)

  Vue.component(Login.name, Login)

  Vue.component(ProgressBar.name, ProgressBar)
}

export default install

// auto install
const { Vue } = window
if (Vue) {
  Vue.use(install)
}
