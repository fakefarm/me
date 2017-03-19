var Rectangle = Backbone.Model.extend({})

var RectangleView = Backbone.View.extend({
  render: function() {
    this.styleBox();
    this.$el.append(data);
    return this;
  },

  styleBox: function() {
      
  }
})

var myRect = new Rectangle({

});

var myView = new RectangleView({ model: myRect })

$('#container').append(myView.render().el);
