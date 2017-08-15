- repo
- prod eng
- deployment

1. Rails new
2. Add factory girl and faker
3. Add Add env seeds
4. Add resetup and update scripts
1744ac1c44b431b084b841d7d1f16a85d17189b3
5. .ruby-version
6. Pundit
7. Guard & Guard binstub & Guard-rspec
8. Use structure.sql
9. Add RSpec / springify rspec binstub



```
# seeds.rb
puts "Seeding '#{Rails.env}'"
require_relative "seeds/#{Rails.env}"
```
