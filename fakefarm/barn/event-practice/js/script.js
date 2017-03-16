$(document).ready(function(){
  $('#link-one').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.container').css('background', '#5FFFB2');
    $('#link-one').trigger('boom');
  });

  $('#link-one').on('mousedown', function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.container').css('background', '#FF72D6');
    $('#counter').append('x');
  });

  $('body').bind('boom', function(){
    $('body').css('background', '#EEFF59');
  });
});

