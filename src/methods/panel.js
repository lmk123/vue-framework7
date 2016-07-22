// https://github.com/nolimits4web/Framework7/blob/master/src/js/panels.js#L5

import f7 from '../f7'
import ote from '../utils/one-transition-end'

let initOverLay = function () {
  let o = document.querySelector('.panel-overlay')
  if (!o) {
    o = document.createElement('div')
    o.classList.add('panel-overlay')
    document.body.appendChild(o)
  }
  o.addEventListener('click', f7.closePanel)
  initOverLay = function () {}
}

/**
 * 获取一个 panel 的动画效果
 * @param {HTMLElement} panel
 * @returns {String}
 */
function getPanelEffect (panel) {
  if (panel.classList.contains('panel-reveal')) {
    return 'reveal'
  }
  return 'cover'
}

/**
 * 判断一个 panel 在哪边
 * @param {HTMLElement} panel
 * @returns {String}
 */
function getPanelTarget (panel) {
  if (panel.classList.contains('panel-left')) {
    return 'left'
  }
  return 'right'
}

/**
 * 打开一个 panel
 * @param {String} target - 'left' 或 'right'
 */
f7.openPanel = function (target) {
  initOverLay()
  f7.closePanel()
  const panel = document.querySelector(`.panel-${target}`)
  if (!panel) return
  panel.classList.add('active')
  panel.style.display = 'block'
  // Trigger reLayout: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  // 不这么做的话, 偶尔不会触发动画效果
  const { clientLeft } = panel // eslint-disable-line
  document.body.classList.add(`with-panel-${target}-${getPanelEffect(panel)}`)
}

/**
 * 关闭打开的那个 panel
 */
f7.closePanel = function () {
  const panel = document.querySelector('.panel.active')
  if (!panel) return
  panel.classList.remove('active')
  document.body.classList.remove(`with-panel-${getPanelTarget(panel)}-${getPanelEffect(panel)}`)
  document.body.classList.add('panel-closing')
  ote(document.body, function () {
    document.body.classList.remove('panel-closing')
    panel.style.display = ''
  })
}
