_3/5_

Questions


## How and when to write a rake task?
Story: Refactor serial assignment from hard coded user_id of 2, to a nil value
Since that isn't breaking, does that mean I'm testing it properly then? 


_2/7/13_

## Web performance

### Old way
In head of HTML, whole bunch of files - 30 .js files, or whatever needed for big app. and more so w/ css

For every js file, that's a single request back to server for that file. If you had '50 files' you had to make 50 request.  

Browsers have a limit of number of requests can make - IE can only make 4 at a time. Which is why pages look funny at times... 

What browswer does is stop to load each asset in a head. so if you have 50 js files, it stops and loads those files before it loads the page. From ux, that means as browser is parsing html, it hits each file - before it gets to the body, which means page will be a white while all assets load.. (BAD UX)

Consequence is Bad for performance, UX, and server. Even if cached...


### How to fix this
#### Technique 0.
For new browswers- async true

#### Technique 1. 
Stick all files at bottom of the page to let the markup load first.
However, problems with CSS at bottom b/c styling wouldn't load.
Typically used for only js and more of a last ditch effort. 
Good optimizatoin. **Although still needs to make multiple ('50') requests.**


#### Technique 2. 
Knowing only limited requests at a time, sprockets come into play...

**Goal** - Combine all js in to one single file to make only one request, instead of '50'.

However, new problem - the single file request might take longer to load b/c it's a larger file. Async loads multiple files to make it faster, but loading one big file loses the async loading ability

**Question** - How take advantage async, loading multiple files, but make few enough to not bottleneck?

(Enter sprokets)
But this the problem solved by sprockets.

The larger the file the longer it takes to load. So, for production use we want to make the asset files as small as possible, to transmit as fast as possible. 

      config.assets.compress = true # from production.rb

Minimizes the file, removes comments, space, and renames variable names to short names. Eliminates irrelevant components

    config.serve_static_assets = false

Puts assets into public/assets folder

The best possible thing to do 

typing

    rake assets:precompile

_Which, Heroku ususally runs for you._

It creates number of files in directory. If you have 

    config.assets.digest = true

Creates a hash of all files to help with cashing. 
What doesn't work about serving  single file (application.js) without the hash, is that the browsers don't know that it's changed. The hash tells the browser that the assets have changed.




### Enter Sprockets - Handles the asset pipeline

- provides a DSL - using 'require' syntax, nice to work with :-)
- consolidates all js files (and css) into single file
- minimizes file
- produces a hash (called a digest) 
- stores the static version of the file in public/directory


#### How
Set all production.rb config settings to true.

TODO - get 'Yslow'


## Dev Logs

    tail -f log/developement.log

Tail is like cat, shows the contents of a file.
- f flag keeps auto-updating that view.

## SEEDS

Automatically apart of Rails 3.

Seedinga system puts data in for it to run properly.

Typical process
1. create a database.yaml file
_usually don't check db.yaml into git/github._

2. rake db:create 
3. rake db:migrate
4. rake db:seed - gets data in that might be necessary for db to run.

Most common uses
- creating a admin user on a new app.

## YAML

Used for static data that doesn't change through out duration of app.
database.yaml file.

TODO
- write a yaml file 
- read it in ruby


## Complext data structures

Consider how quickly I can get to an object. 


## UNIX processes

    rails s -d
    ps aux
    ps aux | grep rails
    ps aux | grep ruby
    kill -9 <PROCESS ID NUM>
    sends a signal to whatever process you are trying to kill.


## Git talk

    git show #####


    git commit -m 'short message' -m 'this can be long message'


pre commit

    git diff <file>


    git checkout <file or directry>
    git checkout readme.md

    _revert my file to origional repo_


### Git workflow
1. gist
2. diff
3. add specifics
4. commit with specific message, add a long message if nec.