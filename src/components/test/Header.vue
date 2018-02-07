<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'Demo'
    }
  }
}
</script>

<style scoped>
  header {
   background: lightblue;
   padding: 10px;
   text-align: center;
  }
</style>
