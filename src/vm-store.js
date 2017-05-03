import cmb from './utils/create-empty-obj'

const store = cmb()

export function add (type, name, vm) {
  const types = store[type] || (store[type] = cmb())
  if (types[name]) {
    console.warn(`Already has a ${type} vm named ${name}.`)
    return
  }
  types[name] = vm
}

export function remove (type, name) {
  const types = store[type]
  if (!types) return
  delete types[name]
}

export function get (type, name) {
  const types = store[type]
  if (!types) return
  return types[name] || null
}
