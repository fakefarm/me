var Square = Backbone.View.extend({

  events: {
    'hover': 'move'
  },

  move: function () {
    this.$el.css('margin-left', '100px' );
  },

  template: _.template("<div class='square'></div>"),
  render: function () {
    $("#app").html(this.template);
    return this;
  },
})

var sq = new Square();
sq.render();
