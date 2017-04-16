(function(){
  window.Controller = Controller;

  function Controller() {}

  Controller.prototype = {
    init: function(theAction) {
      settings = this.settings;
      this.collector(theAction);
    },
    settings: {
      newButton: document.getElementById('new-button'),
      entry: document.getElementById('goal-entry'),
      body: document.getElementById('body'),
    },
    collector: function(act) {
      act.showBox();
      act.hideBox();
      act.entries();
    }
  };
})();
