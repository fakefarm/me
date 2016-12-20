decorators

do not pollute models with Presentation logic. Models are for business logic. ActiveRecord models should be used to manage persistence and associations. Manage view logic by creating a PORO called a Decorator in this situation. You can store those files in `app/decorators/`

Decorators should be transparent. Meaning, they wrap the Model object and delegate most methods back to the model. However, this is the environment for when we want to add _additional_ logic that is specific to views.

## Method missing
If you don't want to port over all the model's attributes, you can apply method_missing which is a special ruby method that is called when a method is, missing. This will send the method to the post model. (feels funny to me but we'll go with it for now)

## respond_to_missing
Using a PORO decorator you will not be able to interrogate the object if it responds to a particular method. If you want that behavior, you'll need to incorporate `respond_to_missing`

TODO: is it possible to move all common validations into a common module? 

## better than Helpers

Rails helpers are rail's off the shelf implementation of decorators. they are easy and simple but they are hard to evolve. They also pollute the global namespace with methods that are really only used for a single model. Lastly, helpers are a functional approach in an Object Oriented framework. Decorators are only instantiated where they are used and maintain object oriented design.