var COUNTDOWN = {
  init: function(){
    var clock;
    var counter = '';
    var _time;
    this.start();
    this.stop();
    this.record();
  },
  start: function(){
    var start = document.getElementById("theStart");
    clock = document.getElementById('clock');
    var time = 0;
    start.onclick = function(){
      counter = setInterval(function(){
        time += 1;
        clock.innerHTML = time;
      },1000);
    };
  },
  stop: function() {
    var _stop = document.getElementById('stop');
    _stop.onclick = function() {
      var resume = document.getElementById('theStart');
      resume.value = 'resume';
      clearInterval(counter);
    };
  },
  record: function(){
    var log = document.getElementById('log-list');
    var _record = document.getElementById('record');
    _time = document.getElementById('clock');
    _record.onclick = function() {
      var entry = document.createElement('li');
      entry.innerHTML = _time.innerHTML;
      log.appendChild(entry);
    };
  }
};

window.onload = function (){
  COUNTDOWN.init();
};
