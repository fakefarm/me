# Pair w/ Air


## Fresh setup Setup

### Downloads

MAMP
Fresh install from WP.org
[HTML 5 reset theme](https://github.com/murtaugh/HTML5-Reset-WordPress-Theme)

### Comments
Don't touch anything outside of wp-content
Everything outside of wp-content is called _WP Core_
Version control the entire wp installation, not just the theme

### Running MAMP
- setup custom file location in MAMP prefs
- setup local db /
- open php my admin to create db (in database tab)

### wp-config
The one file to change in wp core files
- add db user/name content
- create a salt

### Localhost:8888
- create admin through WP UI

## Admin Dashboard

### Settings panel
warning - don't touch general/wordpress url, or general/site url

1. /Permalinks - permalinks to post name
2. /pages make a static home page
3. /Reading - set home page to static home page
4. /Appearance - activate theme


### Theme branding
- style.css - customize that comment
- update screenshot.png

### Overview

####  <?php wp_head(); ?>
Where all custom wp code is inserted, in head

#### page.php
- standard, non-post pages

#### single.php
- page for posts

## Building layouts
1. make page_name.php

2. add comment (required)

  /*
  Template Name: Home page template
  */

Which, makes it available in any page, under the page attributes section


## 3 types of pages

### 1. partials
- header.php
- footer.php
- sidebar.php

#### Multiple partials
You can have many sidebar partials as long as following format of 'sidebar-foo.php'

### 2. Templates
#### Reusable code
Custom pages I design/build, like a two_column.php, or full_width.php, blog.php

#### Remember, it's defined w/ the comments up top, like;

    /*
    Template Name: Blog Home page
    */

### 3. Inheritance
Default templates, similar to application.html.erb in Rails

- single.php
- index.php
- page.php
- archive.php
- 404.php


## Custom post types
Selling toaster, microwaves blenders

    page-appliances.php (index page)
    single-appliance.php (show page)

## Tools
- code kit
- bourbon
- cyberduck
- godaddy
- neat
- codex
- starter theme (html5reset)


## WP Conditionals
is_homepage
is_single
is_singlar
is_page

    is_page('contact'){
      ... code based on
    }




## Adding Scripts

When adding scripts, add load that to the functions.php file.

    function bar(){
      // My foo script
      wp_enqueue_script( 'myfoo', get_template_directory_uri() . '/_/js/foo.js', array(), '', true );
    }
    add_action('wp_enqueue_script', 'bar');

