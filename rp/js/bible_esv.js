// exodus

var chapter = '2';

function visit_exodus(chapter) {
  return 'https://www.bible.com/bible/59/EXO.' + chapter + '.ESV';
}

window.location.href = visit_exodus(chapter);

// psalms
var chapter = '45';

function visit_psalms(chapter) {
  return 'https://www.bible.com/bible/59/PSA.' + chapter + '.ESV';
}

window.location.href = visit_psalms(chapter);

// open
function url() {
  var string = jQuery('audio')
    .html()
    .slice(15, -22);
  return 'http://' + string;
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

openInNewTab(url());
