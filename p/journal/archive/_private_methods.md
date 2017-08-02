# Private Methods

Private methods are your friend. 

One of the many benefits of OOP is the ability to _not_ have to read every line of code. Well named classes and methods provide the ability to skip over the contents of the code. 

Private methods work in a similar fashion. 

Let's use an example to talk through;

I want my users to detonate things so I write the following method;

    def detonate
      # all the code to make something explode.
    end

However, they don't need to know how detonation works. Moreso, things detonate differently from year to year. So Instead of trying to understand how to make things go boom, I could make the method private. Since explosives are dangerous, I should really consider protecting it. 

Two reasons for abstracting;

### Abstract methods 

Abstraction makes for better organized, faster reading and comprehension.

    def detonate
      make_it_explode
    end


### Make it private
I can continually update without hurting anyone. 

    private

    def make_it_explode
      # the rotating internals
    end

### Communications

Private methods are not meant to be called directly. Private methods are intended to communicate to the programmer. My contract with *you* is my public method. 

### Calling if you must
foo.send(:bar_private_method)