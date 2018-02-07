import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      components: Login
    },
    {
      path: '/register',
      name: 'Register',
      components: Register
    }
  ]
})
