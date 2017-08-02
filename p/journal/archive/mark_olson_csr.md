# mark Olson on CSR

> I'm interested to hear about your CSR ramp up is still fresh in your mind, I'd love to hear that first 10 or so steps you did / do when starting on a new app. To put it into a question, 

## "What are your first steps to gain context with a new app?"

- UPPER CASE FILES

readme.

script/bin

procorfile - how the app is used.
what things are expected to start up and be processing data.

graphite 

gemfile and look at all the 'ls-' gems to get a sense of how the app is built out and what's it's capabilities are.

routes
- how complicated app based on how many end points

lib/
look at libs dir and we'll figure it out

db schema
what we do is stored in the db tables
- looking for complexity. 'mass action' if you're working on a feature and you see multiple tables that are named the same.

app/

## models flip through for
- nesting
- look at associations and see what hangs off and see what 'extra methods' I get.
Then, open up an assiction - example; Person.guest_account
- then the inverse, is to look at the internal general complexity of the methods.
- like, external api calls.
- follow your general curiosity 


## run tests now

## be able to login
which means I muddle through getting all these thing external services.
grab a route in routes and try to get there.

## 

# Events Directory
(talk with mark later)


# my assumptions
## deployable
Will trust that is taken care of.

## monitor
look at new relic
graphite.livingsocial.net via LS::Stats        

 ## Graphite lets us store;
 - time requests
 - 


## manifest is a product specific file
manifest.yml - that the errors notify email will send execptions.
http://techops.livingsocial.net/apps/csr_tool

