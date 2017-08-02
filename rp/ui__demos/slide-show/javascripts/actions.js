(function(){

  window.Actions = Actions;

  var timer;

  function Actions(slideshow){
    function gotime(){
      timer = setInterval(function(){ slideshow.moveRight(); }, 1800);
    }

    function stopTime(){
      window.clearInterval(timer);
    }

    $('#slideshow').mouseenter(function(){
      $('#right').click(function(){ slideshow.moveRight(); });
      $('#left').click(function(){ slideshow.moveLeft(); });
      stopTime();
    });

    $('#slideshow').mouseleave(function(){
      gotime();
    });

    gotime();
  }
})();
