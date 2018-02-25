var music = document.getElementsByTagName('audio').jp_audio_0.src;
var node = document.createElement("a");
node.setAttribute("href", music);
var textnode = document.createTextNode("download", "");
node.appendChild(textnode);
document.getElementsByClassName("sidebar")[0].appendChild(node);   
