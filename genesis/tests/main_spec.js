describe("Genesis is a BackboneJS app", function () {
  
  describe("The Views are tested.", function () {
    
    describe("TextView", function () {
      it("is a generic View for managing small text templates", function () {
        expect(TextView).toBeDefined();
      });
    });
    
    describe("CommentaryView", function () {
      it('contains commentary view logic', function () {
        expect(CommentaryView).toBeDefined();
      });
    });
  });

  describe("The Templates are tested", function () {
    describe("as actual templates.", function () {
      
      it("Chapter is the template for chapter numbers", function () {
        loadTemplate("chapter.html");
        $template = $(jasmine.template({chapter: 2}));
        
        expect($template.hasClass('p')).toBe(true);
        expect($template.text()).toBe("Chapter 2");
      });
      
      it("Vesre is the template for verses numbers", function () {
        loadTemplate("verse.html");
        $template = $(jasmine.template({verse: 4}));
        expect($template.hasClass('p')).toBe(true);
        expect($template.text()).toBe("Verse 4");
      });
    });
  });

  
});
