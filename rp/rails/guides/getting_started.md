# getting started

http://edgeguides.rubyonrails.org/getting_started.html

## File Extensions

_new.html.erb_

The extension of this file name is important: the first extension is the format of the template, and the second extension is the handler that will be used to render the template.

## default response code for POST

Rails by default returns 204 No Content response for an action if we don't specify what the response should be.

## #save returns a boolean
@article.save returns a boolean indicating whether the article was saved or not.

What does #create return? 
What does #save! return?

## render vs redirect_to
Rendering is done within the same request as the form submission, whereas the `redirect_to` will tell the browser to issue another request.

## @instances in #new

The reason why we added @article = Article.new in the ArticlesController is that otherwise @article would be nil in our view, and calling @article.errors.any? would throw an error.

## error CSS class

Rails automatically wraps fields that contain an error with a div with `class='field_with_errors'`

## Associations

You can have all the comments of a particular model just by calling the name of that association.

Associations mean that forms, urls, and controllers all need both objects to work properly - and that makes sense, since the relationship is a specific union of specific instances

## Additional reading
[form helpers](http://edgeapi.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html#method-i-form_for-label-Resource-oriented+style)