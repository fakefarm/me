# stub vs double

Stub is the old way. the new way is to use `double` and `allow` like so

```
RSpec.describe "receive_messages" do
  it "configures return values for the provided messages" do
    dbl = double("Some Collaborator")
    allow(dbl).to receive_messages(:foo => 2, :bar => 3)
    expect(dbl.foo).to eq(2)
    expect(dbl.bar).to eq(3)
  end
end
```

[more info here](https://relishapp.com/rspec/rspec-mocks/v/3-6/docs/basics/allowing-messages)
