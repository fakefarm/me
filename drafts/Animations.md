# Animations
Animation is how we guide users to a stronger call to action. The easiest way to start is by using the `transition` property. 

`transition` takes 4 arguments but the only required one is the duration of the transition. 0.256s is the fastest the human eye can see a transition. 

```
.btn {
    background: red;
    transition: 0.4s; 
}
.btn:hover {
    background: blue;
}
```

## display:none is done

At the time of this writing, `display:none;` is not supported by transitions. So, instead we need to use a combo of two properties which are supported. `visibility` and `opacity`. Opacity takes a 0 - 1 (`opacity: 0.5`) and visibility is either `hidden` or `?`. 

## use caniuse

It's a good practice to keep a tab open with caniuse.com when attempting to push boundaries with the browser. That way you can see what browsers need prefixes and where your site might come up short. 

## Transform key words

### translate
moves Y or X

`transform: translateY(-30px);`  Just y

`transform: translateX(-30px);` just X

`transform: translate(-30px);` both Y & X

`transform: translate(-30px -10px);` both Y & X

### scale
scale will maintain it's original box-model position (center, left, right) so you need to use something like transform origin

`transform-origin: x-axis y-axis z-axis|initial|inherit;`
