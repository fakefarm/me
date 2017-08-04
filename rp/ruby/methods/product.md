# product

```
COLOR = ['red', 'green', 'yellow']
SHAPE = ['circle', 'square', 'triangle']

COLOR.product(SHAPE).map do |color, shape|
  p "The #{color} of the #{shape}"
end

"The red of the circle"
"The red of the square"
"The red of the triangle"
"The green of the circle"
"The green of the square"
"The green of the triangle"
"The yellow of the circle"
"The yellow of the square"
"The yellow of the triangle"

=> ["The red of the circle", "The red of the square", "The red of the triangle", "The green of the circle", "The green of the square", "The green of the triangle", "The yellow of the circle", "The yellow of the square", "The yellow of the triangle"]
```
