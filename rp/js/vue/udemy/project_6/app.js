new Vue({
  el: '#app',
  data: {
    start_qty: '',
    small: '',
    medium: '',
    large: '',
    small_adjusted: '',
    med_adjusted: '',
    lrg_adjusted: '',
    adjusted_sizes: {
      Small: '',
      Medium: '',
      Large: ''
    },
    popular_quantities: [
      36, 72, 144, 288
    ],
    step: {
      one: true,
      two: false,
      three: false,
      four: false,
    },
    sizeSplits: [
      {
        name: 'Band Merch',
        description: 'For the times when you need to have a average crowd size to a rock show.',
        sizes: {
          Small: 20,
          Medium: 40,
          Large: 40
        }
      },
      {
        name: 'Volunteers',
        description: 'Volunteers normally take life slower than the average bear.',
        sizes: {
          Small: 30,
          Medium: 50,
          Large: 20
        }
      }
    ]
  },
  computed: {
    final_small: function() {
      if(this.small_adjusted > 0) {
        return parseInt(this.small_adjusted);
      } else {
        return parseInt(this.small);
      }
    },
    final_med: function() {
      if(this.med_adjusted > 0) {
        return parseInt(this.med_adjusted);
      } else {
        return parseInt(this.medium);
      }
    },
    final_lrg: function() {
      if(this.lrg_adjusted > 0) {
        return parseInt(this.lrg_adjusted);
      } else {
        return parseInt(this.large);
      }
    },
    confirm_size_total: function () {
      return this.final_lrg + this.final_small + this.final_med
    }
  },
  methods: {
    proportionSize: function (size) {
      var decimal = this.start_qty * (size / 100)
      return Math.round(decimal);
    },
    popularQty: function(event) {
      this.start_qty = this.popular_quantities[event.target.value]
    },
    sizeSplit: function(event) {
      var breakdown = event.target.value
      this.adjusted_sizes = this.sizeSplits[breakdown]
    },
    new_qty: function () {
      var new_qty_var;
      if(this.small_adjusted > 0) {
        new_qty_var = parseInt(this.small_adjusted);
      } else {
        new_qty_var = parseInt(this.small);
      }

      if(this.med_adjusted > 0) {
        new_qty_var += parseInt(this.med_adjusted);
      } else {
        new_qty_var += parseInt(this.medium);
      }

      if(this.lrg_adjusted > 0) {
        new_qty_var += parseInt(this.lrg_adjusted);
      } else {
        new_qty_var += parseInt(this.large);
      }
      return new_qty_var;
    },
    calculated_small: function() {
      return this.small = this.start_qty / 3
    },
    calculated_med: function() {
      return this.medium = this.start_qty / 3
    },
    calculated_large: function() {
      return this.large  = this.start_qty / 3
    },
    stepTwo: function() {
      this.step.one = false;
      this.step.two = true;
    }
  }
})
