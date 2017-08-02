(function(){
  window.SlideShow = SlideShow;

  var $prev, $next;

  function SlideShow(settings){}

  SlideShow.prototype = {
    moveLeft: function() {
      if ($('#active').data('position') == 'first'){
        this.visitLast();
      } else {
        this.previous();
      }
    },
    moveRight: function(){
      if ($('#active').data('position') == "last") {
        this.startOver();
      } else {
        this.proceed();
      }
    },
    visitLast: function(){
      $('#active').removeClass('active').attr('id', '');
      $("[data-position=last]").addClass('active').attr('id', 'active');
    },
    previous: function() {
      $prev = $('#active').prev('img').addClass('active');
      $('#active').removeClass('active').attr('id', '');
      $($prev).attr('id', 'active');
    },
    startOver: function() {
      $('#active').removeClass('active').attr('id', '');
      $("[data-position=first]").addClass('active').attr('id', 'active');
    },
    proceed: function() {
      $next = $('#active').next('img').addClass('active');
      $('#active').removeClass('active').attr('id', '');
      $($next).attr('id', 'active');
    }
  };
})();

