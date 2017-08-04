var ChapterNumber = Backbone.View.extend({
  
  initialize: function (options) {
    this.chapter = options['chapter'];
    this.verse = options['verse'];
    this.foo = options['foo'];
    
    this.getTemplate();
  },
  
  template: 'populated on initialize',
  
  getTemplate: function () {
    var self = this;
    var template = this.foo;
    $.get('/genesis/templates/' + template + '.html', function (data) {
      self.template = _.template(data);
      self.render();
    });
  },
  
  render: function () {
    this.$el.append(this.template({chapter: this.chapter, verse: this.verse}))
  }
});

$(function () {
  cn = new ChapterNumber({chapter: '1', verse: '1', el: '#app', foo: 'chapter' });
  cn2 = new ChapterNumber({chapter: '1', verse: '1', el: '#app', foo: 'verse' });
  
  // _dw move this into Commmentary Model
  
  var base = "/genesis/md/chapters/"
  var chapter = cn.chapter
  var verse = cn.verse
  var end = '/commentary.md'
  var commentary = base + chapter + '/' + verse + end
  
  var converter = new showdown.Converter();

  $.get(commentary, function (data) {
    html = converter.makeHtml(data);
    $('body').append(html);
  });
});
