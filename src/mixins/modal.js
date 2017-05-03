import nextFrame from '../utils/next-frame'
import createOverlay from '../utils/create-overlay'
import { oneTransitionEnd } from '../utils/transition'

export default {
  methods: {
    show (useAnimation = true) {
      const { $el } = this
      if ($el.style.display === 'block') return
      $el.style.display = 'block'
      $el.classList[useAnimation ? 'remove' : 'add']('not-animated')
      nextFrame(() => {
        $el.classList.add('modal-in')
      })
      createOverlay(this._modalName).show(useAnimation)
    },
    hide (useAnimation = true) {
      const { $el } = this
      if ($el.style.display !== 'block') return
      const { classList } = $el
      classList.remove('modal-in')
      if (useAnimation) {
        classList.add('modal-out')
        oneTransitionEnd($el, () => {
          $el.style.display = ''
          classList.remove('modal-out')
        })
      } else {
        $el.style.display = ''
      }
      createOverlay(this._modalName).hide(useAnimation)
    }
  },
  mounted () {
    document.body.appendChild(this.$el)
  },
  beforeDestroy () {
    document.body.removeChild(this.$el)
    createOverlay(this._modalName).hide(false)
  }
}
