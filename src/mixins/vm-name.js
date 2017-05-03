import { add, remove } from '../vm-store'

export default {
  props: ['name'],
  created () {
    const vmName = this.name
    if (vmName) {
      add(this.$options.name, vmName, this)
      this.vmName = vmName
    }
  },
  beforeDestroy () {
    const vmName = this.vmName
    if (vmName) {
      remove(this.$options.name, vmName)
    }
  }
}
