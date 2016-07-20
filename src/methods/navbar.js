// API 文档: http://framework7.io/docs/navbar.html#related-app-and-view-methods
// 源码: https://github.com/nolimits4web/Framework7/blob/master/src/js/navbars.js#L195

import f7 from '../f7'
import oneTE from '../utils/one-transition-end'

/**
 * 隐藏导航栏
 * @param {HTMLElement} [navbar]
 */
f7.hideNavbar = function (navbar = document.querySelector('.navbar')) {
  navbar.classList.add('navbar-hidden')
}

/**
 * 显示导航栏
 * @param {HTMLElement} [navbar]
 */
f7.showNavbar = function (navbar = document.querySelector('.navbar')) {
  const { classList } = navbar
  classList.remove('navbar-hidden')
  classList.add('navbar-hiding')
  oneTE(navbar, function () {
    classList.remove('navbar-hiding')
  })
}
