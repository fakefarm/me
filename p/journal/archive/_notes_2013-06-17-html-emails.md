---
layout: post
title: "html emails"
description: ""
category:
tags: []
---

# HTML email training
- Use tables inside of tables

[Email Standards guide](http://www.email-standards.org/)
[Campaign Monitor Guide](http://www.campaignmonitor.com/css/)

Need to send plain text and html versions, else be at risk of being labeled spam.

### Spam
1. html only - no plain text
2. Images that say we are not spam
3. links with odd urls

#### Legal issues
- identify yourself & business
- tell readers how we got it
- make unsubscribe
- give name and address

### Differences
- All CSS is inline
- Nested HTML Tables
- absolute paths, images
- Arial, helvetica, times new roman

### Tips
- Set margins to lowest level, Like TD level, not table.
- No floats, or padding.
- Use as few tables as possible.
- All image tags need style="border:none;display:block;""
- if something looks broken, check colons, semi-colons, and used double quotes in style declarations
- Always use border=1 in table tags as I build my email layout.
- Alphabetize css definitions: (Color goes before font)
- no css shorthand allowed

copy/paste these for quick use

font-family: Arial, Helvetica, sans-serif;
font-size: 14px; font-weight:normal;line-height:28px;

margin-left:0;margin-right:0;padding-left:0;
padding-right:0;margin-top:0;margin-bottom:0;
padding-top:0;padding-bottom:0;


### Ideal process;
- plan email layout(eg grid, colors, widths, heights)
- code layout in tables
- add content
- add inline styles
[premailer](http://premailer.dialect.ca/)


### Planning
- width needs to be under 600px
- use Photoshop to get hex values
- find all widths

### Styling
- need to put content on body tag
- need to include ms office content wrapper;


[Applying background images to your email newsletters](http://www.campaignmonitor.com/blog/post/3363/updated-applying-a-background-image-to-html-email)

### Plain Text
- goal 65 char wide.
- 60-80 characters wide.
[format guide](http://www.campaignmonitor.com/guides/design/designing/)