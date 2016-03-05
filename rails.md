# Questions

_notes from code school api's on rails course_

```
class ListingHumansTest < ActionDispatch::IntegrationTest
  setup { host! 'api.example.com' } # 1

  test 'returns human by id' do
    h = Human.create!(name: 'Ash') # 2
    get "humans/#{h.id}" # 3
    assert_equal 200, response.status # 4
    
    resp = JSON.parse(response.body, sybolize_name: true) # 5
    assert_equal h.name, resp[:name] # 6
  end
end
```

## Six things going on in this test

1. In order to test a subdomain we must override `example.com`

2. create the human you want to be

3. `get` is a testing method to make a call to the endpoint as a string, or `action`, or even another rack appliction

4. `response` is a testing method that we get and can see it's status and body

5. the response we receive is formatted as `json` since it's over the wire, so we need to parse it back into a ruby `hash`. Pass the `sybolize_name:` flag so that the keys become sybols

6. test that the data we created is also the data that is in the response to demonstrate we took a full lap.
