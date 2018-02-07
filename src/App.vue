<template>
  <div>
    <!-- <app-header></app-header>
    <app-dota></app-dota>
    <app-footer></app-footer> -->
    <app-login></app-login>
    <router-link :to="{name: 'Register'}">Register</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Dota from './components/Dota'
import Login from './components/login/Login'
import Register from './components/register/Register'
export default {
  components: {
    // 'app-header': Header,
    // 'app-dota': Dota,
    // 'app-footer': Footer
    'app-login': Login,
    'app-register': Register
  }
}
</script>

<style>

</style>
