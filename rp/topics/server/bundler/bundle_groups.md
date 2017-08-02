# bundle groups

Xray-rails is a great debugging gem. But it was interferring with something else. So we created a new group called `:experimental` 

```
group :experimental do
  gem 'xray-rails'
end
```

So if you want to use it you bundle normal. If you don't want to use it, you run bundle using the `-without` flag like so;

`bundle install --without  experimental`

