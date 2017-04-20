var Mix = Backbone.Model.extend({})
var Mixes = Backbone.Collection.extend({})

var MixesView = Backbone.View.extend({
  el: $("#playlistsLinks"),
  events: {
    'click': 'showMix'
  },

  showMix: function (e) {
    e.preventDefault();
    var playlist = new Playlist({model: this.model });
    debugger;
    // _dw why is this only showing DCC playlist?

    playlist.render();
  },

  template: _.template("<li><a href='' class='mix-link'><%= name %></a></li>"),
  render: function () {
    var temp = this.template({name: this.model.get('name')})
    this.$el.append(temp)
    return this;
  }
});

var britMix  = new Mix({ uri: '%3Apitchfork%3Aplaylist%3A1DH7lyOuo1jwKxK5J1f707', name: 'Brit Pop' });
var dcc      = new Mix({ uri: '%3Awwwoodall%3Aplaylist%3A5XsrPJUWYEUYLGeyi0o4U2', name: 'Death Cab is Cute'  });
var mixes    = [ britMix, dcc ]
var Abcd     = new Mixes(mixes);

Abcd.each(function (mix) {
  new MixesView({model: mix}).render();
});
Abcd.add(mixes);

var Playlist = Backbone.View.extend({
  el: $('#app'),
  template: _.template($('#playlistTemplate').html()),
  render: function () {
    this.$el.html(
      this.template({
        uri: this.model.get('uri')
      }
    ));
    return this;
  }
});
