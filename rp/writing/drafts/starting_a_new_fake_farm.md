# Step 1 Rails New

I wanted to use Postgres so that I can keep local and production data same. Also so that I can have better practice with backing up data. I found these steps from Mastering Modern Payments

$ gem install rails
$ rails new FakeFarmApp --database postgresql
$ cd FakeFarmApp
$ createuser -s FakeFarmApp
$ rake db:create
$ rake db:migrate
$ rake test

# Upgrading a Gem
However, I took a look at FakeFarmApp and I'm going to go ahead and do that. Then, I get a safe upgrade process of 5.0 to 5.1.

http://edgeguides.rubyonrails.org/5_1_release_notes.html

# updateing generators
I know generators are overly basic, but they are a good baby step to get things setup. However, I don't like the cruft of the assets (css or js) or helpers. So, I removed those in application.rb

I like doing generators because they provide a lot of necessary boilerplate for initial development. That includes tests, models, migrations, and routes. Plus, I wanted to see how the new system tests were setup out of the box

# System tests

- Then, I wanted to check out how to run the new system tests. I uncommented the initial test that came with my scaffold. To get system tests to run you need to `bin/rails test:system`

Doing so uncovered a few issues. First, I didn't have the selenium gem installed. Then, after installing, my chrome wasn't cooperating and errored out with an unknown error.

# Chrome error

## Brews and Apps
I checked out brew and noticed I didn't have selenium-stand-alone server so I installed that. Then, I noticed that brew said my command line tools were out of date. Technically, I could have updated them through the app store, but I also found this link

https://developer.apple.com/download/more/

## Solution
I ended up needing to brew upgrade chrome driver like so;

`brew upgrade chromedriver`

And that made my first test pass!

## Step 2 - Adding Users
It’s time I actually roll my own authorization! I’ve pulled out my copy of RailsTutorial to get a refresher on the basics. Before I dive in, I believe that I need to incorporate 3 components, which are authorization, authentication, and sessions.
