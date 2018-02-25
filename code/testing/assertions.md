# Assertions

Assertions are the aspects of the test you are expecting. These parts of the test should be simple. Things such as finding out that something is true, false, exists, or changed.

## mintest

`assert` <conditional>, 'optional message here'

`assert_equal` <expected>, <actual>, 'optional message here'
`assert_not_equal` <expected>, <actual>, 'optional message here'

`assert_responds_to` <object>, :<method>, 'optional message here'

`assert_nil` <object>, 'optional message here'
`assert_not_nil` <object>, 'optional message here'

`assert_match` <pattern>, <string>, 'optional message here'
`assert_no_match` <pattern>, <string>, 'optional message here'

`assert_raise(<error>)` { <code to raise error> }, 'optional message here'

`assert_kind_of(<Class>, <objects>)`, 'optional message here'

`assert_presence` <object>, :<method>


## shoulda

Should cleans up assertion syntax.

Examples

```
should validate_uniquness_of(:name)
should ensure_length_of(:password).is_at_least(5).is_at_most(20)
should validate_numericality_of(:age)

should_not allow_value('blah').for(:email)
should allow_value('a@b.com').for(:email)

should  ensure_inclusion_of(:age).in_range(1..100)
should_not allow_mass_assignment_of(:password)
should belong_to(:<object>)
should validate_acceptance_of(:<method>)
```
