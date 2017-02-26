# tutorials

Not all tutorials are created equally. But as a newbie, how are you to be able to tell the difference? The way I began to tell the difference was simply to keep watching any tutorial I could find about the subject. This helps you not only learn through repetition but also by discovering aspects of the subject that another tutorial might have missed. 

As a student it's easy to assume the blog writer knows more than you because they are writing a post on the subject you are learning. After all, they have enough wherewith all to write a blog post. However, the barrier to entry is low enough to write a blog post that the post you're reading may in fact simply be their notes on the subject. So, the moral of the story is try to investigate the author while you're learning. 

Since there are many moving parts to software it's difficult to isolate the subject you're learning. So what happens is the author will tend to oversimplify the environment, the example, or even skip aspects that are vital to how you would use the lesson in production. Of course that means you need to do some research. 

What I found and really the basis of this post is that I discovered a few things I resisted for a while because I thought they were dirty tricks. Or shortcuts that were not really production friendly. But come to find out, as a Rails developer, there are a few things I get as a Rails Citizen that other web stacks may not be privy to. Before I dive into what those are, I want to say that while I was learning something else, I mistakenly took these technologies as not serious, or insufficient and avoided them. So now I'm seeing them as actually aspects that Rails can take advantage of.

- query params
I didn't realize that passing GET params via the URI was a common and acceptable way to move content. That's my bad. But now that I see that it is acceptable and comes into my `params` hash, things are starting to make sense.

- curl
The first time I learned of curl was in Michael Hartl's book. I had no idea what to make of it and since we only used it once, I didn't think much of the tool. But now, I see that it can and should be used to short-circuit tasks from the command line. You can test HTTP and help you work with your developing API.

## JS Framework wars
Just because there is a lot of activity in the JS world, I started to ignore the Rails View. But many of the problems trying to solve are not my problems. I am not currently interested in building a Single Page Application or avoiding Ruby in my views. Nor am I avoiding JQuery. At some point I may look into React but not yet.

- erb
- backbone?
- underscore?
- partials
- `remote: true`
- jquery
- turbolinks
- caching
