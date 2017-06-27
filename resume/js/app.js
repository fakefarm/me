var Square = Backbone.View.extend({
  template: _.template($("#square").html()),
  el: $('#app'),
  render: function () {
    this.$el.html(this.template);
  }
})

$(document).ready(function () {
  var square = new Square;
  square.render();
})
