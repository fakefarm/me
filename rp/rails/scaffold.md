# scaffold progress


## note /// STI

Write tests that a note type must be present for a note to save.
Write a test that a note can only be one of the note types


## detail - STI

rails g scaffold detail title completed:boolean date_completed:datetime type:string user:references

```
  models = %w(
    productDetail
    projectDetail
    taskDetail
    noteDetail
  )

  models.each do |note_model|
   `rails generate model "#{note_model}" --parent=Detail`
  end
```

## activity - STI
maybe it doesn't need to be an STI. Maybe it's just a new entry with some kind of comment about what the activity is?

## standup
review of yeterdays activity

## wishlist
list of items outstanding to try to get done today. keep track of times an item gets 'wishlisted' but not completed.

## project status
- backlog
- in progress
- blocked
- completed

## sessions
- login / out

## UI


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
