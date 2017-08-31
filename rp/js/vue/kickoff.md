# T2 tool overview

## webpack

summary:
all plugin based, asset pipeline meets bundler meets rake

Does 4 things:

1. config (in build/)
2. keywords: import / export / build (based on i/e)
3. manages static assets
4. utilizes build plugins
  example: Vue loader plugin

## npm
'gemfile'

## babel vs
JS 6 to 5

# vue friends

## vuex

- thought of as the external 'model' (internal db)
- managed through http

# use cases

- data
  -- spa has no DB
- http
  -- vue-resource (polyfill of fetch api)

- state / auth / auth
  -- we're not in control of db / data
  -- we are responsible for state (TODO: demo components that observe state w/ T2team / AQ)
  --
  

- log / error files
  -- dev tools
  --- TODO - get vue-devtools plugins
  -- js debugger

- caching
  --

- pain points
  -- mocking

# testing

- testing components that don't have state is easy
- complex state, behaviors is hard
- TODO: Avoriaz (get the test)

# day to day

- run `npm install` (like bundle)
- npm run dev (spins up server)
- linting / errors
- `npm run tests`

# general file structure
- file dependencies are managed through 'import'
- we have control over import name and file location
- file org is use case preference
- convention is to name;
  filename, import, component, name the same

# routes
- make routes for 'things'
- use routes, and nested routes to keep track of state
- don't

# types of components
components
components that wrap
child components

# NEXT STEPS
- setup boiler plate
- get to work - how hard can it be???
  - DEMO
    -- Ideas
      -- create a fake login form
      -- create an authenticated view
      --- list of all lic in system
      --- create new lic
      -- create an unauth view

# Questions
- what is the difference between components, services, modules,
