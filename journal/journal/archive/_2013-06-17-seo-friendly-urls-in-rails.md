---
layout: post
title: "seo friendly urls in rails"
description: "This is an awesome description"
category: software
tags: ["Rails", "seo", "routes"]
---

What Rails offers as default URL's and what the marketing guys want seem to be pretty far apart.

My latest task involves making our site SEO friendly which included four parts;

1. Make the URL's look like this;

2. Make the search engines happy with proper titles, descriptions, and microdata.

3. Have the Page header display consistent content

This is how I did it.

# Part 1 - Update the URL
change the to_param
make a helper method that over rides the path variable
nest or not
make a slug
adjust your resources
add some validations
use callbacks and before filters in some refactoring
find method find_page (before filter)
match method has arguments

use the "()" in routes to make a part optional.
create a conditional based on params for the index

## How it works;
Routes prepare the param
path helper writes the params for your links
slug index(or param) connect the text to that id row

## URL

Rails default routes are by id record of database.

### to_param
Start by overriding `to_param` method

    class Page ...
      def to_param
        # the default is id
        "#{id}-#{name}".parameterize # This adds the name to the url, like '/7-paper', and the method #parameterize makes the string URL friendly
      end
    end

### Result
Using this technique will produce something like

.../7-paper

But, if you want to remove the id for both security and aesthetic reasons, then you need to add another column to database based off URL parameter.

#### Run a Migration

    rails g migration add_slug_to_pages slug:index

Common convention is to name the column 'slug'

### Removing the id
Use the to_param method and have it call a method called 'slug'

Slug value in a before_save :generate_slug
Also, make a validation so that the slug value is unique

    class Page
      attr_accessible :parent_id, :content, :name

      validates :slug, uniqueness: true, presence: true

      before_save :generate_slug

      has_ancestry

      def to_param
        slug
      end

      def generate_slug
        self.slug ||= name.parameterize
      end
    end

### Update existing records with the slug;

    $ Rails c
    >> Page.find_each(&:save)

find_each is an iterator


### update the controller

    def show
      @page = Page.find_by_slug!(params[:id])
    end

    # Bang method means that a missing url will render a 404.

### Refactor to using a before_filter

Since the query is the same we can move it into a before_filter

    class PagesController
      before_filter :find_page, only: [:show, :edit, :update, :destroy]

      def show
        find_page
      end

    private
      # make a private message find_page
      def find_page
        @page = Page.find_by_slug!(params[:id])
      end
    end

### Remove the model and use only the action

    # routes

    CMS::Application.routes.draw do
      root to: 'pages#index'
      resources :pages, path: ""
    end

Resources method allows a `path` option where we can specific the prefix we want the url to be

#### Confining to select few actions

    # routes

    CMS::Application.routes.draw do
      root to: 'pages#index'
      resources :pages, only: except [:index, :new, :create]

      resources :pages, path: "", except [:index, :new, :create] # this is a catch all so make sure it goes at the bottom.
    end

This will keep the `'/pages/'` prefix on the `index`, `new`, and `create` methods.
It also allows allows everything else except `index`, `new`, and `create` are pages.

### Add one more validation

    validates :slug ...
              exclusion: { in: %w[signup login]}

This validation will make sure that the slug doesn't override any other important urls.


### Nesting page name in routes

Rails colon (example: `:id`) doesn't accept slashes.
But if you use a '*id' instead, it will grab everything, including the slashes

    CMS::Application.routes.draw do
      ...
      get '*id', to 'pages#show'
    end

Now it will set the id parameter to the entire path.

#### Gotcha...
While adding that route, we'll have a url that says `/pages/pricing`, the slug is searching based off the end only `pricing`. So we need to adjust that in the controller;

    # Page Controller...

    def find_page
      @page = Page.find_by_slug!(params[:id].split('/').last)
    end


### Have the full nested path show for links

Make a helper method in the parent model;

    # pages/_submenu.html.erb
    # call a method named 'nested_page_page(path)'

Then,

    # helpers/pages_helper
    module PagesHelper
      def nested_page_path(path)
        '/' + (page.ancestors + [page]).map(&:to_param).join("/")
      end
    end
































# Part 2 - The Header
- make it a helper method in the model

Make a method on the model that is formatted as the marketing guys want;

    class Post < ActiveRecord::Base
      def headline
        "#{content} #{id}"
      end
    end

Then, call it in the view

    <h1><%= @post.headline %></h1>





# Part 3 - the meta and micro data
- use the schema
- use description
- use title
- key words are not used


### Install the Meta tags gem
https://github.com/woodall/meta-tags

### Add display_meta_tags

    <head>
      <%= display_meta_tags %>
    </head>

This setups up the receiver for your meta tags

### Set meta tags with set_meta_tags

    set_meta_tags site: 'Baskets',
                  title: "Fruit",
                  description: "Apples and Bananas",
                  'google-site-verification' => '12345'

Consider putting it into a method in the controller

    def property_meta_tags(post)
     set_meta_tags  site: post.id,
                    title: post.title,
                    description: post.content
    end

Then, call like a normal method per action `property_meta_tags(@post)`

### Allowed options for `display_meta_tags` and `set_meta_tags` methods

Use these options to customize the title format:

* `:site` — site title;
* `:title` — page title;
* `:description` — page description;
* `:keywords` — page keywords;
* `:prefix` — text between site name and separator;
* `:separator` — text used to separate website name from page title;
* `:suffix` — text between separator and page title;
* `:lowercase` — when true, the page name will be lowercase;
* `:reverse` — when true, the page and site names will be reversed;
* `:noindex` — add noindex meta tag; when true, 'robots' will be used, otherwise the string will be used;
* `:nofollow` — add nofollow meta tag; when true, 'robots' will be used, otherwise the string will be used;
* `:canonical` — add canonical link tag;
* `:prev` — add prev link tag;
* `:prev` — add next link tag;
* `:og` — add Open Graph tags (Hash);
* `:twitter` — add Twitter tags (Hash);
* `:refresh` — refresh interval and optionally url to redirect to.

### Resources

[Google meta tags](https://support.google.com/webmasters/bin/answer.py?hl=en&answer=79812)

[Google Webmaster info](http://support.google.com/webmasters/?hl=en)

[meta tags gem README](https://github.com/kpumuk/meta-tags/blob/master/README.md)


# References;

- rails cast
- friendly_id
- google key words
- schema.org
- mike pack
- rails guides on routes
- jeff dean
- meta tag gem



# SEO Microdata

Microdata is a set of tags, introduced with HTML5, that allows you to help search engines and other applications better understand your content and display it in a useful, relevant way.

## Itemscope & Itemtype
By adding itemscope, you are specifying that the HTML contained in the <div>...</div> block is about a particular item.

But it's not all that helpful to specify that there is an item being discussed without specifying what kind of an item it is. You can specify the type of item using the itemtype attribute immediately after the itemscope.

    <div itemscope itemtype="http://schema.org/Movie">
      <h1>Avatar</h1>
      <span>Director: James Cameron (born August 16, 1954)</span>
      <span>Science fiction</span>
      <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
    </div>

This specifies that the item contained in the div is in fact a Movie, as defined in the schema.org type hierarchy. Item types are provided as URLs, in this case http://schema.org/Movie.



# Attributes

## itemscope
wraps the content block

## itemtype
links to schema
there are about 10 categories including;

- thing - the broadest
- creative works which includes: of movie, book, etc.
- events
- organization
- person
- place
- product
- review


## itemprop
label properties of an item.

note, there are specific properties that are associated with the type.
so, if you have a movie type, then an `itemprop='director'` would be one of them.














































