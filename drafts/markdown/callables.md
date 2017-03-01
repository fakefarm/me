## CALLABLES / Functional programming

class Symbol
  def to_proc
    Proc.new do |obj|
      obj.send(self)
    end
  end
end

// array =  [1, 2, ...]
// array.inject(:+)

class Factory
  def make_a_terminator
    Proc.new do |target|
      puts "terminate! die #{target}"
    end
  end
end

factory = Factory.new
terminate = factory.make_a_terminator
terminate = Proc.new do |target|
              puts "terminate! die #{target}"
            end

terminate.call('john cohnor')

terminate = function (target)
              puts "terminate! die #{target}"
            ...

terminate('john cohnor')


['sarah', 'john', 'ashley'].each &terminate

class Terminator
  def kill(target)
    puts "die #{target}"
  end
end
terminator = Terminator.new
['sarah', 'john', 'ashley'].each do |target|
  terminator.kill target
end
