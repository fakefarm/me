var Rectangle = Backbone.Model.extend({})

var RectangleView = Backbone.View.extend({
  render: function() {
    var data = this.model.get('tnt');
    this.$el.append(data);
    return this;
  }
})

var myRect = new Rectangle({ tnt: 'BOOOOOOOOOM'} );
var myView = new RectangleView({ model: myRect })
$('#container').append(myView.render().el);
