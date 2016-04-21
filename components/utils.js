/**
 * 批量操作一个元素的 classList
 * @param {Element} el
 * @param {String|String[]} classArray - 一个或多个类名
 * @param {String} [operation] - 默认为 add ,还可以是 remove toggle
 */
export function modifyClass( el, classArray, operation = 'add' ) {
  const { classList } = el;
  [].concat( classArray ).forEach( ( className )=> {
    classList[ operation ]( className );
  } );
}
