var Time = Backbone.Model.extend({
  
  validate: function(attrs, options) {
    if (attrs.count <= attrs.minimum) {
      console.log(this.attributes);
    }
  },
  
  defaults: {
    count: 30,
    growth: 15,
    minimum: 15
  }
});

var Increment = Backbone.View.extend({
  
  template: _.template($("#increment").html()),
  
  el: $('#app'),
  
  events: {
    'click .plus':  'grow',
    'click .minus': 'shrink'
  },

  grow: function (e) {
    e.preventDefault();
    e.stopPropagation();
    var current = this.model.get('count')
    var growth  = this.model.get('growth')
    var update  = +current + +growth
    this.model.set('count', update, { validate: true })
    this.render();
    $('.time').slideUp();
  },
  
  shrink: function (e) {
    e.preventDefault();
    e.stopPropagation();
    var current = this.model.get('count');
    var growth  = this.model.get('growth');
    
    if (current <= growth) {
      var update = this.model.get('minimum');
      this.model.set('count', update);
      this.render();
      $('.errors').css('color', 'red');
    } else {
      var update  = +current - +growth;
      this.model.set('count', update);
      this.render();
    }
  },
  
  render: function () {
    var count = this.model.get('count')
    var min = this.model.get('minimum')
    this.$el.html(this.template({count: count, minimum: min}));
  }
})

$(document).ready(function () {
  var time = new Time();
  var increment = new Increment({model: time});
  increment.render();
})
