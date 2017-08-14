$(function () {
  $('.shape-btn').on('click', function () {
    $('.shape').toggleClass('square').toggleClass('circle');
  });
  var $amount = 50;
  var $dblclick = 300;
  
  $('.down-btn').on('click', function () {
    var $top = parseInt($('.shape').css('top'));
    $top += $amount;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  
  $('.down-btn').on('dbclick', function () {
    var $top = parseInt($('.shape').css('top'));
    $top += $dblclick;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  
  $('.up-btn').on('dblclick', function () {
    var $top = parseInt($('.shape').css('top'));
    $top += -$dblclick;
    var value = $top + 'px'
    $('.shape').css('top', value);
  });
  
  $('.right-btn').on('dblclick', function () {
    var $left = parseInt($('.shape').css('left'));
    $left += $dblclick;
    var value = $left + 'px'
    $('.shape').css('left', value);
  });
  
  $('.left-btn').on('dblclick', function () {
    var $left = parseInt($('.shape').css('left'));
    $left += -$dblclick;
    var value = $left + 'px'
    $('.shape').css('left', value);
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
