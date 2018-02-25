var Chapter = Backbone.Model.extend({});

var Chapters = Backbone.Collection.extend({
   model: Chapter,
   populate: function() {
     var chapters = this.models;
     _.each(chapters, function (chapter) {
       var chapterView = new ChapterView({model: chapter});
       chapterView.render();
     });
   }
});

var ChapterView = Backbone.View.extend({
  template: _.template($("#chapter").html()),
  el: $('body'),
  render: function () {
    attrs = this.model.attributes;
    this.$el.append(this.template(attrs));
  }
})

$(document).ready(function () {
  var summary = $.get('./js/summary.json')
  .done(function (data) {
    var chapters = new Chapters(data);
    chapters.populate();
  });
})
