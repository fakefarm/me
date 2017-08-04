describe("ChapterNumberView", function () {
  describe("setup", function () {
    var chapterNumberView;
    
    beforeEach(function () {
      chapterNumberView = new ChapterNumber({chapter: 5});
    });
    
    it("is a BackBone View", function () {
      expect(chapterNumberView).toBeDefined();
    });
  });
});

describe("Templates", function () {
  describe("ensures they are what they are", function () {
    
    it("Chapter Template", function () {
      loadTemplate("chapter.html");
      $template = $(jasmine.template({chapter: 2}));
      
      expect($template.hasClass('p')).toBe(true);
      expect($template.text()).toBe("Chapter 2");
    });
    
    it("Vesre Template", function () {
      loadTemplate("verse.html");
      $template = $(jasmine.template({verse: 4}));
      expect($template.hasClass('p')).toBe(true);
      expect($template.text()).toBe("Verse 4");
    });
  });
});
