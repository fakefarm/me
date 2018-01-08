<template>
  <div id="app" class='container'>
    <div class="row">
      <dw-header></dw-header>
      <transition name='slide' mode='out-in'>
        <router-view></router-view>
      </transition>

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

/*.slide-enter {
  border: 1px solid red;
  transition: all 3s;
  background: red;
}

.slide-enter-active {
  transition: all 3s;
  background: blue;
  border: 10px solid yellow;
}

.slide-leave {
}

.slide-leave-active {
  margin-20
  border: 10px solid blue;
  background: black;
  transition: all 3s;
}*/

</style>
