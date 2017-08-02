var Mix = Backbone.Model.extend({})

var MixesView = Backbone.View.extend({
  initialize: function () {
    this.playlist = new Playlist({model: this.model });
  },
  events: {
    'click': 'showMix'
  },
  el: $("#playlistsLinks"),
  showMix: function (e) {
    e.preventDefault();
    this.playlist.render();
  },
  template: _.template("<li><a href='' class='mix-link'><%= name %></a></li>"),
  render: function () {
    var temp = this.template({name: this.model.get('name')})
    this.$el.append(temp)
    return this;
  }
});
var Playlist = Backbone.View.extend({
  el: $('#app'),
  template: _.template($('#playlistTemplate').html()),
  render: function () {
    this.$el.html(
      this.template({
        uri: this.model.get('uri'),
        name: this.model.get('name')
      }
    ));
    debugger;
    return this;
  }
});


var britMix  = new Mix({ class: 'a', uri: '%3Apitchfork%3Aplaylist%3A1DH7lyOuo1jwKxK5J1f707', name: 'Brit Pop' });
var dcc      = new Mix({ class: 'b', uri: '%3Awwwoodall%3Aplaylist%3A5XsrPJUWYEUYLGeyi0o4U2', name: 'Death Cab is Cute' });
var mixes    = [ britMix, dcc ]

_.each(mixes, function (mix) {
  new MixesView({model: mix}).render();
});
