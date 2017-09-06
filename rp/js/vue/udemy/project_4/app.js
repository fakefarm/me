new Vue({
  el: '#exercise',
  data: {
    width: 0,
    effect: '',
    classy: 'begin',
    bool: false,
    myClass: this.classy,
    square: 10,
    property: '',
    value: '',
    textStyles: ''
  },
  watch: {
    classy: function() {
      if (this.classy === 'bam') {
        alert('BAM!');
      }
    }
  },
  methods: {
    startEffect: function() {
      vm = this;
      setInterval(function(){
        vm.effect === 'highlight' ? vm.effect = 'shrink' : vm.effect = 'highlight'
      }, 1000)
    },
    booleanBox: function() {
      if (this.bool) {
        return this.classy
      }
    },
    setStyle: function () {
      if (this.bool) {
        var styles = {};
        styles[this.property] = this.value
        return styles;
      }
    },
    textStyler: function() {
        return this.textStyles;
    },
    startProgress: function() {
      vm = this;
      f = setInterval(function(){
        vm.width += 10;
      }, 100);

      setInterval(function () {
        if(vm.width > 370) {
          clearInterval(f);
        }
        console.log('tick')
      }, 25)
    }
  }
});
