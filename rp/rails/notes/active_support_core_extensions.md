# Active Support Core Extensions

## List of extension

All Objects
Module
Class
String
Numeric
Integer
BigDecimal
Enumerable
Array
Hash
Regexp
Range
Date
DateTime
Time
File
Marshal
NameError
LoadError



## Instance_values

The method `instance_values` returns a hash that maps instance variable names without "@" to their corresponding values. Keys are strings:

```
class C
  def initialize(x, y)
    @x, @y = x, y
  end
end
```
 
`C.new(0, 1).instance_values # => {"x" => 0, "y" => 1}`
