var _val_1 = '';
var _val_2 = '';
var _number_1 = '';
var _number_2 = '';

function $(id){
  return document.getElementById(id);
}

function calcs(){
  _val_1 = $('val_1');
  _val_2 = $('val_2');
  _number_1 = $('number_1');
  _number_2 = $('number_2');
  _val_2.onkeyup = function(){ weLive(); };
}

function weLive(){
  var _button = $('start');
  var _total = $('total');
  var value1 = Number(_val_1.value);
  var value2 = Number(_val_2.value);
  var myTotal = value1 + value2;
  _button.onclick = function(){
    _total.innerHTML = myTotal;
  };
}

window.onload = function(){
  calcs();
};

