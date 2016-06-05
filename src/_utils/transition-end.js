/**
 * 当前浏览器的 ontransitionend 事件的名字
 */
let transitionEnd

const { style } = document.createElement('div')
  const transitions = {
    'transition': 'transitionend',
    'OTransition': 'otransitionend',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  }
  for (let key in transitions) {
    if (style[key] !== undefined) {
      transitionEnd = transitions[key]
      break
    }
  }

export default transitionEnd
