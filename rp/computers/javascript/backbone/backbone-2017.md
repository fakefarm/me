# 2017 use cases for backbone

- interative information
- static data
- don't want to use node / npm / or a server
- written in ES5
- small library
- un-opinionated
- testable with jasmine (TDD!)
- two dependencies: underscore||lodash & jquery||zepto
- you can rewrite it to learn it

I've been studying backbone and I think part of the issue is to recognize how much I am responsible to manage. There are so many moving parts. I've put together a simple script just to try to clarify it in my own head;


At the highest level, it seems there are 4 phases to manage;

I. Setup Architechture
II. Interactions
III. Get the Data
IV. Initialize new Objects

## Setup Arch
this is where you build out your app

## Interactions
This is when and how things will be activated based on events that occur that change the UI or the data

## get the data
The data is unique and what flows through your events and architecthre

## initialize
Initializing is when and how to create the objects and sew the data and your app together.


# I. Setup Architechture
So, let's go though the the 6 or so basics of starting a model and view


## 1. make the model

let's create a Backbone Model and       

    var Image = Backbone.Model.extend({});



// 2. make the view
var ImageView = Backbone.View.extend({

// 3. make the template

  template: _.template($('#template').html()),

  render: function () {

// 4. merge model data with template
    var template = this.template({path: this.model.get('img')});

// 5. append to dom
    this.$el.append(template);

// 6. return this from render
    return this;
  },

  // II. Interactions
  // -----------------------------------------

  // 7. assign a nested click even to a function
  events: {
    'click #show' : 'show'
  },

  // 8. call render from a function that is attached to event

  show: function () {
    this.render();
    return this;
  }


});

// III. Get the Data
// -----------------------------------------

// 9. source custom data
var imgPath = "img/ephesians_mind_map.jpg";


// IV. Initialize new Objects
// -----------------------------------------

// 10. put it into a new model
var img = new Image({img: imgPath});

// 11. new up a view
var imgView = new ImageView({

// 12. pass the model to the view
    model: img,

// 13. what is the element to append to? (is this from the template, no name, or from the dom?)
    el: "#app"
  }
);

