var Input = Backbone.View.extend({

  template: _.template("<input type='text' class='input-events ie' id='ie-input'>"),

  render: function () {
    $("#ie").prepend(this.template)
    return this;
  }
})

var input = new Input();
input.render();
