var app = app || {};
var ENTER_KEY = 13;

$(function() {
  app.Todos = new TodoList();
  new app.AppView();
});
