import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
export const app = new Vue({
  router,
  el: '#app',
  components: {App},
  template: '<App />'
})
