[
  ["c"],              todo item
  ["r"],              read seed data, or data from api
  ["c", "c"],         create two models on same page (ui)
  ["c", "r"],         email signup confirmation form
  ["r", "c"],         comment on a post
  ["r", "u"],         read upvote
  ["r", "d"],         read api data, delete it
  ["c", "c", "r"],    two models on same page ajax
  ["c", "c", "d"],    two models then delete them
  ["c", "r", "c"],
  ["c", "r", "u"],
  ["c", "r", "d"],
  ["c", "u", "d"],
  ["c", "c", "r", "c"],
  ["c", "c", "r", "u"],
  ["c", "c", "r", "d"],
  ["c", "c", "u", "r"],
  ["c", "c", "u", "d"],
  ["c", "c", "d", "c"],
  ["c", "r", "c", "r"],
  ["c", "r", "c", "u"],
  ["c", "r", "c", "d"],
  ["c", "r", "u", "d"],
]

read data
- seed supply (user profile)
- from API (silver prices)
- Submitted by ui (email signup)

update data
- seed supply (user profile)
- from API (up vote story)
- Submitted by ui (username)

delete data
- seed supply (fake todo items)
- from API (silver prices)
- Submitted by ui (user profile)
