# Stuff_everybody_notes

Notes from talk, [stuff everybody knows](https://www.youtube.com/watch?v=JIJZnF_L5KI&t=1s) from Laurie Voss about agreed upon practices in web development. I wasn’t able to follow his slides that well so these notes need some work. 

1. Dunning Kruger

2. Automate Everything
- typing
- unix (grep, find, awk, sed)

3. Text editors
- get good. the longer you use it, the better. never switch

4. version control

5. What is your job?

50% solving the problem
if you misunderstand how long or how much or what the problem is, you will be labeled as a bad coder. 

50% communication
you need to make sure you understand what you’ve done.

6. HTML is meaningful
- Semantic markup is important and amazing!

7. CSS: the box model
- understand the box model
- turn your css into science, not art.

8. JavaScript
- There is no right way to write js
- there are lots of wrong ways
- learn it
- don’t use it all the time.

## Understanding the difference between Rich apps & flat sites
Rich app (SPAs) gmail take a long time to load but they accomplish a lot and people spend a lot of time on them.
Flat sites, or content sites, such as a media site like NY Times  cannot afford the load times because they are meant for quick content. The point being, there is a spectrum and our job is to know what the problem is in order to offer the right solution. 

## Metrics
- load time vs. latency
- richness vs. indexability (can a robot read your website?)

## Progressive enhancement
- what happens if js is turned off?
- js should be last, not first

people have no attention span on the web so you need to be fast

9. UX 
is what a web app feels like, not what it looks like.
Solve the users problem not mine. Aim for usability over design.

Carousels don’t work.

## Be predictable
links go places, buttons do things.
nobody scrolls horizontally, so don’t do it.
spacial memory is a thing, don’t mess with that. 

## UX starts with URLs
Use PushState to allow deep linking within rich web apps. you cannot share the state of desktop & mobile apps but you can with the web. The web is a stateless protocol.

Users have expectations of how url’s work, which is that they can be shared and they can be the same for any user who looks at same URL. 

- Don’t let URL’s get stale because URL’s get embedded.
- Getting URL’s right can help you scale.

## Be fast

Performance is invisible UX. It’s reason it’s overlooked is because it’s invisible. Being fast is how users feel about your site. **Fast sites encourage exploration.** Even if they want to complete the task they often don’t have the patience to do it.

## Mobile First
Using client site frameworks like React are not mobile friendly. 

## Don’t reimplement browser UI
The browser works well.

11. Accessibility
is not optional
3.4% of web users have limited vision.
- color
- screen sizes
- browser elements work under all those circumstances

12. Databases
There are tons of DB’s and there is no one true DB. You need to pick the right tool for the job.

## CAP theorem
- consistency
- availability (vs. accuracy)
- partition tolerance (

People speak like CAP is a ‘pick 2’ but its more like turning dials. 

## CAP is not the only choice
- indexability (can I look up quickly on other keys?)
- durability
- scalability
- performance

## Types 
- memory (best db every) 
it’s object store. but restricted to one process. 

- memcache
memory across machines. it’s fast but it reboots

- redis
memory++
memory plus rights to disk after 200ms
but if you need more real time, then you can’t use

- MongoDb
very popular b/c it’s great for prootyptes. simple to use and claims to be schemaless but not true - it exists in your code.
It’s hard to work at scale. Doesn’t guarantee avaiableity. 

- couchDb
replication is awesome but terrible everything. Queries are single map reduce. 

- LevelDB
key value store that scales well. Killer feature is you can install with npm. `npm install leveldb`

- MySQL
defacto leader in relational db. MariaDB is the successor to MySQL.

- Postgress
like MySQL but better but just harder to install. 

- Oracle
It’s expensive b/c they show up with DB and a person for no less than 6 figures.

- Riak
high scale DBs. 

- ElasticSearch
specialized db on search. Not to be used as a primary store. It’s a fast searchable cache

- The File System
Surprisingly Capable. You can replicate it. Search it. If you can get away with using the FS, you should.

## Replication
Replication allows you to scale. It’s a scaling strategy but not a backup strategy. 

## Backups
Backups without restores are not backups. Separate backups from where the offsite and off system. Permissions gap b/n what makes the backups and what takes them back.

# Security

- 3 principals of software security

1. you can’t add it later
writing secure software is examine every decision in real time. need to think about it constantly. need to make it secure. 

2. never trust the user 
frequently evil and always dumb.

3. defense in depth
There is no such thing as perfect security. security can always be cracked. You need to just make it inconvenient to crack it. you can only slow them down, you can’t stop them. 

## Cookies
they have lots of dumb features that are actually harmful. Cookies are headers, sent with every request. Cookies add weight  so don’t use them for storage. Use them for an id. 

Cookies often get stolen. You can edit them in JS but turns out only 

`HttpOnly = true` should always be used

`Secure = true` flag

## Always use HTTPS
certs are free! letsencrypt.org

## XSS
inspect all inputs. 

#### CSP 
match only things expecting to run

### CSRF

### RegEx
All interesting problems have been solved so simply use what exists. credit cards, emails, phones, 

# performance
Speed is the only thing that matters.
is speed vs efficiency vs throughput vs latency
Should be optimizing for Speed. 

# Efficiency
(if you’re huge)

# Throughput
(if you’re dumb)

# Latency 
is another type of speed. part of it is application, but it’s more about light traveling.

# Caching
is trading storage for speed. Do it whenever you can.

## Types
- client
- edge 
- asset
- page
- fragment / query
- preprocessing

# USE UTC only time Zones
# Character Encoding (UTF-8)
# Time Formats

# Testing
# Debugging
don’t be superstitious about code. Delete code you don’t understand. If it breaks, then you learn. 

## Write code you don’t understand b/c you learn it!

## Be explorative

## Be deliberate
if you don’t know how you fixed it, you didn’t really fix it.
form a theory, work it and see.

## Binary search is amazing. 
The more code you delete, the less code there is to be wrong.

## Read the error logs

## Write useful errors
(Error at line 1)

# Deployment should be automated
Is a thing the robots should do for you. It is complicated and rare. puppet, chef, ansible 

# Architecture
bad code everyone loves is better than beautiful code nobody uses. everything takes you longer than you expect. 

## Don’t build for scale
build something for 100 users that works. a piece of software is bad that shipped with users is better than good, non-users

## separation of concerns
having any pattern is better than not having a pattern

## modularity
split steps into their own module so it can be used in other ways when it’s done 3 times or more. What’s a module today becomes an API tomorrow

- obvious arguments
- sensible defaults

## Distribution
All systems are eventually distributed systems.

# soft skills

## Planning
building software is easy, finishing software on time is hard
whatever you think it’s going to take 3X as long.

Add time for;
- design
- security
- meetings
- testing
- nobody works 35 hours a week. 15 hours a week of coding is just how it works. 

## Don’t be an asshole
compensation and worth is not the same thing. just because we’re highest paid doesn’t make us most valuable. Everyone is necessary.

# value yourself
your job is never worth your health.

## Sleep
## Exercise
## Diet
## Health

# Never work alone
Don’t struggle by yourself there’s no bonus points. They develop  weird habits and libraries. 

You’re going to be asking questions constantly because that’s how you level up. So you want to dilute the questions as much as you possibly can so that you don’t get annoyed.

# links from talk

More Weight Doesn't Mean More Wait | Filament Group, Inc., Boston, MA
https://www.filamentgroup.com/lab/weight-wait.html

Carousel Usability: Designing an Effective UI for Websites with Too Much Overload
https://www.nngroup.com/articles/designing-effective-carousels/

Beware Horizontal Scrolling and Mimicking Swipe on Desktop
https://www.nngroup.com/articles/horizontal-scrolling/

Nielsen Norman Group: UX Training, Consulting, & Research
https://www.nngroup.com/

Screen Readers: Eight Frequently Asked Questions | Practical Ecommerce
http://www.practicalecommerce.com/articles/2114-Screen-Readers-Eight-Frequently-Asked-Questions

Usability Guidelines for Accessible Web Design: a Report by NN/g
https://www.nngroup.com/reports/usability-guidelines-accessible-web-design/

Ma.gnolia Suffers Major Data Loss, Site Taken Offline | WIRED
https://www.wired.com/2009/01/magnolia-suffer/

What bookmarking sites should a former Ma.gnolia junkie turn to? - magnolia bookmarks social | Ask MetaFilter
http://ask.metafilter.com/113818/What-bookmarking-sites-should-a-former-Magnolia-junkie-turn-to

Hacker Puts Hosting Service Code Spaces Out of Business | Threatpost | The first stop for security news
https://threatpost.com/hacker-puts-hosting-service-code-spaces-out-of-business/106761/

Murder in the Amazon cloud | InfoWorld
http://www.infoworld.com/article/2608076/data-center/murder-in-the-amazon-cloud.html

Catastrophe in the cloud: What the AWS hacks mean for cloud providers
http://www.information-age.com/catastrophe-cloud-what-aws-hacks-mean-cloud-providers-123458406/

Code Spaces goes titsup FOREVER after attacker NUKES its Amazon-hosted data • The Register
https://www.theregister.co.uk/2014/06/18/code_spaces_destroyed/

Getting Started - Let's Encrypt - Free SSL/TLS Certificates
https://letsencrypt.org/getting-started/

Regex Cheat Sheet
http://www.rexegg.com/regex-quickstart.html

Amazon.com: Mastering Regular Expressions (8601400035191): Jeffrey E. F. Friedl: Books
https://www.amazon.com/dp/0596528124?tag=onamazon-20

An Unconventional Guide for Getting a Software Engineering Job — Julia H Grace
http://www.juliahgrace.com/blog/2015/4/9/an-unconventional-guide-for-getting-a-software-engineering-job
