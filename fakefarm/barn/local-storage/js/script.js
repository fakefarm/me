$(function(){
  $('div .active').removeClass('active')
  var state;
  state = localStorage.getItem('visited');

  if(state === "true") {
    $('.before').addClass('active');
  } else {
    $('.new').addClass('active');
  }
  $('#pad').on('mouseenter', function(){
      localStorage.setItem('visited', 'true');
      $('div .active').removeClass('active');
      $('.during').addClass('active');
  });
  $('#pad').on('mouseleave', function(){
    $('div .active').removeClass('active')
    $('.after').addClass('active');
  })

  $('#reset').click(function(e){
    localStorage.clear();
  });
})


// check local storge if user has visited
// if so, add class to visited
// if not, add a 'before - you are new here!'
// if reset = true, put the visited to just 'unopened'
