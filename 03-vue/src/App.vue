<template>
  <div id="app">
    <h1>Tic Tac Toe</h1>
    <GameCanvas/>
  </div>
</template>

<script>
import GameCanvas from './components/GameCanvas'

export default {
  name: 'app',
  components: {
    GameCanvas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}


body {
  padding: 50px;
  /* font: 14px "Lucida Grande", Helvetica, Arial, sans-serif; */
}

</style>
