/Users/davidwoodall/Dropbox/300_code/projects/woodall/source/blog/---
layout: post
title: "Jquery"
description: ""
category:
tags: []
---

h1 JQuery

h2 Overview of layers
= image_tag "jquery_layers.jpg", class: "m-image-100"

h2 Hierarchy & Combination seletors
=image_tag "jquery_selectors.png"
=link_to "from Lynda", "http://www.lynda.com/home/Player.aspx?lpk4=56312&playChapter=False"

h3 <em>AND</em> uses a comma $('ul, li.a')
h3 <em>BOTH</em> has no comma $('ul li.a')
h3 <em>Next</em> uses a plus(+) $('ul + p')
p as in, I want the paragraph that's next to the ul
.m-side-note
  h3 siblings
  p elements that are of the same nested level.
h3 Grabbing sibblings example $('#list1 ~ p')
p this will grab the p that are siblings of ID 'list1'

h2 6 types Filters
=image_tag "jquery_filter_types.png"
=image_tag "jquery_filters.png"
=image_tag "jquery_filter_examples.png"

h2 Attribute Filters
p speak to attributes, instead of their values.
p notice that you select an attribute through '[]'
=image_tag "jquery_attributes.png"
=image_tag "jquery_attribute_examples.png"

h2 Content & Visibility Filters
=image_tag "jq_content_visibility_selectors.png"
=image_tag "jq_child_selectors.png"
=image_tag "jq_content_examples.png"

h2 Getting & Setting Content
= image_tag "jq_getting_setting_content.png"
= image_tag "jq_inserting_content.png"
= image_tag "jq_inserting_content_example.png"
= image_tag "jq_manipulating_attrs.png"
= image_tag "jq_manipulating_attrs_examples.png"

h2 Traversing
= image_tag "jq_traversing.png"
= image_tag "jq_traversing_examples.png"
= image_tag "jq_wrap.png"
