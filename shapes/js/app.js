$(function () {
  $('.shape-btn').on('click', function () {
    $('.shape').toggleClass('square').toggleClass('circle');
  });
  var $amount = 50;
  
  $('.down-btn').on('click', function () {
    var $top = parseInt($('.shape').css('top'));
    $top += $amount;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  $('.up-btn').on('click', function () {
    var $top = parseInt($('.shape').css('top'));
    $top += -$amount;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  $('.right-btn').on('click', function () {
    var $left = parseInt($('.shape').css('left'));
    $left += $amount;
    var value = $left + 'px'
    $('.shape').css('left', value);
  });
  $('.left-btn').on('click', function () {
    var $left = parseInt($('.shape').css('left'));
    $left += -$amount;
    var value = $left + 'px'
    $('.shape').css('left', value);
  });
})
