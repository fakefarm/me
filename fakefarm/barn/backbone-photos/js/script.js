var app = app || {};
app.AppView = Backbone.View.extend({
  el: '#photoApp',
  template: _.template($('#list').html()),
  imageTemplate: _.template($('#image-park').html()),
  initialize: function(){
    this.render();
  },
  render: function() {
    this.$el.html(this.template);
  },
  events: {
    'click .animal': 'greeting'
  },
  greeting: function(e){
    e.preventDefault();
    var animal = $(e.currentTarget).text().trim();
    $('#contact').html(this.imageTemplate({image: animal }));
  }
});

$(function(){
  new app.AppView();
});
