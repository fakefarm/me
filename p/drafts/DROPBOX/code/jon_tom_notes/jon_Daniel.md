# Jon meeting 2015-02-16

# Semantic versioning
Managed by `verion.rb` or right in Gemspec

http://semver.org/
It's a standard, not a technology.
Bundler is smart enough to use.
introduced by github

- Semantic versioning

## Types

### major

### minor x.1.x
adds something to gem that doesn't break any exisitng functionality
changes at a minor way but doesn't change behavior

### patch x.x.1
these restart whenever a big version, like minor
dones't break any versions
fixing a break, like nil

3 versions


#### ~> aka 'Twitawaka'
gem 'whatever', "~> 1.0"
                    1.x
                    # 1.1, 1.2, 1.3

`bundle update whatever` will move from 1.1 to 1.3

http://robots.thoughtbot.com/rubys-pessimistic-operator

## Bump the gem
- update version.rb?

`be rake -T`
**rake release**   # Create tag v2.0.0 and build and push ls-stepford-2.0.0.gem to https://gems.livingsocial.net

Make sure `rake release` is pointing to **gems.livingsocial.net**

### tags
come from running `rake release`
found under `branch / tag` tab

## Review
- merged prs (11 & 12)
- bump ls-browse version (done)
- update browse (done)
- pull projects pr
- run tests
- test locally
    path:
- review code for Q&A

### Notes

#### CHRuby
https://github.com/postmodern/chruby

Ruby Timeout::timeout is bad.

* https://coderwall.com/p/1novga/ruby-timeouts-are-dangerous
https://github.com/ruby/ruby/blob/trunk/lib/timeout.rb#L50
