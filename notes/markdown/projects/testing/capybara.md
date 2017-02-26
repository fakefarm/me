# Capybara

/topics
/methods
/dependencies
/configurations
/purpose

## Use

start simple with these basic methods; [resource](http://tutorials.jumpstartlab.com/topics/capybara/essentials.html)

### Visit

The visit method takes an address parameter and will fetch the page. Example:

    visit articles_path

Using the named routes is the preferred option. This allows your routes to change without unnecessarily breaking the test.

### Current Path

The current_path method returns the path without the protocol, server, and port. This is useful for checking that you arrive on a certain page after a previous action took place. For example:


    current_path

That would return "/articles" when you’re on the articles index page. You can make use of the named routes here by doing something like:

    assert_equal articles_path, current_path

## Driving Interaction

The most interesting integration tests involve page actions: click here, fill in that text box, click submit, and see what happens.

You can check out [all the actions available here](http://rubydoc.info/github/jnicklas/capybara/master/Capybara/Node/Actions)

    click_on

You can click on any link or button by using click_on and a CSS-style locator.

    click_on(locator) for links or buttons

    fill_in

    fill_in(locator, with: "My Data") for text boxes or areas

You can fill in text fields or areas by using fill_in with a CSS selector and the with: option to send in the data.

### choose and check

`choose` for radio buttons
`check` for checkboxes

## Examining the Response

It all leads up to this. You’ve forced the virtual browser to follow some path of interactions, now you want to verify the results. Let’s look at how to examine the response.

We’ll stick to the most important methods for this tutorial, but you can check out the full matchers documentation for more.

## HTTP Status Code

An easy thing to check is the HTTP status code. Recall that 200 means everything is OK, 30* are redirects, 40* are user errors, and 50* are system errors.

To get the status code of the current response you’d call:

    page.status_code

In the context of a test you might write:

    assert_equal 200, page.status_code

But you might want to allow a little flexbility and just check that it’s some form of 20* code:

    assert_includes 200...300, page.status_code

## within

Now we want to start looking at page content. As an application grows, the HTML for any given page likely gets quite large. You need to be careful that your Capybara tests don’t pass for the wrong reasons.

One common mistake is to look for certain content on the page intending to find it in the main content body. But, if the content appears in your navigation or maybe in a flash error message, your test could pass.

The within method allows you to scope all your actions down to a certain section of the page. For instance:

    within("#articles") do
      assert page.has_link?(article.title, href: article_path(article))
    end

This will only look for the link inside the DOM node with ID "articles", ignoring everything else on the page.

Note that the parameter to within is a CSS selector, so it can use HTML elements, classes, and IDs. If you can, use an ID to ensure you’re looking at a specific component.

## has_content?

has_content? is defined as:

> Checks if the page or current node has the given text content, ignoring any HTML tags and normalizing whitespace. For example, within an example we might have:

    visit articles_path
    assert page.has_content?("All Articles")

Ignoring HTML tags means that if our page has HTML like "My Super <span>Title</span>" and we ask if it has content "My Super Title" the matcher will return true.

This matcher is extremely broad, basically asking "Does this string appear anywhere on the page?" It might be in the page title as you’re thinking, but it could be in a link that says "Back to All Articles," something text on the sidebar, or anywhere on the page.

Hesitate before writing tests using have_content unless you’re at least scoping down to a component of the page using within like this:

    visit articles_path
    within('#title') do
      assert page.has_content?("All Articles")
    end

This combination gives some reasonable specificity to the match –it’ll have to appear within a DOM object with ID title.

## has_link?

This matcher checks if the page or current node has a link with the given text or id. It’s impartial whether we pass in the actual text of the link or the DOM ID of the link.

    visit articles_path
    assert page.has_link?("Create a New Article")

However, we recommend that you use a CSS ID, even if that means adding one to the view template. Over time, the chance that the text of the link needs to change is very high. While the likelihood of the CSS ID needing to change is low. Using the ID will thus make your test more robust. The above matcher might be rewritten like this:

    visit articles_path
    assert page.has_link?("new-article")

_Note that the # marking it as a CSS ID is omitted._

**:href option**

There’s an additional option, the :href, which specifies where the link points. This option can only be used in conjunction with the "locator" (text contents or CSS id of the link), you can’t use it on it’s own.

You could then assert that the page has a link with the CSS ID new-article and that the link points to the new_article_path like this:

    visit articles_path
    assert page.has_link?("new-article", href: new_article_path)
    has_css?

The has_css? method is [documented here](http://rubydoc.info/github/jnicklas/capybara/master/Capybara/Node/Matchers#has_css%3F-instance_method)

**has_css?** is a general purpose search of the page that will find elements using CSS expressions. It’s basically a more targeted version of has_content?, useful for verifying the existence of DOM elements. For instance, we might write something like:

    visit article_path(article)
    assert page.has_css?("h2#article-title")

That matcher validates that there is an H2 tag with the ID "article-title". We could get more specific and also check the contents of the element:

    visit article_path(article)
    page.has_css?("h2#article-title", text: article.title)

Be cautious when you’re using has_css?, though. It’s easy to write tests that become brittle by tying them too closely to the details of the HTML design. Think about "Should this test break if X tag is changed?" If your SEO expert decides to change the article title to an H1, should that break your tests? There’s no blanket answer, you have to decide what makes sense for your application.

In this scenario, it’d probably be smarter to leave the h2 tag out and just look for an element with the ID of article-title:

    visit article_path(article)
    assert page.has_css?("#article-title", text: article.title)


## matchers and nodes
Capybara comes with [actions](http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Node/Actions) to navigate and find content as well as matchers for test cases.



## Practice
1. create a rails repo
2. install the gems
3. write some tests that help build the page
4. build the page with generators