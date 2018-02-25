new Vue({
  el: '#app',
  data: {
    value: 0
  },
  computed: {
    result: function() {
    switch(true) {
    case (this.value > 37):
        return 'you passed it'
        break;
    case (this.value === 37):
        return 'done'
        break;
    default:
        return 'not there yet'
      }
    }
  }
})
