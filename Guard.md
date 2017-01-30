# Starting a new Gem with Minitest, Guard, and Growl

## Intro
This post is a step by step guide to setting up a new Gem that will use Minitest, Guard, and Growl. I decided to write this after having trouble finding all this information in a single post. 

## Assumptions
This post assumes [bundler](http://bundler.io/) and [growl](http://growl.info/) are installed

## Creating a new Gem

Bundler comes with a handy command; 

`bundle gem [gemname]`

For the sake of this post, my new Gem will be called `screenprintly`. First step run this command and follow the prompts;

> $ bundle gem screenprintly
> Creating gem 'screenprintly'...
> Do you want to generate tests with your gem?
> Type 'rspec' or 'minitest' to generate those test files now and in the future. rspec/minitest/(none): minitest

Tada! The gem is created.

## Adding Dependencies to a Gem;

I am committed to doing TDD and as such the environment needs to be optimal. Two necessary requirements for me are tests to run automatically (Guard) and me notified without changing windows (Growl). I’m going to add those as dependencies to my Gem. Gem dependencies are managed in the `.gemspec` file rather than `Gemfile` as is the way in a Rails project.

### Adding Guard and Guard-minitest.

In this process I learned that in addition to adding Guard, I need to add a Guard runner for Minitest. Add those to the bottom of `screenprintly.gemspec` like so;

```
# screenprintly.gemspec

spec.add_development_dependency "guard", "~> 2.14"
spec.add_development_dependency "guard-minitest", "~> 2.4"
```
  
Those are added by running `bundle install`

#### Configuring the Guardfile

Next is to initialize Guard by running `bundle exec Guard Init`. That command creates a Guardfile. Now, this is where I got tripped up for a bit. The default Guardfile has regex expressions  that were not catching my files. I’m not entirely sure why, but here’s what I changed my Guardfile to;

```
guard :minitest do
  watch(%r{^test/test_helper\.rb$})      { 'test' }
  watch(%r{^test/(.*)\/?_test(.*)\.rb$}) { 'test' }
  watch(%r{^lib/(.*/)?([^/]+)\.rb$})     { 'test' }
end
```

#### Sidebar about my Regex digging…

Getting to that place required looking closely at what I inherited for free. I saw that `watch()` was the a Guard method. So, I just went into the next set of characters. I assumed that `%r{}` had to be a regex. Turns out it’s just like `\..\` but also allows you to not have to ‘escape slashes’. Then, I took the remaining guts (like ^test/test_helper\.rb$) and put it in [rubular](http://rubular.com/) and tested that against my gem directory structure. As I’m just getting started, I want the tests to run anytime I change anything in `lib/` or `test/`. 

One of the promises of putting business logic in a gem is that my tests should be able to run fast since they are not attached to Rails or the DB. So for now, my experience and interest is satisfied.

### Next up, growl.

Following [System Notifications](https://github.com/guard/guard/wiki/System-notifications) I ended up going with Growl. I bought Growl years ago so I’m cool building on what I’ve got. I’m not entirely sure if I had to subsequently download [growlnotify](http://growl.info/downloads) but I did anyway. 

```
# screenprintly.gemspec
…
spec.add_development_dependency "growl", "~> 1.0.3"
```

With that, I believe I have my gem good to go!

## build the gem;

Once I am ready to test out this gem, I’ll run two commands;

```
	> gem build screenprintly.gemspec
```

```
Successfully built RubyGem
Name: screenprintly
Version: 0.1.0
File: screenprintly-0.1.0.gem
```

That does it’s thing. 

## Test it locally

```
	> gem install screenprintly-0.1.0.gem

	Successfully installed screenprintly-0.1.0
	Parsing documentation for screenprintly-0.1.0
	Installing ri documentation for screenprintly-0.1.0
	Done installing documentation for screenprintly after 0 seconds
	1 gem installed
```

At this point I can test it locally by installing it with the local `path` flag.

### Test in IRB
```
$ irb
> require 'screenprintly'
=> true
```

## Push it to ruby gems (Later)

This part comes later…

` gem push screenprintly-0.1.0.gem`