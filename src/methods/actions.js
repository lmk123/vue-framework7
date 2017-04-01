import f7 from '../f7'
import ActionSheet from '../components/action-sheet.vue'

export default function (Vue) {
  const AS = Vue.extend(ActionSheet)

  let asVm

  f7.actions = function (groups) {
    groups = [].concat(groups)

    if (!asVm) {
      asVm = new AS({
        propsData: { groups }
      })
    } else {
      asVm.groups = groups
    }

    asVm.show()

    return new Promise(resolve => {
      asVm.$once('choose', btn => {
        resolve(btn)
      })
    })
  }
}
