var Work = Backbone.Model.extend({});

var Standup = Backbone.View.extend({
  events: {
    'keyup.text' : function(e) {
      this.updateTask(e);
    },
    // 'blur' : function () {
    //   this.render();
    // }
  },

  updateTask: function (e) {
    var text =  String.fromCharCode(e.keyCode);
    // debugger;
    this.model.set('task', text)
    return this;
  },

  // _dw need to understand the template
  template: _.template(" \
              <input type='text' class='text'> \
              <h1>task: <%= name %> | <%= age %></h1> \
            "),

  updateModel: function (kkey) {
    // _dw get used to converting dynamic arguments into hash keys
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
    // _dw get used to writing code then extracting it into a function
    this.updateTemplate();
    return this;
  },
});

var work = new Work({ task: 'learn BB', kkey: 'name' });

var standup = new Standup({ model: work });

// $('#container').html(standup.render().$el);

// everytime there is a keypress inside the input
