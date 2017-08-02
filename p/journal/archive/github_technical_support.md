
**Ticket 1: Rejected pull request from fork**

>To start, I have to say I LOVE GITHUB. You guys rock. I was at your 4th birthday party, thanks for the cupcake and booze!

>Anyway, here's my problem. I sent a pull request to technoweenie, and he rejected it because my master branch is out of sync. What can I do to fix this?

>Help me supportocat, you're my only hope!

>/.Steve

Hint: You'll want to address their question, and you could add an explanation of topic branches as a better workflow.

Ticket #1 response: 

Hi Steve, 

_We're excited to have you and your support! Nothing says 'celebrate' like chocolate and liquor! :-D_

Correcting an out of sync branch is a two-step fix. First, get the latest code from master. This assumes `master` is pointed to technoweenie's branch

    $ git pull origin master 

Then,

    $ git rebase -i origin/master

Rebasing is the term for adding your code to the most recent `master`. The `-i` means _interactive_ so you can squash commits into one, which is what is typically preferred. There's a great post titled [about git rebase](https://help.github.com/articles/about-git-rebase/) that covers a lot of this. Feel free to [hit me back and I'd be happy to walk you through it](https://github.com/woodall/technical-support/issues/new?title=Ticket%201%20response%20from%20@steve&body=my%20master%20branch%20is%20out%20of%20sync.%20What%20can%20I%20do%20to%20fix%20this?)

<hr>

Ticket #2: Syncing internal server and GitHub?

Hi GitHub! My company has an internal Git server used for deployments, we use GitHub, and I work on a local copy of the repository. For workflow purposes, how do I sync my repository to GitHub and the internal Git server?
>
>Thanks,
>vmg

Hint: One common option is Git remotes. There are others!

Ticket #2 response:

Hey VMG,
How's your day going?

To connect your local repo to any remote server first, `$ cd into your repo` and run the following 

    git remote add origin internal-server [repo url]

then for a github remote

    git remote add origin github [repo url]

*note the [repo url] is usually the SSH address like*

    git@github.com:vmg/name-of-repo

Here's a short post titled [Adding a remote](https://help.github.com/articles/adding-a-remote/) which goes into more detail.

<hr>
Ticket #3:  API

>Hi GitHub!
>
>Can you show me how to make an authenticated API request?
>
>Thanks!
>newerthanyou

#### Notes:
Demonstrate a simple request to https://api.github.com/user
https://developer.github.com/v3/users/#get-the-authenticated-user
https://developer.github.com/v3/ (Notes on Authentication)

Ticket #3 response:



Hey newerthanyou -

Are you familiar with [cURL](http://conqueringthecommandline.com/book/curl), the command line tool? Here's an example;

    $ curl --user "woodall" https://api.github.com/users/woodall/followers

In my example, I have `woodall` as the username. 
So, swap `woodall` to whatever your username is;

    > Enter host password for user 'woodall': [password]

I recommend bookmarking the [API Overview](https://developer.github.com/v3/) as it's a great reference for what you're able to accomplish. Please let me know if you need help beyond that.

Good luck!

<hr>
Ticket #4: Unhappy about forking

>JamesTK here, I have another question.

>One of my dev collaborator forked my private repo without explicit permission to do so... is that typical? I am surprised that the system did not notify me if it was okay to grant the fork permission. Is there a way to setup permissions of this sort? Also, other than asking the collaborator to delete the forked repo, can I actually delete it?

>Thanks, jamestk

he only has one personal repository (jamestk/tribbles), 
which has one collaborator. 

Ticket #4 response:

James, 

Collaborators have the ability to fork repos they contribute to since forking is a key component to team collaboration. If you remove the collaborator from your private repo, this [will also remove the collaborator's fork](https://github.com/blog/2034-greater-control-over-forks-of-your-private-repositories). _However, that is really for situations where the collaborator no longer works on the project._

Regarding;

> Is there a way to setup permissions of this sort?

Great question! Any new private repo you create begins with only yourself. 'Permissions' are a topic of team management. Here are two resources for help with that:

1. Intro to [setting up teams](https://help.github.com/articles/setting-up-teams/). 
2. Ongoing management and [maintaining teams](https://help.github.com/articles/maintaining-teams/).

I'm here if you get stuck!

<hr>
Ticket #5 Need to get my account back
THE ONE WHERE I TEACH ..

> Hi, my name is Jorge,
>
> I'm the CTO of JorgeLLC. Last year, an now ex colleague, Fabian Freebird registered a github organization in name of our company. Mr Freebird has left the company in December 2012 and disappeared. The github organization is still registered on his account. So i would like to ask if you could transfer the organization to my account jorge2010.
>
>With kind regards,
>Jorge

Notes:
 
*  Looking at our admin view, JorgeLLC is an organization account with one owner -- freebird72
* Looking at the security history of the organization, the user jorge2010 was never a member
* Furthermore, the organization has never had another owner

GitHub does not change ownership of an account (nor will we transfer code) without a court order. This is for security reasons, to protect a legitimate owner from someone scamming their way into becoming the account owner. Also, it protects us from getting in the middle of a fight that we can't settle. We generally suggest two parties work it out themselves, since this results in faster resolution than going to court.

Ticket #5 response:

Hey Jorge,

Ah this is such a bummer to hear. I actually had a similar situation once so, I know how uncomfortable this is. 

We are not in a position to change ownership (or code) without a court order in order to protect everyone. Be encouraged that cooler heads prevail and if you have anything in writing with feebird72 about your relationship, then that will work to your favor. 



Make sure you read through the beginning first before moving onto the tickets. When you think you're done, 

## shoot me an email to let me know and I will send it to our supportocat team for review.

_email to supportcat_

- make my 5 emails on gh-page to show my code chops
- add some gifs from old www to show some fun


We'd also love if you could share more about yourself so the team can get to know you better! If you could fill this out and send it back along with your ticket responses that would be great:

* Name? Dave

* Location? Boulder

* What's an impressionable experience you've had with customer service/support, and why?


* Tell us about a time where you helped someone.

Northpoint church is a massive hub of kids and volunteers. they get shirts and they bought the shirts from me and they went missing so while i was in the hospital of my firstborn son when i was explaining to the freight company that they were going to pay $5,000 to cover the boxes they lost. The interesting part is the timing of this fiasco. Because when I went home to get my wife more clothes at the hospital, I came home to discover that my house had been robbed. 'Hmm..' I though, 'I wonder who borrowed my Plasma TV and forgot to shut the front door on the way out'. 

* What appeals to you about GitHub, as a company you'd potentially be working for?
I think this is a trick question but I will go ahead and answer anyway. The top developers of the top shops work at Github. And those are only the people I am aware of at github. But Github is an instution of greatness because we manage the beast that is eating the world.

* How would you describe what GitHub does to a non-technical person?
mac answer - time machine
non computer answer - remember when you used to create mix tapes by recording the radio? well, we're like one tape that has all the mixes recorded on top of each other and you can access each recording as you wish.

* What motivates you to work in support?
I love productivity tools and github is my favorite of the bunch. I love that we are a rails app that is better than basecamp 1,2, and 3. I love helping people. I know how to think from a variety of angles - non-tech, tech, beginner, designer.
