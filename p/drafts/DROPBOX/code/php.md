# php

## variables
start with $
case sensitive
no spaces
examples; $item, $Item, $this_variable, $myItem

### Reserved words
Beware of them

## Methods
### echo
Like, puts

## Conditionals

    if ($a > $b){
      echo "a is larger than b";
    }


## Loops

### While
    while(expression){
      statement;
    }

example;

    <?php
      $count = 0;
      while($count <= 10){
        echo $count . ", ";
        $count++;
      }
    ?>

### For

    for(initial; test; each){
      statement;
    }

initiail is an initializing
test is testing
each is executed at the end of every statement


example

    <?php
      for($count = 0; $count <=10; $count++){
        echo $count . ", ";
      }
    ?>

### Foreach Loops
Tailor made for arrays.

Iterate through an array

    foreach($array as $value){
      statement;
    }

## Array Functions

    count()
    max()
    min()
    sort()
    rsort() // reverse sort
    print_r() // print result
    implode(" * ", $variable) // turns into a string. First argument is separator.
    explode(" * ", $thing) // turns string into array.
    in_array(); //boolean

## Questions;
- What does the period mean?

## Random Thoughts
- Wordpress environment
- Wordpress helper methods
- laravel
- Talk to people like brett, and Del about wordpress work
-

## Learn WordPress in 1 week from Lynda.
Installing and Running WordPress: MAMP                                  45m 39s
WordPress 3: Creating and Editing Custom Themes                         4h 28m
WordPress Essential Training                                            6h 43m
WordPress 3: Building Child Themes                                      3h 11m
Start with a Theme: Magazine Styles in WordPress                        1h 18m
WordPress: Building Responsive Themes                                   2h 55m
WordPress Mobile Solutions                                              44m 26s
Start with a Theme: Photography Portfolios in WordPress                 53m 2s
Create an Online Portfolio with WordPress                               3h 13m
WordPress 3: Developing Secure Sites                                    2h 36m
WordPress: Creating Custom Widgets and Plugins with PHP                 3h 51m









