# The Responsive Web Design Landscape

Users are engaging with our content (or, resources) on a wide range of screen sizes. Depending on the screen size and layout will influnece how they engage (keyboard/mouse vs finger swiping). As a designer, the role has exploded into a need of anticipating and planning for the variety of interaction mediums.


### Mobile device considerations
- swipe
- make buttons bigger
- "HUD" - heads up display

Study Google analytics to determine which devices to target and design for.

## Design Components

1. Color
2. Typography
3. Alignment
4. Scale
5. State


### Typography

#### Font types include
IE - EOT
FireFox - OTF / TTF
Safari & Opera - OTF, TTF, SVG
Mobile Safari - SVG
Chrome TTF, SVG

#### Options
FontSquirrel
TypeKit
Google Fonts

### Application States
Consider the transitions and the states between the primary view. For example, Adding users...

## Working in a team

### Alphabet Soup
Information Architecture (IA) - Flow of info
User Experience (UX) - User psychology
User Interface (UI) - Creates & Lays out visual elements
Interaction Design (IxD) - Pieces the elements together
Instructional Design (ID)
Search Engine Optimization (SEO)
Human-computer Interaction (HCI)
Rich Internet Application (RIA)

### The new Job Rainbow
What once was Designer & Developer is now;
IA, UX, UI, IxD, Front-End Dev


### Typical Workflow
1. Pre-project
2. Mockups
2. client approval
2. production
2. review
2. delivery
2. wrap up

### Kickoff meetings
ability to change early
setup files as we want
request resources - budgets, deadlines

### Non technical aspects
Meet early and ask questions!
Schedule
Budget
Know your own expertise

### Empathy - Questions to ask in defense of the user
Who is the user?
What devices are they using?
Why are they viewing my site?
What browsers will they be using?
How does the navigation work?
What are the expectations?
How do these elements translates into mobile?

### When to ask the designer
Ask which alignments are essential to maintain as the design becomes responsive to different view ports.

### Client communication

#### Expectations
Remind them that it will look different per device.

#### Budget
Additional costs for responsive design
Browser testing and developer time.
Know the budget and have it approved by your client.

#### Follow up meetings
Help

### Design Solutions

#### Diagrams
1. Linear navigation
2. Web map

#### Helpful links
**Freelance**
Creative Hotlist
Coroflot
AIGA
StackOverflow Careers
37signals job board
authentic jobs
programmerMeetDesigner
[50 freelance sites](http://www.hongkiat.com/blog/50-freelance-job-sites-for-designers-programmers-best-of/)


**Also checkout**
[smashing magazine](http://www.smashingmagazine.com/)
[Joshua Sortino](http://joshuasortino.com/)
[JQuery Theme Roller](http://jquerymobile.com/themeroller/index.php)
[How to Size Text in CSS](http://www.alistapart.com/articles/howtosizetextincss/)
# Creating a Responsive Website
For small, medium, and large screens

## Project Flow

### Photoshop Assets
1. Create smart objects for your images.
2. Use the slice tool and set each element
3. Save for web and devices and export each one per sizes
4. Save **(All User Slices)** in directory location

#### Header Example

Small - 500px x 75px
Save at 30% as .jpg
Medium - 800px x 200px
Save at 50% as .jpg

Large - 980w x 240px
Save at 80% as .jpg


### HTML

#### Step 1 - Add CSS Links
Reminder your link to CSS uses href, where JS uses src

##### Add Default stylesheets
    <link rel='stylesheet' type='text/css' href="screen_styles.css"/>
    <link rel='stylesheet' type='text/css' href="screen_layout_large.css"/>

##### Step 2 - Media Queries

Add the additional attribute: **media="only screen and (min-width:50px) and (max-width: 500px)"**

**Stylesheet for small screen size (b/n 50px & 500px)**

    <link rel='stylesheet' type='text/css' media="only screen and (min-width:50px) and (max-width: 500px)"  href="screen_layout_small.css"/>

**Stylesheet for Medium screen size (b/n 501px & 800px) - 1 px bigger than small, and maxes out at 800px.**

    <link rel='stylesheet' type='text/css' media="only screen and (min-width:501px) and (max-width: 800px)"  href="screen_layout_medium.css"/>


#### Step 3 - Support with IE 7 & 8

Incorporate the google shiv in the head

    <!-- HTML Snippet -->

    <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->


#### Step 4 -  Viewport scale with a meta tag
Add a meta tag to notify the browser that device matters

    <meta name="viewport" content="width=device-width, maximum-scale=1.0,minimum-scale=1.0, initial-scale=1.0" />


### CSS

#### Screen_styles

This stylesheet will consist of body, containers, and base headers, paragraphs, and anchors.

![](https://dl.dropbox.com/u/13563632/base_style_css_for_responsive_markup_page.png)

#### Prepare images for HTML

Add universal formatting
![](https://dl.dropbox.com/u/13563632/site_images/background_css_setup.png)

Images will be unstyled at first, but then styled in each screen site
![](https://dl.dropbox.com/u/13563632/site_images/example_site.png)

#### Global Layout & Default (Large Screen) Styling

### Inline Media Queries

    @media screen and (max-width:990px) {
        footer { padding-left: 20px; }
    }

These rules are enabled when the browswer is less than 990 px

    @media screen and (min-width:400px) {
        footer { padding-left: 20px; }
    }

These rules are enabled when the browswer is greater than 400 px





























