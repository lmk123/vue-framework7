# vue-framework7

[![NPM Version](https://img.shields.io/npm/v/vue-framework7.svg?style=flat-square)](https://www.npmjs.com/package/vue-framework7)
[![dependencies Status](https://img.shields.io/david/lmk123/vue-framework7.svg?style=flat-square)](https://david-dm.org/lmk123/vue-framework7)
[![devDependencies Status](https://img.shields.io/david/dev/lmk123/vue-framework7.svg?style=flat-square)](https://david-dm.org/lmk123/vue-framework7#info=devDependencies)

[Framework7](http://framework7.io/) components built with [Vue.js](http://vuejs.org/).

## Install

### Download scripts

https://npmcdn.com/vue-framework7/f7.min.js

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

You can require only needed components and methods:

> All available methods and components see https://github.com/lmk123/vue-framework7/tree/master/src/index.js

```js
import Vue from 'vue'

import initModal from 'vue-framework7/src/methods/modal'
import SearchBar from 'vue-framework7/src/components/searchbar.vue'
import f7 from 'vue-framework7/src/f7'

Vue.use(function (Vue) {
  Vue.prototype.$f7 = f7
  initModal(Vue)
  Vue.component(SearchBar.name, SearchBar)
})
```

## Usage & Demo

Please see http://f7.limingkai.cn

## License

MIT
