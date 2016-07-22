const has = Object.prototype.hasOwnProperty
const { isArray } = Array

/**
 * 超简单的 clone 方法, 仅判断数组与对象, 其他值一律直接返回
 * @param val
 * @returns {*}
 */
export default function clone (val) {
  if (isArray(val)) {
    return val.map(clone)
  } else if (typeof val === 'object') {
    const r = {}
    for (let key in val) {
      if (has.call(val, key)) {
        r[key] = clone(val[key])
      }
    }
    return r
  } else {
    return val
  }
}
