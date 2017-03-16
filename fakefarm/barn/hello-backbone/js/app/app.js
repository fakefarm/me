var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function(){
  window.data= [
  {title: 'Dave'},
  {title: 'Danae'},
  {title: 'Oscar'},
  {title: 'Wells'},
  {title: 'Courage'}
  ];
  var greetings = new app.Greetings(window.data);
  new app.AppView(greetings);
});

// view collection mgmt

app.AppView = Backbone.View.extend({  // is this the collection view?
  el: '#greetingApp',

  deleteTemplate: _.template($('#delete-template').html()),
  newTitleTemplate: _.template($('#new-greeting').html()),

  initialize: function(greetings) {
    var self = this;
    this.greetings = greetings;
    this.greetings.on('update', this.render.bind(self));
    this.render();
  },

  render: function() {
    this.cleanUpRender();
    this.$el.prepend(this.newTitleTemplate);
  },

  cleanUpRender: function() {
    var self = this;

    var greetingsCount = self.greetings.length;
    self.$el.empty();
    self.$el.append(this.deleteTemplate({
      count: greetingsCount,
      greeting: 'total people:'
    }));

    self.greetings.each(function(greet){
      var view;
      view = new app.GreetingView(greet).render();
      self.$el.append(view);
    });
  },

  events: {
    'click .delete-mode': 'deleteMode',
    'keydown .new-greeting': 'updateOnEnter'
  },

  updateOnEnter: function(e) {
    if (e.which === ENTER_KEY) {
      this.addGreeting();
      $('.new-greeting').focus();
    }
  },

  addGreeting: function() {
    var name = this.$el.find('.new-greeting').val();
    this.greetings.push({title: name});
  },

  deleteMode: function() {
      this.$el.toggleClass('in-delete-mode');
      // $('.mass-delete').toggle();
  }
});

app.GreetingView = Backbone.View.extend({

  initialize: function(model) {
    this.model = model;
  },

  template: _.template($('#greeting').html()),

  render: function() {
    return this.$el.append(this.template(this.model.attributes));
  },

  events: {
    'dblclick h2': 'edit',
    'keypress .edit-text': 'updateOnEnter',
    'keydown .edit-text': 'resetOnEsc',
    'click .delete' : 'delete',
    'blur .edit-text': 'update'
  },

  resetOnEsc: function(e) {
    if (e.which === ESC_KEY) {
      var view = this.$el;
      view.find('.edit').addClass('hidden').removeClass('show');
      view.find('.title').addClass('show').removeClass('hidden');
    }
  },

  updateOnEnter: function(e) {
    if (e.which === ENTER_KEY) {
      this.update();
    }
  },

  update: function() {
    var view = this.$el;
    var content = view.find('.edit-text').val();
    var withHello = "Hello, " + content;
    this.model.set('title', withHello);
    view.find('.title').html(withHello);
    view.find('.edit').addClass('hidden').removeClass('show');
    view.find('.title').addClass('show').removeClass('hidden');
  },

  edit: function () {
    var view = this.$el;
    view.show();
    view.find('.title').addClass('hidden').removeClass('show');
    view.find('.edit').addClass('show').removeClass('hidden');
    var textSize = view.find('.edit-text').val();
    view.find('.edit-text').focus();
  },

  delete: function() {
    var view = this;
    var massDelete = $('.mass-delete').css('display');
    if (massDelete === 'none') {
      var check = confirm("Delete " + this.model.attributes.title + "?");
    }
    if (check === true || massDelete === 'inline') {
      this.model.destroy({
        success: function(model, response) {
          view.remove();
        }
      });
    } else {
      this.$el.find('.edit-text').focus();
    }
  }
});

app.Greeting = Backbone.Model.extend({
  defaults: {
    title: ''
  }
});

app.Greetings = Backbone.Collection.extend({
  model: app.Greeting,
  url: ''
});
