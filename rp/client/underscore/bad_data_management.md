# bad data management

Already noticing a trend that functions need to prepare for `null`, `undefined`, and types that the function is not designed for.

Seems that the functions are being good citizens to not throw errors, rather throw undefined.

## flatten

Flatten, for example, checks if something isArray and isArguments before moving forward.
This seems to also check that the data I'm about to work with is kosher.
