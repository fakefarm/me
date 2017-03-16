$(document).ready(function(){
  setTimeout(function(){
    $('#landing').addClass('hide-landing');
  }, 500);

  setTimeout(function(){
    $('#landing').remove();
  }, 1000);
});
