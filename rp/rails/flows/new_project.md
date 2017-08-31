- repo
- prod eng
- deployment

## setup

1. Rails new
2. Add factory girl and faker
3. Add Add env seeds
4. Add resetup and update scripts
5. .ruby-version
6. Pundit
7. Guard & Guard binstub & Guard-rspec
8. Add terminal notifier
9. Add RSpec / springify rspec binstub
10. Use structure.sql


```
# seeds.rb
puts "Seeding '#{Rails.env}'"
require_relative "seeds/#{Rails.env}"
```
