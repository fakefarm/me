var Work = Backbone.Model.extend({});

var Standup = Backbone.View.extend({
  model: Work,

  template: _.template($("#template").html()),

  updateModel: function (kkey) {
    attr = {}
    return attr[kkey] = this.model.get('task')
  },

  // _why doesn't this work?...
  // key: this.model.get('kkey')
  // seems that you can't tie a model in with the view's keys that are not evaluated later, by a function.


  key: function () {
    return this.model.get('kkey')
  },

  updateTemplate: function () {
    var data = {};
    data[this.key()] = this.updateModel(this.key());
    data2 = _.extend(data, { age: 39 });
    this.$el.html(
      this.template(
        data2
      )
    );
  },

  render: function(){
    this.updateTemplate();
    return this;
  },
});

var work = new Work({ task: 'learn BB', kkey: 'name' });

var standup = new Standup({ model: work });

$('#container').html(standup.render().$el);
