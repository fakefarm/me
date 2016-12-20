Concerns

Concerns don't seem to have a good reputation. However, they exist so here are my notes on them. The spirit of a concern is to place code that is duplicated across models or controllers into a single location. 
In order to do so you need to do a few things

- first create a module file
- then, in that module, cut to the chase and extend `ActiveSupport::Concern`  which cleans up syntax. Specifically, providing the `included` block to place common aspects of code. Then, you can add methods as so.
- Lastly, you need to include the module into the classes (models or controllers) which are dependent on the newly created concern.

```
    module Reviewable
      extend ActiveSupport::Concern
      included do
        has_many :reviews, as: :reviewable, dependent: :destroy
      end
      def reviews_rating
        (reviews.positive.count /reviews.approved.count.to_f).round(2)
      end
    end
```

If you need to incorporate Class methods as well, `ActiveSupport::Concern` provides a handy block method to add them. 

```
    module Reviewable
      extend ActiveSupport::Concern
      
      # other stuff cut out…
      
      module ClassMethods
        def with_no_reviews
          # class method guts
        end
      end
    end
```

