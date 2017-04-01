/**
 * @files 因为 Vue2 的组件有且只能有一个根节点，为了突破这个限制所以写了这个方法
 */

const { slice } = Array.prototype

/**
 * 将一个元素的所有子节点提升到跟此元素平级的地方
 * @param {Element} node
 * @param {Element} [parent]
 * @return {function} - 调用方法可以删除所有移动过的节点
 */
export default function (node, parent = node.parentElement) {
  const childs = slice.call(node.children)
  const fragment = document.createDocumentFragment()
  childs.forEach(function (child) {
    fragment.appendChild(child)
  })

  parent.insertBefore(fragment, node)

  return function () {
    childs.forEach(function (child) {
      try {
        parent.removeChild(child)
      } catch (e) {}
    })
  }
}
