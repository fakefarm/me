function versionOne(){
  var h = ['#', '# #', '# # #', '# # # #', '# # # # #', '# # # # # #', '# # # # # # #' ];
  var $t = $('.triangle-wrapper-1');
  _.each(h, function(hash){
    $t.append("<p>" + hash + "</p>");
  });
}

function versionTwo(){
  function Hash(qty) {
    this.quantity = qty;
  }

  Hash.prototype = {
    getQty: function() {
      var str = '';
      var $t = $('.triangle-wrapper-2');
      _.times(this.quantity, function(){
        str = str + "# ";
        $t.append("<p>" + str.replace(/ $/, "") + "</p>");
      });
    }
  };
  var hash = new Hash(7);
  hash.getQty();
}


function chapterTwoExercise1() {
  versionOne();
  versionTwo();
}

// FizBuzz

function fizzBuzz(quantity) {
  _.times(quantity, function(i) {
    i += 1; // start at 1 rather than 0
    checkNumberForFizzBuzz(i);
  });
}

function checkNumberForFizzBuzz(number){
  if ( number % 3 === 0 &&  number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (  number % 3 === 0) {
    console.log("Fizz");
  } else if ( number % 5 === 0 ) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}

fizzBuzz(20);

// chapter 2
$(document).ready(function() {
  chapterTwoExercise1();
});




