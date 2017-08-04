var BaseView = Backbone.View.extend({
  
});

var TextView = Backbone.View.extend({
  
  initialize: function (options) {
    this.chapter = options['chapter'];
    this.verse = options['verse'];
    this.type = options['type'];
    this.getTemplate();
  },
  
  el: '#app',
  
  template: 'populated on initialize',
  
  getTemplate: function () {
    var self = this;
    var template = this.type;
    $.get('/genesis/templates/' + template + '.html', function (data) {
      self.template = _.template(data);
      self.render();
    });
  },
  
  render: function () {
    this.$el.append(this.template({chapter: this.chapter, verse: this.verse}))
  }
});

var CommentaryView = Backbone.View.extend({
  
  initialize: function (options) {
    this.chapter = options['chapter'];
    this.verse = options['verse'];
    this.converter = new showdown.Converter();
    this.getTemplate();
  },
  
  el: '#app',
  
  template: 'populated on initialize',
  
  getTemplate: function () {
    var base = "/genesis/md/chapters/"
    var chapter = this.chapter
    var verse = this.verse
    var end = '/commentary.md'
    var commentary = base + chapter + '/' + verse + end
    var self = this;
    $.get(commentary, function (data) {
      self.template = self.converter.makeHtml(data);
      self.render();
    });
  },
  
  render: function () {
    this.$el.append(this.template)
  }
});

$(function () {
  chapterView    = new TextView({chapter: '1', type: 'chapter' });
  verseView      = new TextView({verse: '1', type: 'verse' });
  commentaryView = new CommentaryView({chapter: '1', verse: '1' });
});
