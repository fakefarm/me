## Issue

I recently started building my [shell](http://www.github.com/woodall/shell) from scratch in an attempt to understand what each command means and customize to my own preferences. So I deleted my previous `.bash_profile` cold turkey. I did this after previous attempts of learning bash were halted by a fear of not knowing what I would lose. However, I thought they would be a good way for me to learn those things too :-) 

Running `ruby -v` I kept seeing `2.0.0`. When I ran `which ruby` I saw `/Library/Ruby` even though I knew I had `rbenv` installed. The issue became a blocker when trying to  install `rails 5` and it explained I needed to have at least `2.2` installed.

## Steps 

I went back and slowly went through [rbenv repo](https://github.com/rbenv/rbenv) and discovered a few things

1. I had rbenv installed by both homebrew and git. So, I deleted my homebrew version.

2. export $PATH which I had not added during my shell rebuild
`echo $PATH` this time in my career showed me that the priority of the various bins. I had wondered which I should plan to customize the most. I disovered I should be using `/usr/local/bin` for things like `subl`

3. when `rbenv shell` didn't work I saw that I didn't add the eval() command as mentioned in readme. So, I installed that

4. reminded me how to install rubyies, I need to

```
$ cd ~/.rbenv
$ git pull
```

5. Reminded me of [@glv's trouble free bundler](https://gist.github.com/glv/6004197) so I checked and confirmed that my gems will be installed in each app's `.bundle`


