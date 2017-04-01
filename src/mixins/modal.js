/**
 * @files 很多 modal 类的组件都需要一个简单的 show 和 hide 方法
 */

export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  }
}
