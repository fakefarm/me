shaun.russell [11:09 AM] 
Exploring events is good. The way i discovered it is i just added a jquery click event and inspected the event and saw that preventDefault was true. then looked at what selectors may have been bound to it

dave.woodall [11:10 AM]
i honestly don't know how to practically do what you mean there. i assume you did it in the console?


shaun.russell [11:10 AM]
yea
just added


`$('.deal-details a').on('click', function(e) { window.testing = e });`

i created a variable "testing" on the window and assigned e to it

then clicked it

so that I could have access to that variable after the click function

`window.testing.isPreventDetail()`

dave.woodall [11:12 AM]
so smooth!
