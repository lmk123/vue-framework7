import noop from '../utils/noop'

const CLASS_NAME = 'modal-overlay-visible'

let node

const onInitFunctions = []

let init = function () {
  init = noop
  node = document.createElement('div')
  node.classList.add('modal-overlay')
  onInitFunctions.forEach(function (func) {
    func(node)
  })
}

function show () {
  init()
  node.classList.add(CLASS_NAME)
}

function hide () {
  if (!node) return
  node.classList.remove(CLASS_NAME)
}

export function onInit (func) {
  if (node) {
    func(node)
  } else {
    onInitFunctions.push(func)
  }
}

export function setShow (isShow) {
  if (isShow) {
    show()
  } else {
    hide()
  }
}
