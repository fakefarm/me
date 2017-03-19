$(document).ready(function(){
  $('#close-drawer').on('click', function() {
    $('.about').toggleClass('drawer-out').toggleClass('drawer-in');
    $('.container').toggleClass('with-drawer').toggleClass('full');
    if ($('.about').hasClass('drawer-in')) {
      $('.close-drawer').text('o');
    } else {
      $('.close-drawer').text('x');
    }
  });
  setTimeout(function() {
  var height = $('.wrapper').height();
  $('.drawer-out').height(height);
  }, 0);
});
