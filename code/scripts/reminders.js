setInterval(function() {
  var options = [
    ':thumbsup: *reminder* check jira',
    ':fire: *reminder* post standup',
    ':thumbsup: *reminder* check email',
    ':alarm_clock: *reminder* check calendar',
    ':thumbsup: *reminder* see how QA is doing',
    ':fire: *reminder* check in with Nathan',
    ':thumbsup: *reminder* Review backlog',
    ':thumbsup: *reminder* Coffee',
    ':fire: *reminder* Coffee',
    ':thumbsup: *reminder* Coffee',
    ':fire: *reminder* Coffee',
    ':thumbsup: *reminder* Coffee',
    ':tomato: *reminder* Code time',
    ':alarm_clock: *reminder* Code time',
    ':tomato: *reminder* Code time',
    ':tomato: *reminder* Code time',
    ':coffee: *reminder* Code time',
    ':tomato: *reminder* Code time',
    ':coffee: *reminder* Code time',
    ':bell: *reminder* Code time',
    ':tomato: *reminder* Code time'
  ];

  var r = Math.floor(Math.random() * 30);
  $('#msg_input div p').text('');
  if (r < 21) {
    $('#msg_input div p')
      .text(options[r])
      .submit();
  } else {
    $('#msg_input div p')
      .text(':done: done ')
      .submit();
  }
}, 500000);
