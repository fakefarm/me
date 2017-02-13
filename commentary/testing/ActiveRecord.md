# ActiveRecord

ActiveRecord (AR) is such a massive concept that I forget that it's just thousands of lines of Ruby. AR in itself is not the database. It is the Ruby library that interacts with several databases on your behalf. By several, I mean you will have a separate Database for testing, development, and production environments. This is a great thing. It keeps your data from fake data from being public and your public data from being corrupted. (Or Lost!) 
AR cannot do anything magical or automatically outside of Ruby. To reach outside of Ruby it needs to be configured. That's where other supporting files come into play. Such as migrations, schema.rb, and development.yml files come into play. AR needs those files to configure a database. ActiveRecord doesn't automatically know where you want things stored or what you want in the database but it will help you if you tell it.  Those configuration files feed AR the specific content to setup the database. 


