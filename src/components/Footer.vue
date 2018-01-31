<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'Copyright 2018 by Vz'
    }
  }
}
</script>

<style spoced>
footer {
  background: black;
  padding: 6px;
  text-align: center;
}
p {
  color: aliceblue;
}
</style>
