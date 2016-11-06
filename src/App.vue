<template>
  <div id="app">
    <hangmanGame></hangmanGame>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import hangmanGame from './components/HangmanGame'

export default {
  name: 'app',
  components: {
    hangmanGame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
