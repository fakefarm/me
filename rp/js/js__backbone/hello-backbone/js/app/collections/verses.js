var app = app || {};

var VerseList = Backbone.Collection.extend({
  model: app.Verse,
  localStorage: new Backbone.LocalStorage('verses-backbone')
});
