/**
 * @files 简单的 tap 事件
 */

const event = 'ontouchstart' in window ? 'touchstart' : 'click';

export default {
  acceptStatement: true,
  update( fn ) {
    this.$_handler = fn;
    this.el.addEventListener( event, fn );
  },
  unbind() {
    this.el.addEventListener( event, this.$_handler );
  }
};
