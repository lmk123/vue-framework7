# vue-framework7

[![NPM Version](https://img.shields.io/npm/v/vue-framework7.svg?style=flat-square)](https://www.npmjs.com/package/vue-framework7)
[![dependencies Status](https://img.shields.io/david/lmk123/vue-framework7.svg?style=flat-square)](https://david-dm.org/lmk123/vue-framework7)
[![devDependencies Status](https://img.shields.io/david/dev/lmk123/vue-framework7.svg?style=flat-square)](https://david-dm.org/lmk123/vue-framework7#info=devDependencies)

[Framework7](http://framework7.io/) components built with [Vue.js](http://vuejs.org/).

## Install

### Including scripts

```html
<html>
<head>
  <link rel="stylesheet" href="https://npmcdn.com/framework7/dist/css/framework7.ios.min.css">
</head>
<body>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-page-content>Hello F7.</f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
  <!-- including scripts before "</body>" -->
  <script src="https://npmcdn.com/vue/dist/vue.min.js"></script>
  <script src="https://npmcdn.com/vue-framework7/f7.js"></script>
  <script>
    new Vue({
      el: 'body',
      replace: false
    })
  </script>
</body>
</html>
```

### With Webpack

Install `vue-framework7`:

```
npm i vue-framework7
```

Then:

```js
import 'framework7/dist/css/framework7.ios.min.css'
import Vue from 'vue'
import F7 from 'vue-framework7'
Vue.use(F7)
```

## TODO & Demo

### NAVBARS & TOOLBARS

 - [x] [Layout types](http://framework7.io/docs/navbar-toolbar-layouts.html)
 - [x] [Navbar](http://framework7.io/docs/navbar.html) ([Demo](http://f7.limingkai.cn/#!/navbar))
 - [ ] [Dynamic Navbar](http://framework7.io/docs/dynamic-navbar.html)
 - [x] [Sub Navbar](http://framework7.io/docs/sub-navbar.html) ([Demo](http://f7.limingkai.cn/#!/navbar))
 - [x] [Toolbar](http://framework7.io/docs/toolbar.html) ([Demo](http://f7.limingkai.cn/#!/toolbar))
 - [x] [Tab Bar](http://framework7.io/docs/tabbar.html) ([Demo](http://f7.limingkai.cn/#!/tabbar))
 - [ ] [Hide Bars On Scroll](http://framework7.io/docs/hide-bars-on-scroll.html)
 - [x] [Search Bar](http://framework7.io/docs/searchbar.html) ([Demo](http://f7.limingkai.cn/#!/searchbar))
 - [ ] [Status Bar overlay](http://framework7.io/docs/status-bar.html)
 - [x] [Side Panels](http://framework7.io/docs/side-panels.html) ([Demo](http://f7.limingkai.cn/#!/side))
 - [x] [Content Block](http://framework7.io/docs/content-block.html) ([Demo](http://f7.limingkai.cn/#!/content-block))
 - [x] [Layout Grid](http://framework7.io/docs/grid.html) ([Demo](http://f7.limingkai.cn/#!/grid))

### OVERLAYS

 - [x] [Modal](http://framework7.io/docs/modal.html) ([Demo](http://f7.limingkai.cn/#!/modal))
 - [x] [Popup](http://framework7.io/docs/popup.html) ([Demo](http://f7.limingkai.cn/#!/popup))
 - [ ] [Popover](http://framework7.io/docs/popover.html)
 - [x] [Action Sheet](http://framework7.io/docs/action-sheet.html) ([Demo](http://f7.limingkai.cn/#!/actions))
 - [x] [Login Screen](http://framework7.io/docs/login-screen.html) ([Demo](http://f7.limingkai.cn/#!/login))
 - [x] [Picker Modal](http://framework7.io/docs/picker-modal.html) ([Demo](http://f7.limingkai.cn/#!/picker-modal))
 - [x] [Preloader Indicator](http://framework7.io/docs/preloader.html) ([Demo](http://f7.limingkai.cn/#!/preloader))
 - [x] [Progress Bar](http://framework7.io/docs/progressbar.html) ([Demo](http://f7.limingkai.cn/#!/progressbar))

### LIST VIEW (TABLE VIEW)

 - [x] [List View](http://framework7.io/docs/list-view.html) ([Demo](http://f7.limingkai.cn/#!/list))
 - [ ] [Contacts List](http://framework7.io/docs/contacts-list.html)
 - [x] [Media List View](http://framework7.io/docs/media-list-view.html) ([Demo](http://f7.limingkai.cn/#!/media-list))
 - [ ] [Swipeout](http://framework7.io/docs/swipeout.html)
 - [ ] [Sortable List](http://framework7.io/docs/sortable-list.html)
 - [ ] [Virtual List](http://framework7.io/docs/virtual-list.html)
 - [ ] [Accordion / Collapsible](http://framework7.io/docs/accordion.html)
 - [x] [Cards](http://framework7.io/docs/cards.html) ([Demo](http://f7.limingkai.cn/#!/cards))
 - [ ] [Chips](http://framework7.io/docs/chips.html)
 - [x] [Buttons](http://framework7.io/docs/buttons.html) ([Demo](http://f7.limingkai.cn/#!/buttons))
 - [ ] [Floating Action Button](http://framework7.io/docs/floating-action-button.html)

### FORMS

 - [x] [Form Elements](http://framework7.io/docs/form-elements.html) ([Demo](http://f7.limingkai.cn/#!/form))
 - [x] [Checkboxes and Radios](http://framework7.io/docs/checkboxes-radios.html) ([Demo](http://f7.limingkai.cn/#!/form))
 - [ ] [Smart Select](http://framework7.io/docs/smart-select.html)
 - [x] [Disabled Elements](http://framework7.io/docs/disabled-elements.html) ([Demo](http://f7.limingkai.cn/#!/form))
 - [ ] ~~Form Data~~
 - [ ] ~~Form Storage~~
 - [ ] ~~Ajax Form Submit~~
 - [ ] [Tabs](http://framework7.io/docs/tabs.html)
 - [ ] [Swiper Slider](http://framework7.io/docs/swiper.html)
 - [ ] [Photo Browser](http://framework7.io/docs/photo-browser.html)
 - [ ] [Autocomplete](http://framework7.io/docs/autocomplete.html)
 - [ ] [Picker](http://framework7.io/docs/picker.html)
 - [ ] [Calendar / Datepicker](http://framework7.io/docs/calendar.html)
 - [ ] [Pull to Refresh](http://framework7.io/docs/pull-to-refresh.html)
 - [ ] [Infinite Scroll](http://framework7.io/docs/infinite-scroll.html)
 - [ ] [Messages](http://framework7.io/docs/messages.html)
 - [ ] [Message Bar](http://framework7.io/docs/messagebar.html)
 - [ ] [Notifications](http://framework7.io/docs/notifications.html)
 - [ ] [Lazy Load](http://framework7.io/docs/lazy-load.html)

# License

MIT
