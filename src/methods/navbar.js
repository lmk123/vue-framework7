import { get } from '../vm-store'

export function showNavbar (name, useAnimate) {
  const vm = get('f7-navbar', name)
  if (vm) vm.show(useAnimate)
}

export function hideNavbar (name, useAnimate) {
  const vm = get('f7-navbar', name)
  if (vm) vm.hide(useAnimate)
}

export function sizeNavbar (name) {
  const vm = get('f7-navbar', name)
  if (vm) vm.size()
}
