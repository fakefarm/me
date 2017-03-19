var COUNTDOWN = {
  init: function(){
    var clock, time = '';
    time = prompt('what time?');
    this.setup(time);
  },
  setup: function(time){
    clock = document.getElementById('clock');
    clock.innerHTML = time;
    this.reduce(time);
  },
  reduce: function(time){
    var counter = setInterval(function(){
      if (time > 0) {
        time -= 1;
        clock.innerHTML = time;
      } else {
        alert('done');
        clearInterval(counter);
      }
    }, 1000);
  }
};

window.onload = function (){
  COUNTDOWN.init();
};

    // setInterval(function(){
    //   console.log('testing');
    // }, 1000);


