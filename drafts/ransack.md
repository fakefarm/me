ransack

Learning something new.

Ransack is not new. In fact, it's so old it is missing a maintainer. However, it's new to me. So these are my notes on how I'm learning it.

Ransack offers 3 services;
- creates complex search forms for your data with minimal setup. 
- creates simple sorting of your data
- offers advanced customization

I'm taking notes because I need more than the simple, out of the box features. Why? Not because I have grandiose plans. But rather, I've taken over a project that uses ransack and I need to do something more complicated. After reading a wide variety of posts about the simple nature of this gem, I've come to realize as such. So, I'm going to document what I've learned so far so that I don't read another simple post. Then, I can record the difficult parts in the event I need them in the future. Kind of like a breadcrumb. So here goes. Lastly, I apologize if my notes are wordy, you're not reading a blog post, you're reading my journal. 

## Hello World - simple search form

1. install the gem
2. update your controller to use it's params
3. create a form using it's search_form


## Hello World - simple filter

Once you install Ransack you get a few methods. 

### #ransack method
### #params[:q])

    @q = Person.ransack(params[:q])

The combination of these two ideas will return a `ransack` object. Then, you must do some extra work to get what you want. The reason is because there are unlimited ways in which you could use this gem.    
    
    @people = @q.result.includes(:articles).page(params[:page])

  # or use `to_a.uniq` to remove duplicates (can also be done in the view):
  @people = @q.result.includes(:articles).page(params[:page]).to_a.uniq
  
## Query Params

Query params, as defined as using the `&` and `?` characters in a uri, like so;

`fakefarm.com/posts?page=1&keywords=coding` are used for filtering, searching, and pagination. Query params are not used for different resources, like `#show` page.

