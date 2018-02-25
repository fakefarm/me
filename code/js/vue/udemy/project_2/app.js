new Vue({
  el: '#exercise',
  data: {
    input1: 'here we go'
  },
  methods: {
    boom: function() {
      alert("slow and steady");
    },
    myValue: function() {
      this.input1 = $event.target.value;
    }
  }
})
