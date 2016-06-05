/**
 * @files 很多组件都会将自身插入到 <body> 下
 */

export default {
  ready () {
    this.$appendTo('body')
  },

  beforeDestroy () {
    const { $els } = this
    const { body } = document
    for (let key in $els) {
      const node = $els[key]
      if (node) {
        body.removeChild(node)
      }
    }
  }
}
