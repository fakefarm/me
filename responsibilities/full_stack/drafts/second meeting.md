# second meeting

# linux
Most of linux is written in C and hand coded Assembly

# Unix 
most of the commands `ls`, `grep` are written in C.

# Writing a language
Any language that compiles to Assembly is a good fit

# writing an operating system
An operating system is an application of a low level language. So you can write an OS in C, C++, Rust, anything that compiles to Assembly would be a good fit. 

# application stack
What is in an application stack?

# Intermediate languages
Languages that compile to an intermediate langauges. Virtual machines run the byte code. JIT languages that compile to byte code, which is JVM (CLR mirosoft's run time) Compile to byte code, they are languages that have a virtual machine that compiles to an intermediate language that the vm can run. They are very performant. You can get C and C++ level performance with them. Core Engine is in Java. Writing it in C. 

# Stacks

You start at hardware that can receive Assembly. Assembly is the language that is managed by Low level languages which compile into Assembly. Low level languages manage memory and other things. compiled languages like C, C++, and Rust. Then, Low

Hardware Stack 
The ground floor is the hardware

Language Stack
On the groundfloor are languages

Application Stack
Those languages write applications. Applications have a variety of uses; Operating systems, Web Frameworks - to us, rails developers are very different, but in the big picture, they fall into the same bucket.

## Turing Complete
Once you have a language that is Turing Complete, you can build anything in it. You can build applications in C, C++, and Rust. But the reason that languages like Ruby and Python exist are for tradeoffs. 

Languages main features are abstractions. And the reason abstractions are useful is they are supposed to make problems easier to reason about. And they are supposed to make it more expressive and easier to communicate. By making it easier to communicate, it raises developer productivity to get more done with it. And that's worth it. Because People time is usually way more expensive than hardware time. 

# tradeoffs in langauges
As you go from bottom to top, you are trading expression and flexibility for performance and productivity.

# universal languages
all languages have their pros and cons. The closet to universal languages are possibly C and Javascript. Node & JS. But at the bottom of Node is V8's and raw hardware. That's about as close as we're going to get. 

# js is functional or oo?
Defined named functions and pass them around.

# picking the tools
A lot of time a major engineering consideration is picking tools. What do we already know? You want to learn new things but when you need to get a thing done - when you're on a deadline, picking what you know and if it can do the job (as in good fit for the job) 

## R&D vs. Shipping
How much R&D can you afford? It is almost always beneficial to do some R&D before choosing the solution. Thinking through how to solve the problem with architechure and tools. The market is competitive so you have to ship. But taking a few moments to make sure the right tool and path for the job. Out of the tools our team is familiar with, are any of them a good fit for the problem?  if not, then maybe we need to investigate new technologies. 

# node
in theory you have one language so you don't need front end and backend developers. you just need more than one developer.

# speed is not always the most important thing
when you spin up services so fast and forget to consider engineering rigor - you wind up with gnarly performance problems, code becomes unmaintainable, it can be a nightmare

But, those are the problems most businesses say "we won't have those problems for a couple of years and our primary problem is to get to market and to be profitable / solvent". 

So, they work hard with crappy code to get customers. Then they say, now we need to scale it up. Now performance is a problem which we wouldn't have had if we didn't sell something. 

# package managers

# compilers


# Operating systems

## FHS (How the OS manages File Storage)
A File Hierarchy System is a POSIX standard protocol for directory layout in a file system. A directory is where you persist data.  is the expected layout. Posix, which means unix and linux - *nix  essentially follow the same layout. But not purely. The file system is a way to organize hardware storage. FHS. All this is implemented in the OS.

## tcp/ip (How the OS manages Network connections)
TCP is a protocol that rides on top of IP. Once you go under this layer, you start getting back to volts and signals. TCP/IP is layer 2 of the OSI model.
OS implements the tcp/ip protocol
2 networking protocols

## Rails Reading a file
- request comes
- OS has a network port (80, 443)
- web server is running as an OS process listening on 80 & 443
- web server 
- your rails app is a process running on that system, listening on that port.
- app is running as an OS process listening on the network port