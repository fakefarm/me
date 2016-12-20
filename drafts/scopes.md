scopes

scopes are rails way of developing business specific queries that can be chainable and produce desired SQL in situations when  not using a scope would produce `nil`. In other words, `scopes` always return a relation.

## #merge
_benefit: eliminate duplication_
Scopes use of `merge` allows you to pass an association's `scope ` so that you do not duplicate logic

    class Post < ActiveRecord
    has_many :comments
    scope :with_approved_comments,
        -> { joins(:comments).merge(Comment.approved) }
    end
    

Now I can call `Post.with_approved_comments` 

Merge also manages situations when a chained scope is referencing the same column. If you do not use `merge`, scopes will use `AND` - which, is most likely not what you want. Using merge will ensure that each `WHERE` clauses is evaluated with the last one taking precedence. 