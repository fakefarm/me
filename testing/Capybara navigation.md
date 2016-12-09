# Capybara navigation

click_link 'Homepage'
click_button 'save'
click_on 'link or button'

# form specific navigation
These can be looked up by their _form name_, _element id_, or _element name_
fill_in 'first name', with: 'john'
choose 'a radio button'
check 'a checkbox'
uncheck 'a checkbox'
attach_file 'image', '/path/to/img.jpg'
select 'option', from 'select box'

# helper methods
current_path
current_url

# capybara checks
**content**
has_content? 'ash'
has_no_content? 'ash'

**selector**
has_selector? '#zombie_1 h1'
has_no_selector?

has_selector has an options hash;
```
has_selector? '#zombie_1 h1', text: 'ash'
has_selector? '#zombie li', count: 5, visible: true
```

**additionally**

has_link?
has_field?

**lower level**
has_css?
has_xpath?

# within block
scope the search using a within method like so

```
within '#zombie_1 h1' do
    has_content? 'Ash'
end
```

