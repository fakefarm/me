# Active Record Callbacks

Active Record provides callbacks into object life cycle so that you can control your application and its data whenever an Active Record object is created, saved, updated, deleted, validated, or loaded from the database.


## Available callbacks

### Creating or Updating an Object
- before_validation
- after_validation
- before_save
- around_save
- after_save (Note: after_save runs always after the more specific callbacks `after_create` and `after_update`, no matter the order in which the macro calls were executed.)
- after_commit/after_rollback

### Unique to Creating an Object
- before_create
- around_create
- after_create

### Unique to Updating an Object
- before_update
- around_update
- after_update

### Destroying an Object
- before_destroy
- around_destroy
- after_destroy
- after_commit/after_rollback

## after_initialize and after_find

The `after_initialize` callback will be called whenever an Active Record object is instantiated, either by directly using new or when a record is loaded from the database. It can be useful to avoid the need to directly override your Active Record initialize method.

The `after_find` callback will be called whenever Active Record loads a record from the database. `after_find` is called before after_initialize if both are defined.

## Running Callbacks

The following methods trigger callbacks:

- create
- create!

- destroy
- destroy!
- destroy_all

- save
- save!
- save(validate: false)

- toggle!

- update_attribute
- update
- update!

- valid?

### after_find is triggered by the following finder methods:

- all
- first
- find
- find_by
- find_by_*
- find_by_*!
- find_by_sql
- last

The `after_initialize` callback is triggered every time a new object of the class is initialized.

## Skipping Callbacks
Just as with validations, it is also possible to skip callbacks by using the following methods:

- decrement
- decrement_counter
- deleted
- delete_all
- increment
- increment_counter
- toggle
- touch
- update_column
- update_columns
- update_all
- update_counters
