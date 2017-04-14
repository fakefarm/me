what is the goal here?

# Goal - display card state history

## technical goals
- we want to use the cardlinking gem? to minimize all the different apps doing stuff themselves. (get rid of duplication)

1. how do we connect / get our SH data?
Q - are we using #get_cardlinking_status or making a diff 
method? (make a 2nd method)

Q - return the states for a card


**task** - get our SH data from method_no_2

## Notes
Anytime I see **502** then that means the task I’m working in requires and additional service.

1. find that service (which happened to be cardlinking service)

2. get me my local data setup (identify which data I need and search that out. ‘state_log’ for this example)
2a. consider a data dump. (like rake db_sync)
2b. or go in an manually (in rails c)


