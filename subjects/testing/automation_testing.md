## Full Stack Automation With Ruby

[visit the site](http://fullstackautomationwithruby.com/)

- [ ] signup
- [ ] go through content
- [ ] ping Rich
- [ ] snippets
- [ ] rbenv
- [ ] FSAR
- [ ] e2e suite for Note

## Selenium

> I like to think of Selenium-WebDriver (RubyGem) as the backbone of Full-Stack Automation with Ruby.

`gem install selenium-webdriver`

### Examples

```
$ irb

require 'selenium-webdriver'

@browser = Selenium::WebDriver.for :chrome

@browser.get("http://fullstackautomationwithruby.com")

@browser.find_element(:link, 'SIGN UP').click

@browser.find_element(:id, 'user_email').send_keys("your_email_address")

@browser.find_element(:id, 'user_password').send_keys("supersecret")

@browser.find_element(:id, 'user_password_confirmation').send_keys("supersecret")

@browser.first(:name, 'commit').click
```



