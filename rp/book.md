book Text processing with ruby




3 main tasks are known as Extract, Transform, and Load (ETL)

1. Acquiring text
Acquiring the text to be processed and getting it into your program. Which includes;
- reading plain text files
- standard input
- delimited files
- binary files

2. Processing Text
- extracting data from within the text
- parsing it into a ruby data structure
- or transforming it into another format
- learning regular expressions

3. outputting text
- to a file
- to a network service
- to the screen

## Opening a File

Once we have a `File` Object we can do all sorts of things with it;
- read from the file
- write to it
- inspect it's permissions
- find out it's path on the filesystem
- check when it was last modified

To open a file, we use the `#open` method, telling it the path to the file we'd like to open. We pass a block to the `#open` method, in which we can do whatever we like. Here's an example;
    
    File.open("file.txt") do |file|
        # …
    end
    
using open, Ruby automatically closes the file after the block finishes. The argument passed to `#open` is a file object that opens in _read-only mode_ unless otherwise specified.

Notice though that you are not yet inside the file. The block is just a safe space to work with the file object. 

### global #open
Technically, you don't need to use `File.open`. You can use a shorthand syntax of just `open("file.txt")`. It is a global API for many types of IO object.

## Reading from a File.

Now that the file is open, it's time to read from it. The simplest way is to read the whole file into a string.

    File.open("file.txt") do |file|
        contents = file.read
    end
    

The `#read` method returns a string containing the file's contents, no matter how large they might be.

### File Reading shorthand (#read)
If all you're doing is reading the contents of a file you can shorten the syntax to

    contents = File.read('file.txt')

This is useful if we want to blindly pass those contents over to something else for processing, like a Markdown processor, or into a database, or to parse as JSON. For example;

    require 'json'
    json = File.read('file.json')
    data = JSON.parse(json)

Often we want to do something with the contents ourselves. The most common task is to split the file into lines and do something with each line. Let's look at a simple way to achieve this.

## Line by line processing


