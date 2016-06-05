/**
 * textarea 需要做一些额外的处理.
 * @see http://framework7.io/docs/form-elements.html
 */

export default {
  params: ['resizable'],
  bind () {
    const { el } = this
    if (this.params.resizable) {
      el.classList.add('resizable')
    }

    this.vm.$nextTick(() => {
      for (
        let parentElement = el.parentElement;
        parentElement && parentElement.tagName !== 'BODY';
        parentElement = parentElement.parentElement
      ) {
        if (parentElement.tagName === 'LI') {
          parentElement.classList.add('align-top')
          break
        }
      }
    })
  }
}
