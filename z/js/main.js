
$(document).ready(function () {
  var bday = moment("2017-07-07");
  var now  = moment();
  var days = bday.diff(now, 'days') + 1;
  $("#bday").html(days);
});
