
// $(document).ready(function(){
  $.ajax({
    url: "../footer/index.html",
    context: document.body
  }).done(function(a,b,c) {
    $( '.footer-1' ).append( a );
  });
// });
