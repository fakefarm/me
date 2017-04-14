## VRP
publishable.rb
related to state machine
need to confirm arguments on line 35

### Tasks
- sprintly stories
- Javascript
- sql (Need to know what query returns (boolean, association, or array))
- rails
- review competitors; resortquest, homeaway, flipkey, vrbo, airbnb

#### SQL Methods
- order
- limit
- offset
- where

### App Readme
#### Manage Tabs
##### people
##### location
##### benjamins
Location rates required include;
- rate layer (example: Seasons)
- rate period (example: Summer)
- rate rate specifics

## research
statemachine
cancan gem
image magic gem
capistrano - to deply apps



## BDD
Testing is for web apps. So you need interactions, transactions.
Testing is not for websites. You will have a wireframe, or mockup to go off of to know what to test.




### Capybara
I hit some bugs and here are how we solved them

    p page.html

    page.select("id/name/attr")

When making a new app;
in spec_helper.rb, inside the config block.

    config.include Capybara::DSL


#### Debug technique
Start printing out parts of the code to make sure you get what you need.

#### Issues
- Didn't visit the page
- didn't save attributes
- had syntax wrong for select

### Factory Girl
- write the factory
- use the factory
- write code to make it pass

### Rake tasks & DB test prepare
- rake db:test:prepare
- RAILS_ENV=test


## Programming Lesson
- Assignment and saving to DB is a two step process

## Unix
export ABC='123'
echo $ABC
ENV["ABC"] is the same as $ABC


## Ruby
AREL - update & save, or update_attributes

    .to_sql

Converts query into sql

# BDD Notes & Snippets

## 5/22
Reading Everyday Rails a book on testing with Rspec, Factory Girl, and Capybara. Yay!

### Chapter 4 Factories

    it "allows two contacts to share a phone number" do
        contact = Contact.create(...)
        contact.phones.create(...)
        other_contact = Contact.new
        other_phone = other_contact.phones.build(...)
        expect(other_phone).to be_valid
    end

What's the difference between create and build?


### Chapter 3 of Everyday Rails

There are multiple parts to a test;
1. Examples (Pending)
2. Setup code
3. Expectations
4. Actual Code

An expectation is something that you want the code to do.

RSpec has since changed their syntax from `should` to `expect` for a variety of reasons.
Here's an example of how a page should be:

    expect(contact).to be_valid

#### Describe & Context

Use these to help with readability. As a preference suggestion, use `describe` to outline methods, and `context` to outline state


## 5/20

### Capybara

    save_and_open_page

### Rake task

    be rake db:test:prepare


### Define a factory

    Factory.define :tax_agency(model) |f| do
    _add whatever attrs need to make model valid_
    _so, check the app model for what attrs are required_
    f.username "foo"
    f.password 'bar'
    f.password_confirmation { |u| u.password}
    f.email 'foo@example.com'
    end

## Questions

### Why are these nested?

    FactoryGirl.define do
      factory :location_dynamic_rate do
        factory :location_dynamic_rate_a do
          association :dynamic_rate_template, factory: :dynamic_rate_template_a
        end
        factory :other_location_dynamic_rate do
          association :dynamic_rate_template, factory: :other_dynamic_rate_template
        end
      end
    end
