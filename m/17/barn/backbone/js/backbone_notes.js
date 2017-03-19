// var Todo = Backbone.Model.extend({
//   initialize: function() {
//     console.log('The Lord is my Shepard.');
//     this.on('change', function() {
//       console.log(' - Values for this model have changed!')
//     });
//   },

//   defaults: {
//     title: '',
//     completed: false,
//     subject: '',
//     priority: '',
//     quadrant: '',
//     category: '',
//     scheduled: false,
//     required_day: ''
//   }
// });

// options = {
//     title: 'Follow the King',
//     completed: false,
//     subject: 'faith',
//     priority: 'high',
//     quadrant: '2',
//     category: 'errand',
//     scheduled: true,
//     required_day: 'Tuesday'
//   }

// var todo = new Todo(options);
// console.log(todo.get('title'));
// console.log(todo.toJSON());
// todo.set('title', 'The Lord reigns supreme!');
// console.log(todo.get('title'));


// var Person = new Backbone.Model();
// Person.on("change:name", function() {console.log('Name changed'); });
// Person.set({name: 'Andy'});

// var myTodo = new Todo();

// myTodo.set('title', 'The listener is triggered whenever an attribute value changes.');
// console.log('Title has changed: ' + myTodo.get('title'));


// myTodo.set('completed', true);
// console.log('Completed has changed: ' + myTodo.get('completed'));

// myTodo.set({
//   title: 'Changing more than one attribute at the same time only triggers the listener once.',
//   completed: true
// });


// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   },
//   initialize: function(){
//     console.log('init.......');
//     this.on('change:title', function(){
//       console.log('Title has chnaged!!!');
//     });
//   },
//   setTitle: function(newTitle) {
//     this.set({title: newTitle});
//   }
// });

// var todo = new Todo();

// todo.set('title', 'see what is logged');
// todo.setTitle('Go fishing');

// todo.set('complete', true);
// console.log('Todo set as completed' + todo.get('completed'))

// _dw NEXT UP VALIDATION - search for;
// Backbone supports model validation through model.validate(), which allows checking the attribute values for a model prior to setting them. By default, validation occurs when the model is persisted using the save() method or when set() is called if {validate:true} is passed as an argument.


// var TodoView = Backbone.View.extend({

//   tagName:  'li',

//   // Cache the template function for a single item.
//   todoTpl: _.template( "An example template" ),

//   events: {
//     'dblclick label': 'edit',
//     'keypress .edit': 'updateOnEnter',
//     'blur .edit':   'close'
//   },

//   initialize: function (options) {
//     // In Backbone 1.1.0, if you want to access passed options in
//     // your view, you will need to save them as follows:
//     this.options = options || {};
//   },

//   // Re-render the title of the todo item.
//   render: function() {
//     this.$el.html( this.todoTpl( this.model.attributes ) );
//     this.input = this.$('.edit');
//     return this;
//   },

//   edit: function() {
//     // executed when todo label is double clicked
//   },

//   close: function() {
//     // executed when todo loses focus
//   },

//   updateOnEnter: function( e ) {
//     // executed on each keypress when in todo edit mode,
//     // but we'll wait for enter to get in action
//   }
// });

// var todoView = new TodoView();

// // log reference to a DOM element that corresponds to the view instance
// console.log(todoView.el); // logs <li></li>

// var TodosCollection = new Backbone.Collection();

// TodosCollection.on("add", function(todo) {
//   console.log("I should " + todo.get("title") + ". Have I done it before? "  + (todo.get("completed") ? 'Yeah!': 'No.' ));
// });

// TodosCollection.on("change:title", function(model) {
//     console.log("Changed my mind! I should " + model.get('title'));
// });

// TodosCollection.add([
//   { title: 'go to Jamaica', completed: false },
//   { title: 'go to China', completed: false },
//   { title: 'go to Disneyland', completed: true }
// ]);


// TodosCollection.add([
//   { title: 'go to Jamaica.', completed: false, id: 3 },
// ]);

// var myTodo = TodosCollection.get(3);

// myTodo.set('title', 'go fishing');

var TodosCollection = new Backbone.Collection();

TodosCollection.add([
    { id: 1, title: 'go to Jamaica.', completed: false },
    { id: 2, title: 'go to China.', completed: false },
    { id: 3, title: 'go to Disneyland.', completed: true }
]);

// we can listen for add/change/remove events
TodosCollection.on("add", function(model) {
  console.log("Added " + model.get('title'));
});

TodosCollection.on("remove", function(model) {
  console.log("Removed " + model.get('title'));
});

TodosCollection.on("change:completed", function(model) {
  console.log("Completed " + model.get('title'));
});

TodosCollection.set([
    { id: 1, title: 'go to Jamaica.', completed: true },
    { id: 2, title: 'go to China.', completed: false },
    { id: 4, title: 'go to Disney World.', completed: false }
]);
