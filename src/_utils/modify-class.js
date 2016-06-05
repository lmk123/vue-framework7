const { concat } = Array.prototype

/**
 * 批量操作一个元素的 classList
 * @param {Element} el
 * @param {String|String[]} classArray
 * @param {String} [operation="add"] - add 或者 remove
 */
export default function (el, classArray, operation = 'add') {
  el.classList[operation](...concat.call([], classArray))
}
