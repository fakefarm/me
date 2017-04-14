# Cross Broswer & Responsive Work-flow

When you build websites for yourself, you typically view it in a modern browser like Chrome, Firefox, or safari.

However, when you start developing for other people, you have to take into consideration that their interests are to look good to every browser.

This is what separates recreational web designers from the pros. Cross-browser and responsive web design are both views that you need to develop.

Correct me if I'm wrong, but web designers need to make the site look good for the following screens;

## Responsive
- Mobile
- Tablet
- Desktop
- Large display

## 5 Browsers to test.
- IE 8, 9
- Safari
- Firefox
- Chrome


Cross browser tools
1. Normalize.css
2. Modernizer.js
3. HTML5Shim

Responsive
1. SCSS Mixins
2. Neat
3. Neat Mixins

Misc
SMACSS


MLC - Modernizr checks if specific features are available in the user's browser. Good for client-side web apps, etc. Like I have it check for SVG support, & then replace the SVG's on the page with corresponding PNG's if it doesn't support it. You build Modernizr to the specific features you want to test for on the website where you download it But you can also choose to include html5shiv along with it. So I just do that since I'm already using Modernizr


This is a tedious exercise, but essential in designing proper sites.

Nobody chooses to learn to cross browser test.
## HTML Elements
## Properties that don't work in IE
## Setup
## Files
## Workflow
## Gotchas
## Tools
- Neat
- Bourbon
- Rails
- Xray gem
- Dev tools
- scss
- neat mixins

## The good browsers
IE 9, Safari, Firefox, Chrome

## IE 8
IE is the last zombie of the old world.

## Bigboy HTML

**Setup**
Eliminate Internet Explorer HTML5 Compatibility Problems

```
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

**setup**
Make sure you Use HTML5's DocType Declaration

```
<!DOCTYPE HTML>
```

## Modernizer

## HTML5Boilerplate
**review**  [Boilerplate](http://html5boilerplate.com/)

**review** [HTML5 Please - Use the new and shiny responsibly](http://html5please.com/)

[28 HTML5 Features, Tips, and Techniques you Must Know | Nettuts+](http://net.tutsplus.com/tutorials/html-css-techniques/25-html5-features-tips-and-techniques-you-must-know/)

[23 Must-Read Tutorials for Advanced HTML5/CSS3 Coders - DzineBlog.com](http://dzineblog.com/2011/11/23-must-read-tutorials-for-advanced-html5css3-coders.html)

[HTML5 Tutorial: Advanced context path painting](http://html5tutorial.com/advanced-path-painting/)

[New HTML5 Tutorials on Frontend Development Techniques | SpyreStudios](http://spyrestudios.com/new-html5-tutorials-on-frontend-development-techniques/)

[HTML5 Tutorial -- Quick Introduction to HTML 5](http://www.coreservlets.com/html5-tutorial/)

[40+ Useful HTML5 Tutorials And Techniques | Free and Useful Online Resources for Designers and Developers](http://www.smashingapps.com/2013/01/31/40-useful-html5-tutorials-and-techniques.html)

[40+ Useful HTML5 Examples and Tutorials](http://www.tripwiremagazine.com/2012/03/html5-examples-tutorials.html)

[HTML5 Tutorial – Advanced | Web Design Tutorials](http://www.timothytraining.net/web-design-tutorial-blog/category/html5-tutorial-advanced/)

[Advanced HTML5 Tutorials For High Level Developers](http://creativedesignmagazine.com/advanced-html5-tutorials-for-high-level-developers.html)

[Integrating Canvas into your Web App - HTML5 Rocks](http://www.html5rocks.com/en/tutorials/canvas/integrating/)

[20+ Best Canvas Tutorials and Examples That Will Make You A Canvas Master | Code Theory](http://codetheory.in/20-best-canvas-tutorials-and-examples-that-will-make-you-a-canvas-master/)

[HTML5 & CSS3 Video Tutorial – Advanced Backgrounds Part 1  | Killersites Web Design Magazine](http://www.killersites.com/magazine/2011/html5-css3-video-tutorial-advanced-backgrounds-part-1/)


So, I realize I can't escape, or learn this half-heartedly. I am going to enroll myself into cross-browser/responsive design school. Below is a list of googling like crazy, and what I found in the process.

###[Can I use... Support tables for HTML5, CSS3, etc](http://caniuse.com/) **review**

###[Box Sizing | CSS-Tricks](http://css-tricks.com/box-sizing/) **review**

###[* { box-sizing: border-box } FTW - Paul Irish](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)  **review**

    /* apply a natural box layout model to all elements */
    *, *:before, *:after {
      -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
     }

###[Five Things You Should Know About HTML5 - Dive Into HTML5](http://diveintohtml5.info/introduction.html) **review**

###[How to Build Cross-Browser HTML5 Forms | Nettuts+](http://net.tutsplus.com/tutorials/html-css-techniques/how-to-build-cross-browser-html5-forms/)

###[HTML5 Introduction](http://www.w3schools.com/html/html5_intro.asp)

###[IE 10 Specific Styles | CSS-Tricks](http://css-tricks.com/ie-10-specific-styles/)

###[In the Woods – 15 CSS Tricks That Must be Learned](http://blog.themeforest.net/general/15-css-tricks-that-must-be-learned/)

###[Ten more CSS tricks you may not know](http://www.webcredible.co.uk/user-friendly-resources/css/more-css-tricks.shtml)

###[Quick Tip: How to Target IE6, IE7, and IE8 Uniquely with 4 Characters | Nettuts+](http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-how-to-target-ie6-ie7-and-ie8-uniquely-with-4-characters/)

###[5 CSS Tips to Make IE (You) Happy | Scarf*oo](http://scarfoo.com/archives/16)

###[Fast and dirty CSS trick for IE | Urbano's Blog](http://urbanoalvarez.es/blog/2010/03/11/fast-and-dirty-css-trick-for-ie/)

###[CSS trick for IE | Filip's Technical Blog](http://fczaja.blogspot.com/2010/01/css-trick-for-ie.html)

###[CSS - Quirks mode and strict mode](http://www.quirksmode.org/css/quirksmode.html#t10)

###[What happens in Quirks Mode in web browsers?](http://www.cs.tut.fi/~jkorpela/quirks-mode.html)


