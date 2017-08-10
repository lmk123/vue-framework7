import noop from './noop'

let style

let init = function () {
  init = noop
  style = document.createElement('style')
  document.head.appendChild(style)
}

export default function (text) {
  init()
  style.innerText += text
}
