import { get } from '../vm-store'

export function showToolbar (name, useAnimate) {
  const vm = get('f7-toolbar', name)
  if (vm) vm.show(useAnimate)
}

export function hideToolbar (name, useAnimate) {
  const vm = get('f7-toolbar', name)
  if (vm) vm.hide(useAnimate)
}
