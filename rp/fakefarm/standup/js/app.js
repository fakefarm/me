var Task = Backbone.Model.extend({});


var Input = Backbone.View.extend({
  el: $("#input"),
  events : { 'submit' : 'createTask' },

  createTask: function (e) {
    e.preventDefault();
    var form = $('#form').serializeArray();
    var task = new Task;
    task.set(form[0].name, form[0].value);
    task.set(form[1].name, form[1].value);
    var tasksView = new TasksView({model: task})
    $("#form input[type=text]").each(function(){
      $(this).val('')
    });
    tasksView.render();
  },

  template: _.template($("#input-template").html()),

  render: function () {
    this.$el.append(this.template);
    return this;
  }
});

var TasksView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($("#list-item").html()),
  appendView: function () {
    var template = this.template({task: this.model.get('task'), ticket: this.model.get('ticket')})
    this.$el.append(template)
    this.$el.addClass('boom');
    $('#task-list').append(this.$el)
  },
  render: function () {
    this.appendView();
    return this;
  },
})

var input = new Input();
input.render();
