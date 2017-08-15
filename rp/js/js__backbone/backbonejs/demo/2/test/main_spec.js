describe("you're in business", function () {
  it("find me in main_spec.js", function () {
    expect(true).toBe(true);
  });
});


describe("the whole app is found in #app", function () {
  var app = $('#app');
  expect(app.length).toBe(1)
})
