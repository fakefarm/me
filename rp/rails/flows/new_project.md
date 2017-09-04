There are a lot of little steps to rememeber to setup a rails app the proper way. By proper way, I mean that I want to be able to have my testing tools and testing environment setup from the outset. Currently, the default testing environment is different the environment I want to be more comfortable with because this is the environment we use at work.

I'm going to set these up individually.

## setup

## 1. Running `rails new` with flags

If you type `rails` without anything following it, you will be able to see what your options are for rails.
I have five flags that I like using for my initial setup.

### The flags

These flags are the ones I am adding a the reason for doing so.

`--database=postgresql` I want to use postgresql locally so I make this flag.
`--skip-keeps` Skip source control .keep files because I don't use them currently
`--skip-coffee` Don't use CoffeeScript
`--skip-test` Skip test files because I'm going to use RSpec instead
`--skip-bundle` Don't run bundle install because I want to modify gemfile before running bundle.

```
  rails new sizes --database=postgresql --skip-keeps --skip-coffee --skip-test --skip-bundle
```

**Commit**

```
  git add .
  git commit 'initial commit'
```

## 2. Set Ruby Version

It's a good idea that you set your ruby version in a file called `.ruby-version` In this project I add the following one line statement;

`$ echo "ruby-2.4.1" > .ruby-version`

**Commit**

```
  git add .
  git commit 'Add ruby-version (2.4.1)'
```

## 3. Clean up Gemfile

Before add any Gems, I like to clear out the GEMFILE by removing unused gems and comments. I plan to use active_model_serializers, pry, and a mac so I don't keep jbuilder, byebug, webconsole, or the windows related gems.

**Commit**

```
  git add .
  git commit 'Remove comments and unused gems'
```
## Step 2: Adding testing dependencies

At this point I'm going to customize Rails to my liking. This includes adding my test suite setup, my test runner setup, and authorization with Pundit. There is no specific order necessary to add these. I just happen to like to add RSpec and it's accompanying tools, then guard and friends, then pundit.

The setup process for each dependencies is a collection of three tasks;

- Installing gems
- Running initialize commands
- Adding certain code to various files

I like working on one dependency at a time to make sure I don't miss anything. I also will reference the README along the way in the event things have changed since last time I ran these commands.

### GEM 1: RSpec-rails

[rspec-rails repo](https://github.com/rspec/rspec-rails/)

RSpec is a tool with an opinionated way of managing a test suite. It is admittedly a bigger code base and specific DSL but the more I spend time in a test-first mindset, the more I appreciate the niceties. It is a bigger learning curve, but I believe it is worth it.

#### Step 1. Add the gem

I am going to install rspec-rails in GEMFILE

`gem 'rspec-rails', '~> 3.6'`

#### Step 2. bundle

Up to this point, I have not run `bundle` yet to install any of the gems. So this is the first time I will run that command to install all dependencies.

`bundle`

I'm coming to accept the benefits of RSpec might be worth the 'bulk' it gets a bad reputation for.
I'm going to use Rspec which involves 4 steps;

#### Step 3. Install the files

Once I've installed RSpec, I need to run a generator command to install a few new files;

`rails generate rspec:install` will add 3 files.

```
  .rspec
  spec
  spec/spec_helper.rb
  spec/rails_helper.rb
```

#### Step 4. add the bin/stub

Run `bundle binstubs rspec-core` to be able to run `bin/rspec`

### Using generators

Once installed, RSpec will generate spec files instead of `Test::Unit` test files when commands like rails generate model and rails generate controller are used.

You may also invoke RSpec generators independently. For instance, running `rails generate rspec:model` will generate a model spec.

### GEM 2: spring-commands-rspec

This gem handles some testing niceties that speed up tests using the Spring gem

Gemfile;

`gem 'spring-commands-rspec'`

Run `bundle`

Initialize

If you're using spring binstubs, run `bundle exec spring binstub rspec to generate bin/rspec`. Then run spring stop to pick up the changes.

Commit

### GEM 3: factory_girl_rails

[Factory_girl](https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md)

Gemfile:

`gem 'factory_girl_rails'`

Bundle

Configure

Add this to `spec/support/factory_girl.rb`

```
RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
end
```
Remember to require the above file in your rails_helper since the support folder isn't eagerly loaded

Then, add `require 'support/factory_girl'`

### Factory Girl Documentation

Factory_Girl has a great [Getting Started ](https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md#defining-factories) guide that will provide insight how to use factories.

### GEM 4: Faker

A library for generating fake data such as names, addresses, and phone numbers.

[Faker](https://github.com/stympy/faker)

`gem install faker`

### GEM 5: Shoulda Matchers

Shoulda matchers help with the syntax for most common rails testing patterns.

Add the Gem

```
group :test do
  gem 'shoulda-matchers', git: 'https://github.com/thoughtbot/shoulda-matchers.git', branch: 'rails-5' # Testing related
end
```

Bundle

Like factory_girl, you'll need to add some code to a support file

```
# spec/support/shoulda_matchers.rb

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
```

### GEM 6: Capybara & Selenium

Capybara and selenium are added by default but it's worth noting them as they play a part in the testing process. These gems are used for system tests which test the UI.


## Step 3: Configuring Development Environment

The development process involves running tests and debugging. As such, we'll use install pry and some other gems to ease development.

### GEMS 7 & 8: Guard & guard-rspec

Guard is a tool for automatically running files. It is a universal tool so it needs to be configured. We want to use it to run rspec tests and the files they add. By adding these two files at the same time we'll be able to get the initialize to configure rspec for us as well

Install

```
gem 'guard'
gem 'guard-rspec', require: false
```

Bundle

Then initialize

`bundle exec guard init`

Bin/stub

Running `bundle binstub guard` will create `bin/guard`

### GEMS 9 & 10: Terminal Notifier & Guard-terminal notifier

Guard adds ability for files to auto run but it doesn't notify you of results. Terminal notifier will alert you of the pass/fail state without having need to change windows.

Gems

```
gem 'terminal-notifier-guard'
gem 'terminal-notifier'
```

The default is for the alert to remain on the window when really all we need is confirmation and for the notification to disappear after 2 seconds. In order to do that, Add this

```
notification :terminal_notifier, timeout: 2 if `uname` =~ /Darwin/
```
To the bottom of your Guardfile.

### GEMS 11 & 12: Pry-rails and pry-doc

You'll need a debugger and pry is the favorite. Pry-doc adds a few more niceties.

```
gem 'pry-rails'
gem 'pry-doc'
```

## Part 3: Essential Aspects

### GEM 13 Pundit

Authorization is what handles permissions for resources. All requests will run through controllers and it's best to consider permissions from the outset, rather than retro fit permissions. These are an essential aspect of any real application.

`gem 'pundit'`

#### Install

Include Pundit in your application controller with two `after_actions` that will fire if your controllers are unprotected.

```
  class ApplicationController < ActionController::Base
    include Pundit
    after_action :verify_authorized, except: :index
    after_action :verify_policy_scoped, only: :index
  end
```


### Use structure.sql




3. Add Add env seeds
4. Add resetup and update scripts

```
# seeds.rb
puts "Seeding '#{Rails.env}'"
require_relative "seeds/#{Rails.env}"
```
- repo
- prod eng
- deployment
