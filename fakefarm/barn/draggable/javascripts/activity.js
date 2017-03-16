(function(){
  window.Activity = Activity;
  countId = 0;
  var $submitButton;

  function Activity(features){
      countId ++;
      var self = this;
      this.text = features._text;
      this.category = features._category;
      this.duration = features._duration;
      this.frequency = features._frequency;
      this.countId = countId;
  }

  Activity.prototype = {};
})();
