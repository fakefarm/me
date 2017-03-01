requirejs.config({
    "paths": {
      "jquery": "lib/jquery"
    }
});

console.log('App is loaded');
var pageName = document.body.attributes.getNamedItem('data-page').value;
console.log('trying to require stuff');
require([pageName], function(page) {
  console.log(pageName + ' hasLoaded');
  page.run();
});
