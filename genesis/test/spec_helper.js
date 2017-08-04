jasmine.loadTemplate = function(template) {
  var templateUrl = "../templates/" + template;
  var self = this;
  $.ajax({
    async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
    cache: false,
    dataType: 'html',
    url: templateUrl,
    success: function(data) {
      jasmine.template = _.template(data);
    }
  });
};

function loadTemplate(template) {
  jasmine.loadTemplate(template)
}
