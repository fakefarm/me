function debounce(fn, delay) {
  var timeout = null;

  return function() {
    if (timeout !== null) {
      clearTimeout(timeout); // setTimeout returns an id, not undefined to reference.
    }

    var self = this,
        args = arguments;

    function foo () {fn.apply(self, args);}
    timeout = setTimeout(foo, delay);
  };
}
