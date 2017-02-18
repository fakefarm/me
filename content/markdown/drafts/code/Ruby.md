Ruby

modules 
require a file
incldue it so not to need to use it's namespace

find what's included by ancestors

#inclueded_modules

Inheritance suggests specialization

include exposes as instance methods
extend exposes as class methods

however, calling `extend` on an insteance will expose those methods as instance methods

`instance_object.extend(ImageUtils)`

## Threads
What are they and why should I care?

What is puma and why?


## Varios topics
- blocks, procs, lambas
- Structs
- `define_method`
- `alias_method`
- `send` method
- `class_eval`
- `instance_eval`
- `block_given?`
- `respond_to?`
- `respond_to_missing?`
- `method_missing`

### example

    class Library
      SYSTEMS = ['arcade', 'atari', 'pc']
      attr_accessor :games
      
      def method_missing(name, *args)
        system = name.to_s
        if SYSTEMS.include?(system)
          self.class.class_eval do
            define_method(system) do
              find_by_system(system)
            end
          end
            send(system)
        else
          super
        end    
      end
    private
      def find_by_system(system)
        games.select { |game| game.system == system }
      end
    end
