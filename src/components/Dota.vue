<template>
  <div id="dota">
    <ul>
      <li v-for="doto in dota" :key="doto" v-on:click="doto.show =! doto.show">
        <h2>{{ doto.hero}}</h2>
        <h3 v-show="doto.show">{{ doto.speciality}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dota: [
        { hero: 'Riki', speciality: 'Invisible', show: false },
        { hero: 'CM', speciality: 'Regeb Mana', show: false },
        { hero: 'Axe', speciality: 'Called', show: false },
        { hero: 'Silencer', speciality: 'Global', show: false }
      ]
    }
  }
}
</script>

<style spoced>
#dota {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid blanchedalmond;
  margin: 10px;
}
</style>
