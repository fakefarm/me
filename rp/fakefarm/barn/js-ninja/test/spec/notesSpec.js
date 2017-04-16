describe("Chapter 3", function() {

  describe('Setup', function() {

    it('A useless function works', function() {

      var text = 'Domo arigato!"';

      function useless(callback) { return callback;}

      expect(useless(text)).toEqual(text);
    });

    it('A simple reverse sort function', function() {

      var final = [5,4,3,2,1];
      var begin = [1,5,3,4,2];

      function reverseSort(array){
        return array.sort(
          function(val1, val2) {
            return val2 - val1;
        });
      }

      expect(reverseSort(begin)).toEqual(final);
    });
  });

  describe('Declarations', function() {

    describe('The isNimble function', function(){

      function isNimble(){ return true; }

      it('is defined', function() {

        expect(typeof isNimble).toEqual('function');

      });

      it('has a name', function(){

        expect(isNimble.name).toEqual('isNimble');

      });
    });

    describe('The canFly function', function () {
      var canFly = function () {
        return true;
      }
      it('is defined', function() {
        expect(typeof canFly).toEqual('function');
      });
      it('has no name', function() {
        expect(canFly.name).toEqual('');
      });
    });

    describe('The isDeadly function', function(){
      window.isDeadly = function () {
        return true;
      }
      it('is defined', function() {
        expect(typeof isDeadly).toEqual('function');
      });
    });
  });

  describe('Invocations',function(){
    describe('as a method', function() {

      function creep(){ return this; }
      var sneak = creep;

      it('The creep function is on the window', function(){
        expect(creep()).toBe(window);
      });

      it('Sneaking in the window', function() {
        expect(sneak()).toBe(window);
      });

      it('inside an object changes _this_ to the object', function() {

        var ninja1 = {
          skulk: creep
        };

        var ninja2 = {
          skulk: creep
        };

        expect(ninja1.skulk()).toBe(ninja1);
        expect(ninja2.skulk()).toBe(ninja2);
      });
    });
    describe('as a constructor', function() {
      function Ninja() {
        this.skulk = function() { return this; };
      }
      it('assigns _this_ to the new object', function() {
        var ninja1 = new Ninja();
        var ninja2 = new Ninja();

        expect(ninja1.skulk()).toBe(ninja1);
        expect(ninja2.skulk()).toBe(ninja2);
      });
    });
    describe('using apply() and call()', function() {
      it('is used to pass _this_ and this accompanying arguments', function() {
        function juggle () {
          var result = 0;
          for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
          }
          this.result = result;
        }

        var ninja1 = {};
        var ninja2 = {};

        juggle.apply(ninja1, [1,2,3,4]);
        juggle.call(ninja2, 5,6,7,8);

        expect(ninja1.result).toEqual(10);
        expect(ninja2.result).toEqual(26);
      });
    });
  });

  describe('A for-each function', function () {
    it('to demonstrate setting a function context', function() {

      function forEach (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback.call(list[i], i);
        }
      }

      var weapons = ['bo', 'staff', 'pan'];
      forEach(
          weapons,
          function(index) {
            expect(this).toEqual(weapons[index]);
      });
    });
  });
});

