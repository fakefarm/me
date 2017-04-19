I want to keep things as simple as possible. SCSS is a great tool but also requires a pre-processor and I want to try to work at the most stable level of css to be comfortable with it. I want to be able to teach people front-end code without the need to incorporate a server or other tooling while they are still learning the concepts of HTML, CSS, and JS which are all difficult enough out of the box. Today I spent some time learning about css variables and the calc function. 

## Variables

css variables have a 4 parts to them. First is you set the declaration inside a psudo class called :root{} then, the syntax is to start the variable with two dashes like so; --variable. You assign it a value like so:

:root {
  --width: 100%;
}

Then, when you want to use that variable, you need to wrap it in a var() which would look like

.wrapper {
  width: var(--width)
}

## calc function

The calc function allows you to create calculations instead of static values.
Here's what it looks like; calc(100 * 20px). So you can calculate a property like so;

.h1 {
  font-size: calc(100 * 20px);
}

 The calc function can also take variables as arguments. So, I used the calc on variables like so;

.wrapper {
  width: calc(0.5 * var(--width));
}

My usecase was related to media queries and font sizes. I want to be able to have a single configuration that can adjust the font sizes of each of the media queries. here's part of my working example;
