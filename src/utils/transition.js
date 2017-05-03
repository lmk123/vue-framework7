let transitionProp
let transitionEndEvent
let animationProp
let animationEndEvent

if ('ontransitionend' in window) {
  transitionProp = 'transition'
  transitionEndEvent = 'transitionend'
} else {
  transitionProp = 'WebkitTransition'
  transitionEndEvent = 'webkitTransitionEnd'
}

if ('onanimationend' in window) {
  animationProp = 'animation'
  animationEndEvent = 'animationend'
} else {
  animationProp = 'WebkitAnimation'
  animationEndEvent = 'webkitAnimationEnd'
}

/**
 * 只执行一次过渡结束的事件
 * @param {Element} el
 * @param {function} handler
 */
function oneTransitionEnd (el, handler) {
  el.addEventListener(transitionEndEvent, function h (e) {
    handler.call(el, e)
    el.removeEventListener(transitionEndEvent, h)
  })
}

/**
 * 只执行一次动画结束的事件
 * @param {Element} el
 * @param {function} handler
 */
function oneAnimationEnd (el, handler) {
  el.addEventListener(animationEndEvent, function h (e) {
    handler.call(el, e)
    el.removeEventListener(animationEndEvent, h)
  })
}

export {
  transitionProp,
  oneTransitionEnd,
  animationProp,
  oneAnimationEnd
}
