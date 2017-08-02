Hey Brian,

Would you mind expounding on the assets / manifest portion?

Here's my current understanding (and how I got it to work..)
1. Add dependency to `.gemspec
2. Add `require 'neat'` to `lib/marketing.rb`

Is that how you would do it to?

I was able to get slim to work in my engine, only after following a trail of discovering that I had to require it in my [race.rb]() file.

Also, I see that you're using

      app.config.assets.precompile += ["account/manifests/*"]

but, I don't see any directories named manifests

I assume it's somehow connected to manifest.rb, but I don't much clairty on it.

Say you wanted to use a grid like [neat]() in the marketing. Could you provide the steps you do, or what helps automate some steps?

