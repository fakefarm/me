'use strict';

var AppView = Backbone.View.extend({
  template: _.template($('#app-view').html()),
  render: function () {
    $('body').prepend(this.template);
  }
});










var InputModel = Backbone.Model.extend({});




















var InputView = Backbone.View.extend({
  template: _.template($("#input").html()),
  events: {
    "keypress #first": 'showCase'
  },
  showCase: function (e) {
    var c = String.fromCharCode(e.which);
    var m = new InputModel({char: c});
    var outputView = new OutputView({model: m, el: '#output-1'});
    outputView.render();
  },
  render: function () {
    this.$el.html(this.template());
  }
})















var OutputView = Backbone.View.extend({
  template: _.template($("#content").html()),
  render: function () {
    var content = this.template({content: this.model.get('char')});
    this.$el.html(content);
  }
})

















$(document).ready(function () {
  var appView = new AppView();
  appView.render();

  var input = new InputView({el: "#input-1"});
  input.render();

  var input2 = new InputView({el: "#input-2"});
  input2.render();
});


// Things I'm aware are lacking
// tests
// dynamic components, ids are static
// validations on model just numbers
//
