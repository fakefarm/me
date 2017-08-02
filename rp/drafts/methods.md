# Reviewing commit history

# in the event i lose my tab..

28 May, 2015 1 commit

# Ruby

## Classes to be comfortable with

Dir.entries('.')
Pathname
File
YAML


# Rails
authenticate_or_request_with_http_token

Fix N+1 Queries with `includes` like so

  @requests = UserRequest.includes(:appliance).all


Scopes are for naming customized queries

  `scope :next, ->(id) { where('id > ?', id).order('id ASC').limit(1) }`

Download using `send_data`

`send_data`

`tap` returns object after executing block

`delegate` - (not sure what that does, exactly... but seems like it is shorthand syntax)
TODO - figure this out

https://apidock.com/rails/ActionController/Streaming/send_data

## Rails Controllers
Notice that it makes sense to let controllers manage authentication since it's a bit of http transfer based on view, user, and data. pundit therefore adds `authorize [Record]` for that spot.

# Questions
- why would you vender the gems?
- how can i get more confortable with ruby blocks?

# Gems
- [transpec](https://github.com/yujinakayama/transpec)
- [fuubar](https://github.com/thekompanee/fuubar)

# Rake
- I need to get better at reading the Rake DSL

# common tasks in a web app
- params
- controller success ,failure
- http methods, responses
- api endpoints
- specs
- data setup with tests
- data manipulation
- scopes
- migrations
- setup capistrano or other
- monitoring
- style / linting

## testing thoughts
reasons to test

- regressions
code should be covered in tests but test coverage doesn't necessarily look the same. in some ways it prevents regressions

- tdd

# TODO
- watch codeschool rspec
- watch codeschool bootstrap
- look to refactor health check in table and remove some of the noisy bootstrap
