<template>
  <div id="pageWrapper">
    <img src="assets/img/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/BlankList'

export default {
  name: 'App',
  components: {
    HelloWorld
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
