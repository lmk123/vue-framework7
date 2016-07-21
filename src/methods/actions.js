import f7 from '../f7'
import ActionSheet from '../components/action-sheet.vue'

export default function (Vue) {
  const AS = Vue.extend(ActionSheet)

  f7.actions = function (groups) {
    return new Promise(resolve => {
      new AS({
        data: { groups: Array.isArray(groups[0]) ? groups : [groups] },
        events: {
          choose (btn) {
            resolve(btn)
          }
        },
        ready () {
          // todo 偶尔背景会没有动画效果, 估计跟重绘有关
          setTimeout(this.show, 10)
        }
      }).$mount().$appendTo('body')
    })
  }
}
