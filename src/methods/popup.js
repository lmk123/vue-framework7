import { get } from '../vm-store'

export function popup (name, useAnimate) {
  const vm = get('f7-popup', name)
  if (vm) vm.show(useAnimate)
}

export function closePopup (name, useAnimate) {
  const vm = get('f7-popup', name)
  if (vm) vm.hide(useAnimate)
}
