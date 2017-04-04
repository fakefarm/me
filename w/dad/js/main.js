var Image = Backbone.Model.extend({});

var ImageView = Backbone.View.extend({
  template: _.template($('#template').html()),
  render: function () {
    var template = this.template({path: this.model.get('img')});
    this.$el.append(template);
    return this;
  },

  events: {
    'click #show' : 'show'
  },

  show: function () {
    this.render();
    return this;
  }
});

var imgPath = "https://s3.amazonaws.com/wwwoodall/ephesians_mind_map.jpg";

var img = new Image({img: imgPath});

var imgView = new ImageView({ model: img, el: "#app" });
