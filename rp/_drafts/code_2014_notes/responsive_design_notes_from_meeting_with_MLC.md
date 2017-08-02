# Notes from MLC

## Media Queries should be managed in layout files

    .l-container
    .l-header
    .l-footer
    .l-article
    .l-banner

## Markup with code reuse in mind


## write css that can easily be reused, called modules
    .button
    .navigation

## Don't over-nest

## Colors, padding, typography all should be managed through variables.

    # _typography.scss
    $sans: 'helvetica'
    $serif: 'times'

    # _settings.scss
    $padding: 2em;

#### /base houses common, app-wide components
    _typography
    _colors
    _settings (spacing)
    _base elements

#### Layout
- for layouts




## using 100% fonts
### Question - 100% goes only on body, then ems the rest of time?


## Front End Design Steps
1. - Design a mockup
2. - Grid up and prepare for modular scss
3. - Markup based off grid
4. - Style with modules

## Using Ems
- what to write ems
  - padding
  - margin
  - border
  - font

## Percentages are for
- what do I write in %?




## Example



        .m-hero {
          background: blue;

          .hero--image {}

          .hero--caption {}

          @include media($breakpoint-ipad) {
            background: red;

            .hero--image {}

            .hero--caption {}

          } // @include media($breakpoint)

          @include media($breakpoint-desktop) {
            background: green;

            .hero--image {}

            .hero--caption {}

          } // @include media($breakpoint)

        } // .m-hero
