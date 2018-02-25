import Vue from 'vue'
import App from './App.vue'

export const SizeController = new Vue({
  methods: {
    show (size) {
      this.$emit('show', size);
      console.log('Size#show fired')
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
