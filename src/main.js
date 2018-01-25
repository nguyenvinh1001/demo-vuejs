import Vue from 'vue'
// import App from './App'
import router from './router'
import Test from './components/test'

Vue.config.productionTip = false

export const app = new Vue({
  router,
  components: Test,
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
