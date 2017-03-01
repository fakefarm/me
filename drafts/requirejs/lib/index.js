define(['jquery'], function($){
  var para = $('p'); // Uncaught TypeError: undefined is not a functio
  return {
    run: function() {
      console.log(para);
      console.log('index specific code has run!');
    }
  }
});
