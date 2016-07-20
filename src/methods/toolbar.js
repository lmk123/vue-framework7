// API 文档: http://framework7.io/docs/toolbar.html#related-app-and-view-methods
// 源码: https://github.com/nolimits4web/Framework7/blob/master/src/js/navbars.js#L206

import f7 from '../f7'
import oTE from '../utils/one-transition-end'

/**
 * 隐藏 toolbar/tabbar
 * @param toolbar
 */
f7.hideToolbar = function (toolbar = document.querySelector('.toolbar')) {
  toolbar.classList.add('toolbar-hidden')
}

/**
 * 显示 toolbar/tabbar
 * @param toolbar
 */
f7.showToolbar = function (toolbar = document.querySelector('.toolbar')) {
  const { classList } = toolbar
  classList.remove('toolbar-hidden')
  classList.add('toolbar-hiding')
  oTE(toolbar, function () {
    classList.remove('toolbar-hiding')
  })
}
