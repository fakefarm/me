// describe("Debounce", function() {
//   describe('basics', function(){
//     it('is a real function', function(){
//       var deb = debounce;
//       expect(typeof debounce).toEqual('function');
//     });
//   });

//   describe('functionality', function() {
//     var helloCallback;

//     beforeEach(function(){
//       helloCallback = jasmine.createSpy('helloCallback');
//       jasmine.clock().install();
//     });

//     afterEach(function(){
//       jasmine.clock().uninstall();
//     });

//     it('returns a function', function() {
//       var deb = debounce(helloCallback, 100);
//       expect(typeof deb).toEqual('function');
//     });

//     it('calls the original function when invoked after the specified timeframe', function() {
//       var debouncedHello = debounce(helloCallback, 100);
//       debouncedHello();
//       expect(helloCallback).not.toHaveBeenCalled();
//       jasmine.clock().tick(101);
//       expect(helloCallback).toHaveBeenCalled();
//     });

//     it('does not just return the original function', function(){
//       var debouncedHello = debounce(helloCallback, 100);
//       expect(debouncedHello).not.toBe(helloCallback);
//     });

//     it('will execute the original function only once within a specified timeframe', function () {
//       var debouncedHello = debounce(helloCallback, 100);
//       debouncedHello(); //time is 0
//       jasmine.clock().tick(5); //set time to  5
//       debouncedHello(); //time is 5
//       expect(helloCallback.calls.count()).toBe(0); //time is 5
//       jasmine.clock().tick(101); //tick 101
//       expect(helloCallback.calls.count()).toBe(1); //time is 106
//     });

//     it('calls the function with arguments', function() {
//       var debouncedHello = debounce(helloCallback, 100);
//       debouncedHello('a', 'b');
//       jasmine.clock().tick(101);
//       expect(helloCallback).toHaveBeenCalledWith('a', 'b');
//     });
//   });
// });


describe("generateAdder", function() {

  it('takes an argument of what the number should add with', function() {

    var fiveAdder = generateAdder(5),
        seven = fiveAdder(2);

    expect(seven).toEqual(7);
    // twoHundredFifteenAdder = generateAdder(215);
  });

  it('instance of function takes an argument and adds that number to original figure', function(){
    // fiverAdder(4).shouldEqual(9);
    // twoHundredFifteenAdded(19) => 234;

  });
});



