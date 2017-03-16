// var app = app || {};

// app.AppView

// var app = app || {};

// app.AppView = Backbone.View.extend({
//   el: '#verseApp',

//   initialize: function() {
//     var view = this;

//     _.times(5, function() {
//       var t = new app.TaskView();
//       view.$el.append(t.$el);
//     });
//   }
// });


// app.TaskView = Backbone.View.extend({
//   template: _.template($('#template-task').html()),
//   tagName: 'h1',

//   initialize: function() {
//     var view = this;
//     this.$el.append(this.template({title: 'some text'}));

//     this.$el.on('click', 'button.complete', function() {
//       view.remove();
//     });
//   }
// });


// homework
// update template with verses via render, initialize.
// subscribe to events
// only render main template once
// skim the source code.


// Questions
// 1. how eldar he would do this with nested templates?
// 2. i was having a problem with parent initializing the childing. What does Eldar think? are they coupled or is that okay?





