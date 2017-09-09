<template>
  <div id="app" class='container'>
    <div class="row">
      <dw-header></dw-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import dwHeader from './components/Header.vue'
export default {
  name: 'app',
  components: {
    dwHeader
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
