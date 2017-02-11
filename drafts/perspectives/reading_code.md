# reading_code
Am I attempting to read code wrong by trying watching it grow based on commit history? What I want to do is take a repos first commit and follow the development story but each progressive, newer commit. But for some reason, that is not so easy. 

For example, github used to allow `?page=24` but they have since removed that feature. I just want to go to page one a read from cover to cover. I want to see what code was made first, then read the next commit and see what they did - be it fix typo or add a new feature or move stuff around. 

I just did some searching and was pleased to discover;



## Here’s what I want to do

### see the log in reverse order

`git log --reverse` 

see it in reverse order with just the commit message, compacted

git log --reverse --oneline

### see a file in reverse order

