# upgrading rails

I decided to pick up an old project of mine that is on Rails 3.2. Part of the reason I wanted to pick this project up is to see what it’s like to upgrade rails from 3.2 to 5.1. 

## from 3.2 to 4.2.7

I tried to go from 3.2 to 4.0 but ended up jumping all the way to 4.2. I hope that’s okay. I haven’t determined yet.

## rails command
I’m following the [rails upgrade](http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html) which has lots of docs about the differences. I used the `be rake upgrade:rails` command. The dependencies have been most of what I’m tinkering with.


## gems
I yanked out some gems I knew were cruft. 


## strong params
Then, I had to go through the process of changing mass_attributes to strong_params.

## out of style
On top of all this, I’m using Haml! oh man, Okay. I get why it was cool. But now, I don’t want it anymore. It’s the concept of complexity even though it touts simplicity. I’ve got too much to think about.

## stylesheets 
Hitting issues with how I used mixins and such. Bleh. But to be honest, I can tell I was clearly over-engineering my stylesheets. 

## scopes

