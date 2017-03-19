// var el = document.getElementById("header");
// if (classie.has(el,"sweet")) {
//     classie.remove(el,"sweet");
// } else {
//     classie.add(el,"sweet");
// }

var tags = document.getElementsByTagName('section');

for(i=0; i< tags.length; i ++) {
  tags[i].onclick = manage;
}

function manage() {
  classie.toggle(this, 'inactive');
  classie.toggle(this, 'active');
}
