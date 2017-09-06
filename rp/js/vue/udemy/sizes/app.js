new Vue({
  el: '#app',
  data: {
    start_qty: '',
    small: '',
    medium: '',
    large: ''
  },
  methods: {
    calculated_small: function() {
      return this.start_qty / 3
    },
    calculated_med: function() {
      return this.start_qty / 3
    },
    calculated_large: function() {
      return this.start_qty / 3
    },
  }
})
