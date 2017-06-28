import Vue from 'vue'
import ProgressBar from '../components/progressbar.vue'
import { get } from '../vm-store'

let singleProgress

/**
 * 设置指定进度条的进度
 * @param {string} name - 进度条的名称
 * @param {number} progress - 进度
 * @param {number} [speed] - 调整到此进度所需的时间
 */
export function setProgressbar (name, progress, speed) {
  const vm = get('f7-progressbar', name)
  if (!vm) return
  vm.set(progress, speed)
}

/**
 * 隐藏进度条
 * @param {string} [name] - 如果提供，则隐藏指定的进度条；如果没有提供，则隐藏全局的无限进度条
 */
export function hideProgressbar (name) {
  if (name) {
    const vm = get('f7-progressbar', name)
    if (vm) vm.hide()
    return
  }

  if (singleProgress) {
    singleProgress.hide()
  }
}

/**
 * 显示进度条
 * @param {string|number} [nameOrProgress] - 如果这个参数是字符串，则显示指定的进度条；
 *                                           如果这个参数是数字，则创建一个全局进度条并显示；
 *                                           如果这个参数是 true，则创建一个彩色的无限进度条并显示；
 *                                           不传或者传其它值则会创建一个普通全局的无限进度条并显示。
 */
export function showProgressbar (nameOrProgress) {
  if (typeof nameOrProgress === 'string') {
    const vm = get('f7-progressbar', nameOrProgress)
    if (vm) vm.show()
    return
  }

  if (!singleProgress) {
    singleProgress = new (Vue.extend(ProgressBar))({
      propsData: {
        hidden: true,
        top: true
      }
    }).$mount()
  }

  if (typeof nameOrProgress === 'number') {
    singleProgress.infinite = false
    singleProgress.set(nameOrProgress)
  } else {
    singleProgress.infinite = true
    singleProgress.multiColor = nameOrProgress === true
  }

  singleProgress.show()
}
