# Routing

## Url and Controller namespacing

### URL demonstrating organization

You may wish to organize groups of controllers under a namespace. Most commonly, you might group a number of administrative controllers under an `Admin::` namespace. You would place these controllers under the `app/controllers/admin` directory, and you can group them together in your router:

```
namespace :admin do
  resources :articles, :comments
end
```

### URL without organization

If you want to route `/articles` (without the prefix `/admin`) to `Admin::ArticlesController`, you could use:

```
scope module: 'admin' do
  resources :articles, :comments
end
```

## What is Shallow Nesting?

## Routing concerns

## url_for for objects

You can also use `url_for` with a set of objects, and Rails will automatically determine which route you want:

`<%= link_to 'Ad details', url_for([@magazine, @ad]) %>`

In this case, Rails will see that `@magazine` is a Magazine and `@ad` is an Ad and will therefore use the  `magazine_ad_path` helper. In helpers like link_to, you can specify just the object in place of the full url_for call:

`<%= link_to 'Ad details', [@magazine, @ad] %>`

If you wanted to link to just a magazine:

`<%= link_to 'Magazine details', @magazine %>`

For other actions, you just need to insert the action name as the first element of the array:

`<%= link_to 'Edit Ad', [:edit, @magazine, @ad] %>`

This allows you to treat instances of your models as URLs, and is a key advantage to using the resourceful style.
