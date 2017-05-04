import nextFrame from './next-frame'
import noop from './noop'
import cmb from './create-empty-obj'

const DEFAULT_VISIBLE_CLASS = 'modal-overlay-visible'

const VISBLE_CLASS = {
  searchbar: 'searchbar-overlay-active'
}

class Overlay {
  constructor (name, appendTo = document.body) {
    this.name = name
    this.visibleClass = VISBLE_CLASS[name] || DEFAULT_VISIBLE_CLASS
    this.parent = appendTo
    this.node = null
    this.events = cmb()
  }

  _init (inHide) {
    this._init = noop

    const node = document.createElement('div')
    node.classList.add(this.name + '-overlay')
    if (inHide) {
      node.classList.add(this.visibleClass)
    }

    const { events } = this
    for (let name in events) {
      events[name].forEach(handler => {
        node.addEventListener(name, handler)
      })
    }

    this.parent.appendChild(node)
    this.node = node
  }

  on (name, handler) {
    const { events } = this
    const eventArr = events[name] || (events[name] = [])
    eventArr.push(handler)
    if (this.node) {
      this.node.addEventListener(name, handler)
    }
  }

  off (name, handler) {
    const { events } = this
    const eventArr = events[name]
    if (Array.isArray(eventArr)) {
      const i = eventArr.indexOf(handler)
      if (i >= 0) {
        eventArr.splice(i, 1)
        if (!eventArr.length) {
          delete events[name]
        }
      }
    }

    if (this.node) {
      this.node.removeEventListener(name, handler)
    }
  }

  show (useAnimation = true) {
    this._init()
    if (this.name === 'preloader-indicator') {
      this.node.style.display = ''
    }
    this.node.classList[useAnimation ? 'remove' : 'add']('not-animated')
    nextFrame(() => {
      this.node.classList.add(this.visibleClass)
    })
  }

  hide (useAnimation = true) {
    if (!useAnimation && !this.node) return
    this._init(true)
    this.node.classList[useAnimation ? 'remove' : 'add']('not-animated')
    nextFrame(() => {
      this.node.classList.remove(this.visibleClass)
      if (this.name === 'preloader-indicator') {
        this.node.style.display = 'none'
      }
    })
  }

  destroy () {
    delete instances[this.name]
    const { events, node } = this
    if (node) {
      for (let name in events) {
        events[name].forEach(handler => {
          node.removeEventListener(name, handler)
        })
      }
    }
  }
}

const instances = {}

export default function (name, appendTo) {
  return instances[name] || (instances[name] = new Overlay(name, appendTo))
}
