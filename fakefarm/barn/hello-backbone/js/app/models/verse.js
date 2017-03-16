var app = app || {};

app.Verse = Backbone.Model.extend({

  defaults: {
    text: '',
    favorite: false
  },
  toggle: function() {
    this.save({ // where does save come from? Just BB model?
      favorite: !this.get('favorite')
    });
  }
});

console.log('ready when you are...');
