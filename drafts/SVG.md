# SVG

It wasn't until Chris Coyer's talk at [An Event Apart]() did I really begin to give SVG's a second pass. 

Now I'm looking at [Code School's SVG]() and it's giving me a better understanding of what's going on.
  
SVG is built like another version of HTML. Technically, like XML but since I never worked with XML I'm going to keep the analogy with HTML. Why? Because I can because it's neither HTML OR SVG. _Anywhoo_

I bring that up because SVG begins with wrapped `<svg>` tags. Then, you create specific shapes based on what you want them to do. Shapes include `<line>`, `<polygon>`, `<circle>`, `<rect>`

There's something bitter sweet about hand coding SVG. It's cool for now and I imagine I'll want to pick it up. But I can already see that knowing this language by hand will empower me to do some cool things with CSS that I wasn't doing when designing vector images in Illustrator. I think that's what most intrigues me about learning to write SVG by hand. These shapes can take be styled using CSS which is awesome. The only exception however, is when it comes to the coordinates. 

Remember when you wondered if X/Y graphs would ever help you in the real world? Well, finally we have a reward for learning those things! Meaning syntax will look like the following

`<rect x="36" y="113" class='my-rectangle'/>`

So the any other styling will be handled in CSS

```
    .my-rectangle {
     background: red; 
    }
```

## Groups

SVG has groups represented by the tag `<g>`. Groups are the way to move a cluster of SVG's collectively. They also help you reduce duplication by permitting styling of multiple items at the same time.

## Symbols
`symbol` allows for reusable SVGs. This tag goes with the `use` tag