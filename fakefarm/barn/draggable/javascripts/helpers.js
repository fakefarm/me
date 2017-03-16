// TO DO
// Move these into the file that uses these functions.

function clearForm() {
  $(':input').not(':button, :radio, :submit, :reset, :hidden').val('');
  $("input:radio[name=category]:checked").removeAttr('checked');
}

function setupDom(){
  $("#new-button").click(function(){
    $('.new-activity').toggleClass('open-drawer');
    $('.m-content').toggleClass('m-content-pushed');
  });
}

function newActivityKey(){
  $(window).keypress(function(e){
    if (e.charCode === 110) {
      $('.new-activity').addClass('open-drawer');
      $('.m-content').addClass('m-content-pushed');
    }
  });
}

function formInit(){
  var act, template, $text, $category, $duration, $frequency;

  $('form').submit(function(e){
    $text = $('#activity-text').val();
    $category = $("input:radio[name=category]:checked").val();
    $duration = $("#duration option:selected").val();
    $frequency = $("#frequency option:selected").val();

    act = new Activity({
      _text: $text,
      _category: $category,
      _duration: $duration,
      _frequency: $frequency
    });

    function addToDom (act){
      return "<div data-drag='true' class='gutter-activity " +
      act.category +
      "' id=activity_'" +
      act.countId +
      "'>" +
      act.text +
      "</div>";
    }

    e.preventDefault();
    console.log(act);

    $('#gutter').append(addToDom(act));
    $("[data-drop='area']").sortable({
      items: "[data-drag='true']",
      beforeStop: function(){
        console.log("beforeStop",arguments);
      },
      connectWith: '#gutter'
    });
    $('#gutter').sortable({
      connectWith: "[data-drop='area']",
      items: '[data-drag="true"]'
    });


    clearForm();
    $('.new-activity').toggleClass('open-drawer');
    $('.m-content').toggleClass('m-content-pushed');
  });
}

function createAgendas(){
  $('[data-day=events]').each(function(){
    new Agenda({
      day: this.id
    });
  });
}

