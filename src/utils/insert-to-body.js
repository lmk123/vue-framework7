/**
 * 将元素插入到 body 元素下面
 * @param {Element} node
 * @return {function} - 调用这个函数可以删除 node
 */
export default function (node) {
  document.body.appendChild(node)
  return function () {
    document.body.removeChild(node)
  }
}
