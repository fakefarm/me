# Group Goals
√ pr - project structure
- router (as it relates to resolve)
- campaigns.json rendered from backend (charities from Rails)
- testing a service (karma / jasmine)

## email / Discussions
ts - follow up $scope vs this (using controller as syntax)

## Questions
- ci
- where is hosted?
- how does Angular play with other frameworks, like Jquery UI?
- what is angular's answer to mobile?
- should we introduce css framework?
- what are the fundamentals we need to group learn?

## future ideas
- css / bootstrap4 / ng-bootstrap
- JWT authentication
- setup Rails() backend to serve JSON
- e2e protractor

## Goals
- learn about angular in an entire app
-- including workflows, structure, areas, mvp
1. - Get a first page done as a group
2. - then, breakup into separate pages / people / tickets.

## Format
- good guys pair with the bad guys.


## Week 6
### Organizing with modules

    index.html
    div ng-app='gs.home'

    index2.html
    div ng-app='gs.dashboard' 

    // global config (i.e app.rb)
    app.module('gs', [])

    // index1
    app.module('gs.home', ['gs'])

    //index2
    app.module('gs.dashboard', ['gs', 'gs.dashboard.indexCtrl'])

    // dashboard ctrl
    app.module('gs.dashboard.indexCtrl', [])

    app.controller = ...


## Week 7
### Swagger 'create example' 
http://code.livingsocial.net/platform/consumer-service/blob/master/app/controllers/locations_controller.rb#L61-L77


### Check out these things;
