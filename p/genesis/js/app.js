var Chapter = Backbone.Model.extend({});

var Chapters = Backbone.Collection.extend({
   model: Chapter
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
    _.each(data, function (d) {
      var chap = d;
      options = {
        chapter: chap['chapter'],
        title: chap['title'],
        summary: chap['summary'],
      }
      var chptr = new Chapter(options);
      var chapterView = new ChapterView({model: chptr});
      chapterView.render();
    });
  });
})
