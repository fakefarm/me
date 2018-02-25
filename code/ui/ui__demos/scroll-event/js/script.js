$(document).ready(function(){

  $( window ).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $( "#position" ).text(scrollTop);
    checkHeight(scrollTop);
  });

  function checkHeight(pos) {
    if(pos > 73){
      $('.top-content').fadeIn();
    } else {
      $('.top-content').fadeOut();
    }
  }
});
