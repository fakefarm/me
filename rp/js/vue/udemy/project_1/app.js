new Vue({
  el: '#exercise',
  data: {
    name: 'Dave',
    age: '40',
    img: 'https://udemy-images.udemy.com/course/750x422/521386_c1d3_5.jpg',
    width: '200px',
    height: '200px'
  },
  methods: {
    noah: function() {
      return this.age * 3;
    },
    random: function() {
      return Math.random(0, 1);
    }
  }
});
