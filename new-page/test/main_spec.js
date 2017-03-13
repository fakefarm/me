//
// describe("views", function () {
//   it("can be instantiated", function () {
//       var vue = new Vue();
//       expect(vue.el).toEqual('div')
//   });
// });

describe("models", function () {
  describe("Triangle Model", function () {
    var triangleModel;

    beforeEach(function () {
      triangleModel = new TriangleModel({cat: 'personal'});
    })

    it("can be instantiated", function () {
      expect(triangleModel.get('cat')).toBe('personal');
    });

    it("has children", function () {
      expect(triangleModel.children()).toEqual(['body', 'soul', 'spirit']);
    });
  });
});
