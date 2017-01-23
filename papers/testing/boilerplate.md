#  Boilerplate
When I think of the term boilerplate I typically think of cruft that can be ignored. It's a structure that should be adhered to based on battled tested experiences. While learning to test you might not realize there is a specific pattern to follow for each test. This is welcomed boilerplate. People will have varying complexities of this setup, but at the end of the day it will follow this pattern.

- setup
- expected value
- actual value
- verification: actual == expected?
- teardown

Let's describe each of these and apply simple examples using RSpec and Minitest since those are the two most popular frameworks. 