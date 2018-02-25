# Rails Casts

### Refactoring the User (10 - 12)

First, Moved complex content out of view and into a method to be able to call;

    Name: <%= @user.full_name %>

    using this method;

    def full_name
      name = first_name + " "
      name += "#{middle_initial}. " unless middle_initial.nil?
      name += last_name
      name
    end

Then, removed duplication of method by making it an array of arguments. 
The middle initial got tricky, so we converted that argument in to another method. 

    def full_name
      [first_name, middle_initial_with_period, last_name].compact.join(' ')
    end

    def middle_initial_with_period
      "#{middle_initial}." unless middle_initial.blank?
    end

Finally, refactored tests and full name a 3rd time...

*QUESTION* - How does this method calling itself worK? 
(I think it's because it's in a test that it is called, as a second method - but it doesn't call itself, it calls the actual method.)

    def full_name(first, middle, last)
      User.new(:first_name => first, :middle_initial => middle, :last_name => last).full_name
    end

### Dangers of model in session (13)

### performing calculation of models (14)

### fun with Find conditions (15)

### Virtual Attributes (16)

### HABTM Checkboxes (17)