$(document).ready(function(){
  $('p').on('click', function() {
    $(this).addClass('highlight');
    $(this).html('Read!');
    $(this).fadeOut();
  })
})
