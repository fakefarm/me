# Tortoise.
A planner for to create a balanced, weekly routine.
Slow and steady wins the race.

## About
A project to sharpen my javascript, css, and UX chops.


## New territory
- draggable
- accessing form elements
- where do i create new actions in form.


## Next steps

Create fake data

    {
      "monday": [
        {
          id: 1,
          text: "foo"
        },
        {
          id: 3,
          text: "bar"
        }
      ]
    }

Move helper methods into own class

Build toward this;


    /*
    Activity: Model
    Day:  Collection of Activities
          Renders Activities based on Model
          onDrop: Add Activity Model to collection, re-render activities inside
          Push collection data to LocalStorage (JSON object that's been stringified)
    */
