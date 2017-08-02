Another useful variable is `app`.
Calling app in rails console gives you ActionDispatch::Integration::Session instance, and you can use it for making requests and other fun, but most of the time I find this variable helpful for constructing routes in the console. You can simply ‘call’ them on app and you’ll get according strings:
```ruby
> m = Material.last
=> #<Material:0x007fb2fae80008 id: 8,title: ... >
> app.material_path(m)
=> "/materials/8"
> app.material_url(m)
=> "http://www.example.com/materials/8"
```


