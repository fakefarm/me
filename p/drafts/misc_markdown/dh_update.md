_9/9/14_

Hey Dave, 

Update and Next Steps thoughts…

UPDATE
Recall I was working on the angular spike in Browse. Using nearby deals lead us to explore testing that spike. Then, testing uncovered part of Angular I didn’t know well enough. 

Since then, I’ve been deep in the underbelly to comprehend how the framework operates. I now have a good grasp on the environment that the ‘public API’ (directives, controllers, services) operates in. 

Specifically, $compile, $digest, $apply, $broadcast, $emit, $q(promises), $watch, $injector, ng-bind to name the main ones. 

I also spent some time (over the weekend) studying how rails and angular work together. I build a little demo app to prove I could get the two to work together. I found some helpful gems to smooth that should relationship. 

I also have been writing simple custom directives. Doing so has shown me the variety of ways and options necessary to make them dynamic. However, I’m not yet clear on the reasons to use link, compile, or controller option. That seems to be one of the last components on the framework I need to understand.

I’m optimistic a test suite should be achievable now that I understand these parts.

NEXT STEPS
1. Spend some time studying custom directive options (link and compile)
2. Set up a test framework using Karma and Protractor to test controllers, directives, and services.
3. Take next steps with the angular code club

How’s that sound?