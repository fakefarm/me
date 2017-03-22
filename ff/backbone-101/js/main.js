
var Rectangle = Backbone.Model.extend({})
var RectangleView = Backbone.View.extend({

  className: 'box',

  events: {
    "click" : function (e) {
      this.bigBox(e);
      this.moveBox(e);
    }
  },

  render: function() {
    this.$el.css('display', 'block');
    this.styleBox();
    return this;
  },

  bigBox: function () {
    var width = this.model.get('width');
    var newWidth = (width * 2);
    this.model.set('width', newWidth);
    this.render();
  },

  moveBox: function () {
    this.$el.css('left', this.model.set('left') + 'px');
  },

  styleBox: function() {
    this.$el.css('width', this.model.get('width') + "px");
    this.$el.css('height', this.model.get('height') + "px");
    this.$el.css('background', this.model.get('background'))
    this.$el.css('position', 'absolute')
  }
});
var myRect = new Rectangle({
  width: '100',
  height: '200',
  left: '20',
  background: 'blue',
});
var myView = new RectangleView({ el: '.box', model: myRect });
$('#container').append(myView.render().el);


// things to learn
// - how to get data into model from a file.json
// - how to update multiple views when a model changes
// - how to manage styles in css classes
// - how to make backbone click with clicks!
// - how to work with templates
// - how to work with interactive code
