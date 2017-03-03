// page specific code - only runs once.
define([ 'lib/underscore', 'calendar_widget'], function(_, Widget){

  // private info here.
  // fucntion  getStuff

  return {
    // only has 1 function to init the for page specific code.
    run: function() {
      var $ = function(){ return 'addME' }
      var widget_container = $('.widget_container');
      // new Widget(widget_container);
      console.log('ABOUT PAGE SPECIFIC CODE HAS RUN');
    }
  };
});

// EXAMPLE
// CW.js & use $ b/c it's been loaded on page
// define(['jquery'], function($){

  // private info here.
  // fucntion  getStuff

  // function Widget(container) {
  //   this.container = container;
  //
  //   // TODO write some functions()
  //   // github: eomuraliev -- is this right via PR?
  //
  // };

  // return Widget;
//});
