import Vue from 'vue'
import ActionSheet from './_action-sheet.vue'
import noop from '../../utils/noop'

let actionSheet

let init = function () {
  init = noop
  actionSheet = new (Vue.extend(ActionSheet))()
  actionSheet.$mount()
  document.body.appendChild(actionSheet.$el)
}

export function actions (buttons) {
  if (!Array.isArray(buttons) || !buttons.length) return
  init()
  actionSheet.groups = Array.isArray(buttons[0]) ? buttons : [buttons]
  Vue.nextTick(actionSheet.show)
  return new Promise((resolve, reject) => {
    actionSheet.$once('choose', btn => {
      if (btn == null) {
        return reject()
      }
      resolve(btn)
    })
  })
}
