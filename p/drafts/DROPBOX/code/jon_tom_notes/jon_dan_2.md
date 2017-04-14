# Jon Daniel

_2015-02-19_

- web mock
- vcr

Twitter's #<Twitter::Tweet id=568431855579619328>
 is overriding inspect.

## Getting started on controller tests.
controller should be minimal. from perspective of web browser, not the user. Broweer doesn't care what text or data, it needs headers, codes, request and response info. Think of controllers as black box testing (Don't knwo what's going on and i don't care.)

### Goals
- routing correctly (status codes, redirects, response headers)
- success (proper code) and failure (no stack traces, failing graceflly)

### Steps

1. run api via console to see data

2. we only want relevant data in our test suite

b/c it's a controller test wondering 'what am i testing' Not testing twitter wrapper, **I'm testing how my controller interacts with data.**

3.



## Acceptance test suite should be more vast.
- cucumber or capybara
- minitest with render views

## Resources
Corey Haines - youtube TDD 
