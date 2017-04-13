var Button = Backbone.Model.extend({
  defaults: {
    value: 'click button'
  }
});
var Clock = Backbone.View.extend({
  template: _.template("<h1 class='h1'><%= time %></h1>"),
  tick: function () {
    var current = this.model.get('time');
    var less = this.model.set('time', current - 1);
    this.render();
    this.countdown();
  },
  countdown: function () {
    _.delay(this.tick.bind(this), 1000);
  },
  render: function () {
    $('#timer').html(this.template({time: this.model.get('time')}));
    return this;
  },
});
var ButtonView = Backbone.View.extend({
  template: _.template(
    "<input type='button' value='<%= value %>' id='start'>"
  ),
  render: function () {
    var b = this.template({value: this.model.get('value')})
    $('#timer').after(b);
    return this;
  }
})

// engage

var Time = Backbone.Model;
var t = new Time({time: 100000});
var clock = new Clock({model: t});
clock.render();
var btn = new Button();
var bv = new ButtonView({model: btn})
bv.render();
