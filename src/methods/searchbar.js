import { get } from '../vm-store'

export default function (name) {
  return get('f7-searchbar', name)
}
