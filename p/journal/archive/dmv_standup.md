1/25 
- packaged up equpiment
- 1743 - masterpass

------

# 1713
- update static data
- keep just orange background
- remove all of my `trues`
- move 'more info' to card to keep format inline


# 1743
// put masterpass code (not in view, but in..)
// put in controller and build a hash by credit_card_id that has can determine if it's a master pass or not.

call everytime first without optimizing
test in purchases controller a moc k that the td assert_select has 'masterpass' 
ask in the view - 

is it a cc? true? and it's masterpass ? then put MP : last 4.

credit card info comes back so if it's a credit card - put the last 4 (is it a masterpass) mp (<< this isi a masterpass)

STEPS
0. ping @dan on status for 1713
1. write tests - examples of mocking and as_selc.
2. move code into conditional
3. optimize
