<template>
  <div>
    <app-header></app-header>
    <app-dota></app-dota>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Dota from './components/Dota'

export default {
  components: {
    'app-header': Header,
    'app-dota': Dota,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
