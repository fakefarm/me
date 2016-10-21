# Testing

There are four layers of testing that I'm currently aware of. Integration, Functional, Unit, and Routing. 

I had the pleasure of atteding a course by [Sandi Metz](http://www.sandimetz.com/work-with-me). She recommended I read [Growing Object Oriented Softare Guided by tests](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627), (GOOS for short). In the book they discuss the first assignment to get a skeleton test structure in place of Build/Deploy/Test. In my quest to build a skeleton structure I was lead to the idea of testing Routes. Routes are the glue to make sure a request hits the proper controller and action. So, I wonder if end to end testing begins with Routing specs. 

To make sure we're saying the same thing when it comes to grammar; Routing tests, while small ensure things are connected. Unit tests test granular functionality. Functional tests ensure content is glued together. Integration tests go through and click the buttons and make sure things are as the user would view them.
