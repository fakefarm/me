
// ------ /views/footer
// --------------------------------------------------
// Uncomment if you want the footer

// $.ajax({
//   url: "../views/footer/index.html",
//   context: document.body
// }).done(function(data) {
//   $( '.footer-1' ).append( data );
// });
//
// $.ajax({
//   url: "../views/footer/css/main.css",
//   context: document.body
// }).done(function(data) {
//   $("#footer-ss").append(data);
// });


// _dw - is this where require JS comes in???

var Task = Backbone.Model.extend({

});

var Tasks = Backbone.Collection.extend({
  model: Task
})

var Input = Backbone.View.extend({

  events : {
    'submit' : function (e) {
      e.preventDefault();
      var form = $('#form').serializeArray();
      var task = new Task;
      task.set(form[0].name, form[0].value);
      task.set(form[1].name, form[1].value);
      this.collection.add(task);
      this.$el.append(task);
    }
  },

  el: $("#app"),

  template: _.template($("#input-template").html()),

  render: function () {
    this.$el.append(this.template);
    return this;
  }
});

var myTasks = new Tasks();

var input = new Input({collection: myTasks});

input.render();
