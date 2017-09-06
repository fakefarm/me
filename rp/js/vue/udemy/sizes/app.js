new Vue({
  el: '#app',
  data: {
    small: '',
    medium: '',
    qty: ''
  },
  computed: {
    calculated: function () {
      this.small = this.qty / 2
      this.medium = this.qty / 2 
      return this.qty / 2
    }
  },
  methods: {
    total: function () {
      if(this.small > 0 && this.medium > 0) {
        var total =
        parseInt(this.small) + parseInt(this.medium);
        return total;
      } else {
        ''
      }
    }
  }
})
