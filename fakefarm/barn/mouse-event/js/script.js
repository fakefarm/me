$( document ).on( "mousemove", function( event ) {

  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

  var x = event.pageX
  var y = event.pageY
  var leftWidth = $('#middle').width()

  // header
  if (y < 200) {
    $('#top').addClass('show');
  } else if ( y > 200 ) {
    $('#top').removeClass('show');
  }

  // left content

  if (y > 200 && x < leftWidth) {
    $('#middleContent').addClass('show');
  } else if ( y < 200 || x > leftWidth) {
    $('#middleContent').removeClass('show');
  }

  // footer content
  if (y > 600) {
    $('#footerContent').addClass('show');
  } else if (y < 600) {
    $('#footerContent').removeClass('show');
  }
});


