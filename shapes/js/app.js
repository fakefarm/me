$(function () {
  var $amount = 50;
  var $dblclick = 300;
  var $top;
  var $left;

  $('.shape-btn').on('click', function () {
    $('.shape').toggleClass('square').toggleClass('circle');
  });
  
  $('.direction-btn').on('click', function () {
    $top = parseInt($('.shape').css('top'));
    $left = parseInt($('.shape').css('left'));
  });
  
  $('.down-btn').on('click', function () {
    $top += $amount;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  
  $('.down-btn').on('dblclick', function () {
    $top += $dblclick;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  
  $('.up-btn').on('dblclick', function () {
    $top += -$dblclick;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  
  $('.right-btn').on('dblclick', function () {
    $left += $dblclick;
    var value = $left + 'px'
    $('.shape').css('left', value);
  });
  
  $('.left-btn').on('dblclick', function () {
    $left += -$dblclick;
    var value = $left + 'px'
    $('.shape').css('left', value);
  });
  
  $('.up-btn').on('click', function () {
    $top += -$amount;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  
  $('.right-btn').on('click', function () {
    $left += $amount;
    var value = $left + 'px'
    $('.shape').css('left', value);
  });
  
  $('.left-btn').on('click', function () {
    $left += -$amount;
    var value = $left + 'px'
    $('.shape').css('left', value);
  });
})
