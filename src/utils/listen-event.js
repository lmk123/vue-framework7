/**
 * 监听事件
 * @param {EventTarget} element
 * @param {string} eventName
 * @param {function} handler
 * @param {boolean} [useCapture]
 * @return {function} - 调用这个函数能取消事件监听
 */
export default function (element, eventName, handler, useCapture) {
  element.addEventListener(eventName, handler, useCapture)
  return function () {
    element.removeEventListener(eventName, handler, useCapture)
  }
}
