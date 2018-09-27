import Vue from 'vue'
import App from './App'
import router from './router'
// import '../static/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/css/reset.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 跳转路由后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
