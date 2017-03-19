app.factory('posts', function() {
  return {
    all: function() {
      return [
        {
          tags: [
            'js'
          ],
          date: 'August 2016',
          title: 'Tags input',
          body: "Wow, it's been a while since I've ",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/tagsinput',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/tagsinput'
        },
        {
          tags: [
            'backbone',
            'js'
          ],
          date: 'July 2015',
          title: 'Hello Backbone',
          body: "First try using BB Views, Models, Collections, and events by listing out names and the ability to edit them by double clicking.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/hello-backbone',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/hello-backbone'
        },
        {
          tags: [
            'backbone',
            'js'
          ],
          date: 'June 2015',
          title: 'Backbone Fundamentals TODO',
          body: "I'm starting to learn about backbone and reading backbone fundamentals. The book's first project is to build a simple TODO app. Unfortunately, mine is broken but I don't know BB well enough to fix it. But that's why it's a pet project! :-)",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/backbone',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/backbone'
        },
        {
          tags: [
            'HTML',
            'CSS'
          ],
          date: 'May 2015',
          title: 'Complex CSS Nav',
          body: "Working on how to create a complex navigation.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/complex-nav',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/complex-nav'
        },
        {
          tags: [
            'javascript',
            'events'
          ],
          date: 'April 2015',
          title: 'Notes from Secrets of JS Ninja',
          body: "Code along",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/js-ninja',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/js-ninja'
        },
        {
          tags: [
            'javascript',
            'events'
          ],
          date: 'April 2015',
          title: 'Practice events',
          body: "Events are complicated",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/event-practice',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/event-practice'
        },
        {
          tags: [
            'javascript',
            'jasmine',
            'tdd'
          ],
          date: 'April 2015',
          title: 'Create a debounce function',
          body: "Trying my hand at writing a debounce function from scratch",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/debounce',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/debounce'
        },
        {
          tags: [
            'javascript',
            'library'
          ],
          date: 'April 2015',
          title: 'Classy.js',
          body: "A little library that does a lot.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/keep-it-classy',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/keep-it-classy'
        },
        {
          tags: [
            'javascript',
            'browser',
            'events'
          ],
          date: 'April 2015',
          title: 'Messing with mouse events',
          body: "The mouse event fires everytime you move the mouse",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/mouse-event',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/mouse-event'
        },
        {
          tags: [
            'javascript',
            'browser',
            'events'
          ],
          date: 'April 2015',
          img: 'scroll.gif',
          title: 'Scroll Events',
          body: "The scroll event helps show where the page is",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/scroll-event',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/scroll-event'
        },
        {
          tags: [
            'javascript',
            'local storage',
            'css'
          ],
          date: 'April 2015',
          title: 'Using local storage to remember the users state',
          body: "Local Storage and hover stages can make a page look like you've been here before.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/local-storage',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/local-storage'
        },
        {
          tags: [
            'css',
            'responsive'
          ],
          date: 'November 2014',
          title: 'Fixie',
          body: "A responsive grid in plain CSS",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/fixie',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/fixie'
        },
        {
          tags: [
            'angular',
            'ui'
          ],
          date: 'October 2014',
          title: 'Bill vs. Ted',
          body: "Explore of some angular with a friendly competition",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/bill-and-ted',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/bill-and-ted'
        },
        {
          tags: [
            'angular',
            'ui'
          ],
          date: 'September 2014',
          title: 'Simple Angular',
          body: "A simple angular test",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/simple-site',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/simple-angular'
        },
        {
          tags: [
            'css',
            'animation'
          ],
          date: 'May 2014',
          title: 'Abstract fire',
          body: "Explore of animation",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/fire',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/fire'
        },
        {
          tags: [
            'css',
            'animation'
          ],
          date: 'May 2014',
          title: 'Simple animation with CSS',
          body: "My first explore of animation",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/squares',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/squares'
        },
        {
          tags: [
            'css',
            'animation'
          ],
          date: 'May 2014',
          title: 'Flipper',
          body: "Simple flip of a square.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/flipper',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/flipper'
        },
        {
          tags: [
            'javascript',
            'masonry'
          ],
          date: 'March 2014',
          title: 'Masonry.js',
          body: "Any Experiment with the masonry library",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/masonry',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/masonry'
        },
        {
          tags: [
            'javascript'
          ],
          date: 'March 2014',
          title: 'Draggable',
          body: "Any Experiment with the Dragging DOM",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/draggable',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/draggable'
        },
        {
          tags: [
            'javascript',
            'jquery'
          ],
          date: 'Feb 2014',
          title: 'Slide Show',
          body: "Simple slideshow.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/slide-show',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/slide-show'
        },
        {
          tags: [
            'javascript',
            'jquery'
          ],
          date: 'Feb 2014',
          title: 'Calculator',
          body: "Simple calculator.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/calculator',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/calculator'
        },
        {
          tags: [
            'javascript',
            'jquery'
          ],
          date: 'Feb 2014',
          title: 'Timer',
          body: "Simple timer.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/timer',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/timer'
        },
        {
          tags: [
            'javascript',
            'jquery'
          ],
          date: 'Feb 2014',
          title: 'Countdown',
          body: "Simple Countdown.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/countdown',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/countdown'
        },
        {
          tags: [
            'javascript',
            'jquery'
          ],
          date: 'Feb 2014',
          title: 'Tool tip',
          body: "Simple Tooltip.",
          demo: 'http://wwwoodall.github.io/fakefarm/barn/tool-tip',
          source: 'https://github.com/wwwoodall/fakefarm/tree/master/barn/tool-tip'
        }
      ];
    }
  };
});
