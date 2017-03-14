file paths
File path management is one of the niceties I skipped over by diving right into Rails from near _zero_. Since these notes are all static then I loose the ability to have something like `root_path`. What a nice feature about Rails! 

That's part of what I'm learning on this project; What mundane aspects of sites that can be handled by a robust framework. Thankfully, I'm not trying to build a framework so I don't need to worry about much more than myself.

What lead me to these thoughts is I literally just finished a major over and thinking that my template pages would reference a single copy of the vendor libraries. Since, they would all be duplicates, I attempted to keep my file size down. (Minified files are not really that big of a deal though). 

Once I got my template right where I wanted it, I tried it out. My use case is my new content will showcase on root. Then, I will move it into whatever category (personal/+, relationships/+, or responsibilities/+). In those two use cases, I'm realizing that based on my constraints, I'm going back to each template having it's own copy of the libs. 

That's just today's thought. Tomorrow it will change.