describe("Chapter 4", function() {
  describe("Recursion", function() {
    it('Chirping using a named function', function(){
      function chirp(n) {
        return n > 1 ? chirp( n - 1 ) + "-chirp" : "chirp";
      }
      expect(chirp(3)).toBe("chirp-chirp-chirp");
    });

    it('Method recursion within an object', function(){
      var ninja = {
        chirp: function(n) {
          return n > 1 ? ninja.chirp(n-1) + "-chirp" : "chirp";
        }
      };
      expect(ninja.chirp(3)).toBe("chirp-chirp-chirp");
    });
    it('Recursion using a missing function reference', function() {
      var ninja = {
        chirp: function (n) {
          return n > 1 ? ninja.chirp(n - 1) + "-chirp" : "chirp";
        }
      };

      ninja = {};
      expect(ninja.chirp).toBe(undefined);

      var ninja = {
        chirp: function (n) {
          return n > 1 ? this.chirp(n - 1) + "-chirp" : "chirp";
        }
      };
      var samurai = { chirp: ninja.chirp };
      ninja = {};
      ninja = {};
      expect(samurai.chirp(3)).toBe("chirp-chirp-chirp");
    });

    it('Using an inline function in a recursive fashion', function() {
      var ninja = {
        chirp: function signal (n) {
          return n > 1 ? signal(n-1) + "-chirp" : "chirp";
        }
      };
      expect(ninja.chirp(3)).toBe('chirp-chirp-chirp');
      var samurai = { chirp: ninja.chirp };
      ninja = {};
      expect(samurai.chirp(3)).toBe('chirp-chirp-chirp');
    });
    it('storing a collection of unique functions. This test shows that functions have the ability to add a property, which can be helpful to reference a particular function. That is useful for things like memoization', function(){
      // _DW question - how, where, and why would we build a cache of functions?

      var store = {
        nextId: 1,
        cache: {},
        add: function(fn) {
          if (!fn.id) {
            fn.id = store.nexId++;
            return !!(store.cache[fn.id] = fn);
          }
        }
      };
      function ninja(){}
      expect(store.add(ninja)).toBe(true);
      expect(!store.add(ninja)).toBe(false);
    });
    it('(Listing 4.9) Memoizing previously computed values', function(){

      function isPrime (value) {
        if (!isPrime.answers) isPrime.answers = {};

        if (isPrime.answers[value] != null) {
          return isPrime.answers[value];
        }

        var prime = value != 1;

        for (var i = 2; i < value; i++) {
          if(value % i == 0) {
            prime = false;
            break;
          }
        }
        return isPrime.answers[value] = prime;
      }

      expect(isPrime(5)).toBe(true);
      expect(isPrime.answers[5]).toBe(true);
    });
    it('(listing 4.10) simulating array-like methods', function() {
    });
    it('(listing 4.11) Generate min() and max() functions for arrays', function() {
      function smallest(array) {
        return Math.min.apply(Math, array);
      }
      function largest(array) {
        return Math.max.apply(Math, array);
      }
      expect(smallest([0,1,2,3])).toEqual(0);
      expect(largest([0,1,2,3])).toEqual(3);
    });

    it('4.12 - Traversing variable-length argument lists', function() {
      function merge(root) {
        for (var i = 0; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            root[key] = arguments[i][key];
          }
        }
        return root;
      }
      var merged = merge(
        { name: "Batou"},
        { city: "Niihama"}
        );
      expect(merged.name).toEqual('Batou');
      expect(merged.city).toEqual('Niihama');
    });
    it('4.14 slicing the arguments list', function() {
      function multiMax(multi) {
        return multi * Math.max.apply(Math,
          Array.prototype.slice.call(arguments, 1));
      }
      expect(multiMax(3,1,2,3)).toEqual(9);
    });

    xit('4.15 addMethod method-overloading function', function() {

      function addMethod(object, name, fn) {
        var old = object[name];
        object[name] = function(){
          if(fn.length == arguments)
            return fn.apply(this, arguments);
          else if(typeof old == 'function')
            return old.apply(this, arguments);
        };
      }

      var ninjas = {
        values: ["Abe Lincoln", "Ben Bubar", "Chuck Norris"]
      };

      addMethod(ninjas, 'find', function(){
        return this.values;
      });

      addMethod(ninjas, 'find', function(first, last){
        var ret = [];
        for(var i = 0; i < this.values.length; i++)
          if(this.values[i] == (first + " " + last))
            ret.push(this.values[i]);
        return ret;
      });

      expect(ninjas.find().length).toEqual(3);
    });
  });
});

describe("Chapter 5", function(){
  describe("Closures", function(){
    it('5.2 a not so simple closure', function() {
      var outerValue = 'ninja';
      var later;
      function outerFunction() {
        var innerValue = 'samurai';
        function innerFunction(){
          expect(outerValue).toBe('ninja');
          expect(innerValue).toBe('samurai');
        }
        later = innerFunction;
      }
      outerFunction();
      later();
    });

    it('5.3 What else closures can see - QUESTION - Why & how can innerFunction see this but outer cannot?', function() {

      var outerValue = 'ninja';
      var later;

      function outerFunction() {

        var innerValue = 'samurai';

        function innerFunction(paramValue) {
          expect(outerValue).toBe('ninja');
          expect(innerValue).toBe('samurai');
          expect(paramValue).toBe('wakizashi');
          expect(tooLate).toBe('ronin');
        }

        expect(tooLate).toBe('ronin');
        later = innerFunction;
      }

      expect(tooLate).toBe(undefined);
      var tooLate = 'ronin'; // _dw Why & how can innerFunction see this but outer can't?
      outerFunction();
      later('wakizashi');
    });

    it('using closures to approximate private variables', function() {

      function Ninja() {
        var feints = 0;

        this.getFeints = function() {
          return feints;
        };

        this.feint = function() {
          feints++;
        };
      }

      var ninja = new Ninja();
      ninja.feint();
      expect(ninja.getFeints()).toEqual(1);
      expect(ninja.feints).toBe(undefined);
    });

    it('5.6 using a closure in a timer interval callback', function() {



    });
  });
});

