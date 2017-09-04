# scaffold progress

## UINOUX
Goal: links, routes, status, flow

- get to home page
- create a new product
- add a note to the product

- create a new project from inside product
- confirm project exists


--- phase II -------

## detail - STI

I want to test the Note design to make sure it is working before I do it in detil, since it is a mirror image...
Either it will be the same, or I will save myself some double work

rails g scaffold detail title completed:boolean date_completed:datetime type:string user:references

```
  models = %w(
    productDetail
    projectDetail
    taskDetail
    noteDetail
  )

  models.each do |detail_model|
   `rails generate model "#{detail_model}" --parent=Detail`
  end
```


## activity - STI
maybe it doesn't need to be an STI. Maybe it's just a new entry with some kind of comment about what the activity is?

## standup
review of yeterdays activity

## wishlist
list of items outstanding to try to get done today. keep track of times an item gets 'wishlisted' but not completed.

## sessions
- login / out


--- phase III -------

## Rspec

## Pundit
-- simply authorize everything as true?




-------- DONE -------------

# user
rails g scaffold user first_name last_name email

# project
rails g scaffold project name product:references

## task
rails g scaffold task title user:references product:references project:references

## retro
rails g scaffold retro title verdict completed:boolean completed_date:datetime user:references project:references

## note - STI

rails g scaffold note status:string type:string body:text user:references

```
    models = %w(NoteProject
    NoteTask
    NoteDetail
    NoteQuestion
    NoteRetro
    )

    models.each do |note_model|
     `rails generate model "#{note_model}" --parent=Note`
    end
```

## detail
assigned_to:integer

## note /// STI

Write tests that a note type must be present for a note to save.
Write a test that a note can only be one of the note types

## project status
- backlog
- in progress
- blocked
- completed
