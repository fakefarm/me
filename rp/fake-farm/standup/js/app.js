var Task = Backbone.Model.extend({});
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
      var taskView = new TasksView({model: task})
      taskView.render();
      debugger;
    }
  },

  el: $("#input"),

  template: _.template($("#input-template").html()),

  render: function () {
    this.$el.append(this.template);
    return this;
  }
});

var TasksView = Backbone.View.extend({
  el: 'li',
  render: function () {
    this.$el.append(this.model)
    $('#tasks').append(this.$el)
  }
})

var myTasks = new Tasks();
var input = new Input({ collection: myTasks });
input.render();
