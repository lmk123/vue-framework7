import f7 from './f7'
import './methods/navbar'
import './methods/toolbar'

function install (Vue) {
  Vue.prototype.$f7 = f7
}

export default install

// auto install
const { Vue } = window
if (Vue) {
  Vue.use(install)
}
