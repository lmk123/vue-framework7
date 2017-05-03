/**
 * @file navbar 和 toolbar 共用一套显示/隐藏的逻辑，
 * 仅仅只是 CSS 类名不同，
 * 这里抽离出来了公用的逻辑。
 */
import { oneTransitionEnd } from './transition'

/**
 * 显示 navbar/toolbar
 * @param {'navbar'|'toolbar'} type
 * @param {Element} dom
 * @param {boolean} useAnimation
 */
export function show (type, dom, useAnimation) {
  const hiddenClass = `${type}-hidden`
  const { classList } = dom
  if (!classList.contains(hiddenClass)) return
  const hidingClass = `${type}-hiding`
  classList.remove(hiddenClass, 'not-animated')
  if (useAnimation) {
    classList.add(hidingClass)
    oneTransitionEnd(dom, () => {
      classList.remove(hidingClass)
    })
  }
}

/**
 * 隐藏 navbar/toolbar
 * @param {'navbar'|'toolbar'} type
 * @param {Element} dom
 * @param {boolean} useAnimation
 */
export function hide (type, dom, useAnimation) {
  const { classList } = dom
  const hiddenClass = `${type}-hidden`
  if (classList.contains(hiddenClass)) return
  const list = [hiddenClass]
  if (!useAnimation) {
    list.push('not-animated')
  }
  classList.add.apply(classList, list)
}
